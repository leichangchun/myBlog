# 使用图片地图减少HTTP请求数量

现在很多网站都是图片形式的导航，点击图片跳转到对应的链接。如果导航项目很多的话，图片的数量就会很多，每需要加载一张图片就会多一个HTTP请求。优化的方式之一就是使用图片地图

图片地图要用到map和area标签
+ map标签用于客户端的图片映射；
+ area标签指定映射区域。兼容性良好，可放心使用

```html
  <aside class="container">
    <img src="src/img_map.png" alt="导航图片" usemap="#nav_test">
    <map name="nav_test">
      <area shape="rect" coords="0 0 300 110" href="https://www.so.com/" target="_blank" alt="360搜索">
      <area shape="rect" coords="0 110 300 212" href="https://www.baidu.com/" target="_blank" alt="百度搜索">
    </map>
  </aside>
```
img的`usemap`可指定所使用的映射，对应`map`的`name`属性

area的`shape`属性规定形状（default|rect|circle|poly）；coords属性规定区域，不同的shape时，coords的格式也不一样（栗子中shape为矩形，coords就指定了矩形左上角和右下角的坐标，单位为px . (ps:在html4的时候还可以是百分比，但是html5貌似只能是数值）；href和target、alt就和a标签的一样)

<div class="img-center">
    <img src="./img/demo-img-map.png">
</div>

一张图片就对应了两个不同的链接，而只有一个http请求，减少了一个请求了。如果导航很多的情况下，减少的请求数量就会很可观。