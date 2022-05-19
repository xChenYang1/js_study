window.onload = () => {
  let img = document.querySelectorAll('img'),
    imglen = parseInt(img.length - 1),
    left = document.querySelector('.left'),
    right = document.querySelector('.right'),
    box = document.querySelector('.box'),
    cir = document.querySelectorAll('.cir'),
    wrap = document.querySelector('.wrap'),
    index = 0,
    index1 = 0,
    judge = 0,
    x = document.querySelector('.X'),
    fon = document.querySelector('.fon'),
    fond = document.querySelector('.fond');
  let url = [
    "https://cdn.jsdelivr.net/gh/xChenYang1/lotsof@1.112/image/2_crown_8k.jpg",
    "https://cdn.jsdelivr.net/gh/xChenYang1/lotsof@1.112/image/8_LunarNewYear2_4k.jpg",
    "https://cdn.jsdelivr.net/gh/xChenYang1/lotsof@1.112/image/20_sky1_4k.jpg",
    "https://cdn.jsdelivr.net/gh/xChenYang1/lotsof@1.112/image/21_sky2_4k.jpg",
    "https://cdn.jsdelivr.net/gh/xChenYang1/lotsof@1.112/image/22_sky3_4k.jpg",
    "https://cdn.jsdelivr.net/gh/xChenYang1/lotsof@1.112/image/Jade-Wallpaper.jpg"
  ]
  img.forEach((item,index) => {
    // item.setAttribute("src",url[index])
    item.src = url[index]
    // item.style.cssText = ``
  });
  console.log(img);
  // 图片的切换效果
  function fun(x) {
    index1 = index;
    // 如果判断值judge为0 则是箭头被点击
    if (judge == 0) {
      index += x;

    } else {// 否 则小圆点被点击 此时 执行的函数不同
      index = x;
    }
    // 如果计数器大于最大值 或小于最小值 则回到最小值 或者最大值
    if (index > imglen) {
      index = 0;
    } else
      if (index < 0) {
        index = imglen;
      }
    // 排他思想
    for (let i = 0; i < img.length; i++) {
      img[i].style.cssText = `z-index: 0;display:none`
    }
    // 使上一张被点击的图片位于这一次被点击的图片的下面 但又在其他图片的上面 （其他图片z-index:0;）
    img[index1].style.cssText = `opacity: 1;z-index: 1;`
    img[index].style.cssText = `opacity: 1;z-index: 2;
        animation:  anim .8s linear;
        `// 给被点击的图片 添加透明度渐变效果

    // 小圆点的显示效果 排他思想
    for (let i = 0; i < cir.length; i++) {
      cir[i].style.cssText = `background: rgba(255, 255, 255, 0.52);`
    }
    cir[index].style.cssText = `background: white;`
  }
  // 右按钮的点击效果
  right.onclick = function () {
    funR()
  }
  // 左按钮的点击效果
  left.onclick = function () {
    funL()
  }
  // 设置右按钮 动画执行时 使按钮失效
  function funR() {
    right.onclick = null;
    // 设置判断值
    judge = 0;
    fun(1);
    setTimeout(function () {
      right.onclick = function () {
        funR()
      }
    }, 800)
  }
  // 同样设置 左按钮
  function funL() {
    left.onclick = null;
    judge = 0;
    fun(-1);
    setTimeout(function () {
      left.onclick = function () {
        funL()
      }
    }, 800)
  }

  // 每个小圆点的点击效果
  for (let i = 0; i < cir.length; i++) {
    cir[i].onclick = function () {
      judge = 1;
      fun(i);
    }
  }
  // 自动轮播效果 当鼠标放到图片上的时候停止
  function anim() {
    judge = 0;
    fun(1);
    funa = setTimeout(anim, 3000);
  };
  // 绑定计时器效果
  let funa = setTimeout(anim, 3000);
  wrap.onmouseover = function () {
    clearTimeout(funa)
    console.log('yes');
  }
  wrap.onmouseout = function () {
    funa = setTimeout(anim, 3000);
    console.log('no');
  }
  // 点击图片 显示大图
  for (let i = 0; i < img.length; i++) {
    img[i].onclick = function () {
      // fond.style.backgroundImage = "url('"+this.src+"')";
      fond.style.backgroundImage = `url(${this.src})`;
      fon.style.display = 'block';
    }
  }
  x.onclick = function () {
    fon.style.display = 'none';
  }

}