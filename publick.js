function my$(x){
    return document.getElementById(x)
    
}
function funX(element,target){
    // 获取当前的element的left
        let Oleft = element.offsetLeft,
            
        // 设置速度变量 （控制图片移动快慢）
            step = 10;
            // 设表先关
        clearInterval(element.anim);
        // 绑定定时器
        element.anim = setInterval(function(){
            // 动态获取left的值
            Oleft = element.offsetLeft;
            // 三元判断
            target > Oleft ? Oleft+= step : Oleft -= step;
            // 移动div
            element.style.left = `${Oleft}px`;
            // console.log(Oleft);
            // 清楚定时器
            if(Oleft == target){
                // 清楚定时器
                clearInterval(element.anim);
            }
            if(Math.abs(target - Oleft) > Math.abs(step)){//如果目标减去我们的当前>步数就走
                element.style.left = Oleft + "px";
            }else{
                // 清除定时器
                clearInterval(element.anim);
                element.style.left = target + "px";//当步数小于我们的step的时候直接到目标 
            }
        },1)
    }; 
