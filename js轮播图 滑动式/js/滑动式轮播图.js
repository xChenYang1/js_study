let image = document.querySelectorAll('.image'),
    img = document.querySelectorAll('img');
    Ibox = document.querySelector('.Ibox'),
    left = document.querySelector('.left'),
    right = document.querySelector('.right'),
    cir = document.querySelectorAll('.cir'),

    index = 1,
    imageLen = image.length,
    imgLen = img.length;
    Ibox.style.cssText = `width:${imgLen*500}px`;
    right.onclick = function(){
        index++;
        console.log(1);
        if (index > image.length ) {
            index = 1;
            Ibox.style.cssText = ` width:${imgLen*500}px;
            transform: translateX(-500px);
            transition: transform 0.2s;
            `;
        }else{
        Ibox.style.cssText = ` width:${imgLen*500}px;
                                transform: translateX(${index*-500}px);
                                transition: transform 0.2s;
                                `;
            if (index == image.length) {
                setTimeout(function(){ Ibox.style.cssText = ` width:${imgLen*500}px;
                transform: translateX(0);
                transition: none;`}
                ,200)
                }
            }
        for (let i = 0; i < cir.length; i++) {
            cir[i].style.cssText = `   background:rgba(255, 255, 255, 0.52);`
            
        }
        cir[index - 1].style.cssText = `background:white;`

    }
    for (let i = 0; i < cir.length; i++) {
        cir[i].onclick = function(){
            index = i+1;
            Ibox.style.cssText = ` width:${imgLen*500}px;
            transform: translateX(${index*-500}px);
            transition: transform 0.2s;
            `;
            for (let j = 0; j < cir.length; j++) {
                cir[j].style.cssText = `background:rgba(255, 255, 255, 0.52);`
            }
            cir[i].style.cssText = `background:white;`
        }
        
    }
