let image = document.querySelectorAll('.image'),
    img = document.querySelectorAll('img');
    Ibox = document.querySelector('.Ibox'),
    btn = document.querySelectorAll('.btn')
    left = document.querySelector('.left'),
    right = document.querySelector('.right'),
    cir = document.querySelectorAll('.cir'),
    wrap = document.querySelector('.wrap')
    Time = '.2s',
    speed = 'ease',
    index = 1,
    imageLen = image.length,
    imgLen = img.length;
    Ibox.style.width = `${imgLen*500}px`;

    function btnL(x){
        cal(index += x)
        console.log(index);
    }
    function btnR(x){
        cal(index += x )
        console.log(index);
    }
    function cal(x){
        Ibox.style.cssText = `
        width:${imgLen*500}px;
        transform: translateX(${index*-500}px);
        transition: transform  ${Time} ${speed};
        `

        if (index > 5) {
            Ibox.style.cssText = `
            width:${imgLen*500}px;
            transform: translateX(-500px);
            animation: animR ${Time} ${speed};
            `
            index = 1;
            
        }
        if (index < 1) {
            Ibox.style.cssText = `
            width:${imgLen*500}px;
            transform: translateX(${(imageLen)*-500}px);
            animation: animL ${Time} ${speed};
            `
            index = imageLen;
            
        }

        for (let j = 0; j < cir.length; j++) {
            cir[j].style.cssText = `background:rgba(255, 255, 255, 0.52);`
        }
        cir[index - 1].style.cssText = `background:white;`
    }
    for (let i = 0; i < cir.length; i++) {
        cir[i].onclick = function(){
            index = i+1;
            Ibox.style.cssText = ` width:${imgLen*500}px;
            transform: translateX(${index*-500}px);
            transition: transform  ${Time} ${speed};
            `;
            for (let j = 0; j < cir.length; j++) {
                cir[j].style.cssText = `background:rgba(255, 255, 255, 0.52);`
            }
            cir[i].style.cssText = `background:white;`
        }

    }
    let aaa = setInterval(function(){
        btnR(1);

    },3000);
    wrap.onmouseover = function(){
        clearInterval(aaa);
        for (let i = 0; i < btn.length; i++) {
            btn[i].style.display = 'block'
            
        }
    };
    wrap.onmouseout = function(){
        aaa = setInterval(function(){
            btnR(1);
        },3000);
        for (let i = 0; i < btn.length; i++) {
            btn[i].style.display = 'none'
            
        }
    }