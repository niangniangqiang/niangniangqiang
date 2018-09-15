 //新闻轮播图
 window.onload = function (){

    var rolling = document.getElementById("rolling");
        var adPic = rolling.children[0];      //获取box下的第一个元素，也就是inner
        var ul = adPic.children[0];       //获取inner下的ul
        var adBtn = adPic.children[1];   //获取inner下的第二个元素
        var spans = adBtn.children;   //获取所有的按钮
        var imgWidth = adPic.offsetWidth;
    //   alert(imgWidth);
        //给每个按钮注册鼠标经过事件
        for(var i=0; i<spans.length; i++){
          spans[i].index = i;      //把索引保存在自定义属性中
          spans[i].onmouseover = function(){  //鼠标经过事件
            //排他 干掉所有人 
            for(var j=0; j<spans.length; j++){
              spans[j].className = "";
            }
            //留下我自己
            this.className = "current";
            //以动画的方式把ul移动到指定的位置
            //目标 和当前按钮索引有关，和图片宽度有关 而且是负数
            var target = -this.index * imgWidth;  //获取到索引
            animate(ul,target);
          }
        }
        function animate(obj, target) {
          clearInterval(obj.timer);
          obj.timer = setInterval(function () {
            var step = 20;
            var step = obj.offsetLeft < target ? step : -step;
            if (Math.abs(obj.offsetLeft - target) > Math.abs(step)) {
              obj.style.left = obj.offsetLeft + step + "px";
            } else {
              obj.style.left = target + "px";
              clearInterval(obj.timer);
            }
          }, 15)
        }      
 }
