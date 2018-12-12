# JavaScript 全屏展示

浏览器都有页面全屏的功能 F11 ，那么如何用JavaScript控制页面全屏呢？[MDN上提供的的API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API#Prefixing) , 一个小demo验证一下！

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>全屏</title>
    <style>
        html,
        body {
            height: 100%;
        }

        img {
            display: block;
            margin: 100px auto 0;
            width: 900px;
            cursor: pointer;
        }
        /* webkit和IE在元素进入全屏后，会保持元素原有的尺寸，所以需要通过css伪类进行设置 */
        img:-webkit-full-screen{
            width: 100%;
            height: 100%;
        }

        img:-ms-fullscreen {
            width: 100%;
            height: 100%;
        }
    </style>
</head>

<body>
    <img id="target" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530343927072&di=ba9a25dc1d88a14556abf44106a32a4f&imgtype=0&src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Fe9%2F3d%2Ffc%2Fe93dfc90c7406e68dd72afac6dda0357.jpg"
        alt="">
    <script>
        window.onload = function () {
            let img = document.querySelector('#target');
            // 监听事件 注意不同浏览器的兼容性问问题

　　　　　　　// 错误事件为：fullscreenerror ， 同样注意前缀
            document.addEventListener('fullscreenchange' , function() {
                console.log('全屏切换！')
            })
            document.addEventListener('webkitfullscreenchange' , function() {
                console.log('全屏切换！')
            })
            document.addEventListener('mozfullscreenchange' , function() {
                console.log('全屏切换！')
            })
            document.addEventListener('MSFullscreenChange' , function() {
                console.log('全屏切换！')
            })

　　　　　　　// 图片点击切换全屏
            if (isFUllScreenEnabled()) {
                img.addEventListener('click', function () {
                    if (hasFullScreenElement()) {
                        exitFullScreen();
                    } else {
                        setFullScreen(img);
                    }
                });
            } else{
                console.log('此浏览器不支持全屏');
            }
        }
        
        
        // 判断浏览器是否支持全屏
        function isFUllScreenEnabled() {
            return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
        }

        // 判断是否有已全屏的元素
        function hasFullScreenElement() {
            return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
        }

        // 将目标元素设置为全屏展示
        function setFullScreen(target) {
            if (target.requestFullscreen) {
                target.requestFullscreen();
            }
            if (target.webkitRequestFullscreen) {
                target.webkitRequestFullscreen();
            }
            if (target.mozRequestFullScreen) {
                target.mozRequestFullScreen();
            }
            if (target.msRequestFullscreen) {
                target.msRequestFullscreen();
            }
        }
        
        // 文档退出全屏
        function exitFullScreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
            if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    </script>
</body>

</html>
```
 
Api的使用都很简单，主要就是一个兼容性的问题，这个小demo，在Chrome，Firefox，Edge，IE 11 上测试过，都可以正常切换全屏，也可以正常监听事件。

要注意Firefox中方法的拼写，F为大写（囧 ， 报错了看了半天，原来是拼写错误），Chrome和IE的记得要加CSS伪类去设置样式。