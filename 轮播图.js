let img = document.querySelectorAll('img'),
    imglen = parseInt(img.length - 1),
    left = document.querySelector('.left'),
    right = document.querySelector('.right'),
    box = document.querySelector('.box'),
    cir = document.querySelectorAll('.cir'),
    wrap = document.querySelector('.wrap'),
    index = 0,
    x = document.querySelector('.X'),
    fon = document.querySelector('.fon'),
    fond = document.querySelector('.fond');
    // 图片的切换效果
    function fun(x){
        index += x
        if (index > imglen) {
            index = 0;
        }else
        if (index < 0 ) {
            index = imglen;
        }
        for (let i = 0; i < img.length; i++) {
            img[i].style.cssText = `opacity: 0;z-index: 0;`
        }
        img[index].style.cssText = `opacity: 1;z-index: 9;`
        for (let i = 0; i < cir.length; i++) {
            cir[i].style.cssText = `background: rgba(255, 255, 255, 0.52);`
        }
        cir[index].style.cssText = `background: white;`
    }
    // 小圆点的切换效果
    // 右按钮的点击效果
    right.onclick = function(){
        fun(1);
    }
    // 左按钮的点击效果
    left.onclick = function(){
        fun(-1);
    }
    // 每个小圆点的点击效果
    for (let i = 0; i < cir.length; i++) {
        cir[i].onclick = function(){
            index = i;
            fun(i);
        }
    }
    // 自动轮播效果 当鼠标放到图片上的时候停止
    function anim(){
        fun(1);
        funa = setTimeout(anim,3000);
    };
    // 绑定计时器效果
    let funa = setTimeout(anim,3000);
    wrap.onmouseover = function(){
        clearTimeout(funa)
        console.log('yes');
    }
    wrap.onmouseout = function(){
        funa = setTimeout(anim,3000);
        console.log('no');
    }
    // 点击图片 显示大图
    for (let i = 0; i < img.length; i++) {
        img[i].onclick = function(){
            // fond.style.backgroundImage = "url('"+this.src+"')";
            fond.style.backgroundImage = `url(${this.src})`;
            fon.style.display = 'block';
        }
    }
    x.onclick = function(){
        fon.style.display = 'none';
    }
