//a标签传参
     function t(){  
            var name="prevaction"; //可以是一个可变的值  
            document.getElementById("n").href="a.action?name="+name;//n为定位a标签的位置
    }


    //颜色突变
    background-image: linear-gradient(to right, red 0%,red 50%,blue 50%, blue 100%);
    //陡峭渐变
    background-image: linear-gradient(to right, red 40%,blue 60%);


document.documentElement.style.setProperty('--theme_color', 'blue');

减号、加号运算符首尾必须要有空格
width: calc(100% / 3 * 2 - 5px + 10px)

文字渐变
.text-gradient {
  background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgb(63, 52, 219)), to(rgb(233, 86, 86)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent
}

 /* 强制换行 */
  word-break: break-all;

粘性布局自动顶替，背景色为白

移动端上滑动丝滑要加-webkit-overflow-scrolling: touch

<html manifest="demo.appcache">
CACHE MANIFEST
# 2012-02-21 v1.0.0
/theme.css
/logo.gif
/main.js

NETWORK:
login.asp

FALLBACK:
/html5/ /404.html