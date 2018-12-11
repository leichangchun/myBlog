# 纯CSS3实现轮播图

　　纯css3实现的轮播图效果，和JavaScript控制的相比，简单高效了很多，但是功能也更加单一，只有轮播不能手动切换。用什么实现的呢？页面布局 + animation动画

## HTML部分

``` html
<div class="container">
    <div class="title-container">
      <h1>纯CSS3轮播图</h1>
    </div>
    <div class="slide-box">
      <ul>
        <li class="slide-item slide1">
          <a href="#">
          <img src="images/img-1.jpg" alt="">
          <div class="tooltip">
            生活
          </div>
          </a>
        </li>
        <li class="slide-item slide2">
          <a href="#">
          <img src="images/img-2.jpg" alt="">
          <div class="tooltip">
            热情
          </div>
          </a>
        </li>
        <li class="slide-item slide3">
          <a href="#">
          <img src="images/img-3.jpg" alt="">
          <div class="tooltip">
            乐观
          </div>
          </a>
        </li>
        <li class="slide-item slide4">
          <a href="#">
          <img src="images/img-4.jpg" alt="">
          <div class="tooltip">
            美好
          </div>
          </a>
        </li>
        <li class="slide-item slide5">
          <a href="#">
          <img src="images/img-5.jpg" alt="">
          <div class="tooltip">
            意义
          </div>
          </a>
        </li>
      </ul>
      <div class="progress">

      </div>
    </div>
  </div>
</body>
```

html部分也还是那些东西，容器+多张轮播图子项

## 布局部分

``` css
/*reset*/
html,body,div,ul,li,img,h1,a{
  margin: 0;
  padding: 0;
}

ul{
  list-style: none;
}


/*slide style*/

html,body{
  width: 100%;
  height: 100%;
}

body{
  background: url('./../images/bg.png') repeat;
}

.container{
  width: 1000px;
  height: 100%;
  margin: 0 auto;
}

.container .title-container{
  width: 800px;
  height: 100px;
  line-height: 100px;
  margin: 20px auto;
  text-align: center;
}

.slide-box{
  position: relative;
  width: 800px;
  height: 533px;
  margin: 0 auto;
  border:5px solid #eaeaea;
    -webkit-box-shadow:1px 1px 5px rgba(0,0,0,0.7);
            box-shadow:1px 1px 5px rgba(0,0,0,0.7);
}

.slide-box ul{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slide-box ul li{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.slide-box ul li .tooltip{
  position: absolute;
  left: 50px;
  top: -40px;
  height: 40px;
  width: 100px;
  text-align: center;
  background-color: rgba(0,0,0,0.7);
  color: #fff;
  line-height: 40px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.slide-box ul li:hover .tooltip{
  top: 2px;
  z-index: 2;
}
```

* 容器溢出隐藏

* 轮播子项绝对定位

## 轮播动画部分
　这部分才是本文的重点。

　用纯css3实现轮播，肯定要无限循环使用animation动画，而且需要单独控制每个子项的动画效果，而其整体效果是完美的轮播效果。

　子项使用的是绝对定位，需实现的轮播效果是从左至右，所以可以控制left的值达到展示和隐藏（定位到容器之外即隐藏）及滑动效果。先实现第一个子项

``` css
.slide-box ul li.slide1{
  -webkit-animation: slide1 25s linear infinite; 
          animation: slide1 25s linear infinite;
}

@-webkit-keyframes slide1 {
  0%  {
    left: 0;
    opacity: 1;
  }
  16%  {
    left: 0;
    opacity: 1;
  }
  20%  {
    left: 800px;
    opacity: 0;
    z-index: 0;
  }
  21% {
    left: -800px;
    opacity: 0;
    z-index: 0;
  }
  95% {
    left: -800px;
    opacity: 0;
    z-index: 1;
  }
  96% {
    left: -800px;
    opacity: 0;
    z-index: 1;
  }
  100% {
    left: 0;
    opacity: 1;
    z-index: 1;
  }
}
```

设计轮播周期为25s，所以每个子项有5s的展示和移动时间。子项一的动画效果：0-4s展示，4-5s向右方滑动至容器外隐藏，之后迅速滑倒容器左边外隐藏（此时修改了z-index，所以不会影响到正在展示的子项），剩下的时间就是在左边等待下次滑动及展示了。第二个子项的动画效果需与第一个子项契合，特别在时间上，这样整体的效果才会好。如下：

``` css
.slide-box ul li.slide2{
  -webkit-animation: slide2 25s linear infinite;
          animation: slide2 25s linear infinite;
}

@-webkit-keyframes slide2 {
  0%  {
    left: -800px;
    opacity: 0;
    z-index: 0;
  }
  16%  {
    left: -800px;
    opacity: 0;
    z-index: 1;
  }
  20%  {
    left: 0;
    opacity: 1;
    z-index: 1;
  }
  36% {
    left: 0;
    opacity: 1;
    z-index: 1;
  }
  40% {
    left: 800px;
    opacity: 0;
    z-index: 0;
  }
  41% {
    left: -800px;
    opacity: 0;
    z-index: 0;
  }
  100% {
    left: -800px;
    opacity: 0;
    z-index: 0;
  }
}
```

　　第二个子项 1-4s在容器左边外等待，4-5s向右滑出展示（此时第一个子项向左滑出隐藏），5-9s展示 9-10s向左滑出隐藏。

　　同理剩下的子项，依次顺延调整好动画，整体的效果就会非常流畅。

## 进度条动画

因展示时间较长4s，所以可以加入进度条，交互体验会更加好。HTML中的div.progress即是进度条的结构。样式如下：

```css
.slide-box .progress{
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  width: 0;
  background-color: rgba(0,0,0,0.7);
  -webkit-animation: progress 5s linear infinite;
          animation: progress 5s linear infinite;
  z-index: 2;
}

@-webkit-keyframes progress {
  0%{
    width: 0;
  }
  80%{
    width: 100%;
  }
  81%{
    width: 0;
  }
  100%{
    width: 0;
  }
}
```

==通过控制宽度来标识进度。==

## hover 暂停动画

若需要鼠标悬停时暂停动画，使用 animation-play-state: paused 控制即可

```css
.slide-box:hover ul li,
.slide-box:hover .progress
{
  -webkit-animation-play-state: paused;
          animation-play-state: paused;
}
```