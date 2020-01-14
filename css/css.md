//子容器中设定inline-block,font-size:0;可以清除空白；

//inline-block垂直居中方法
父容器设置::after{
    content:"";
    width:0;
    height:100%;
    display:inline-block;
    vertical-align:middle;
}

子容器{
    display:inline-block;
    vertical-align:middle;
}

//黏性布局
nav {
  position:sticky;
    top: 8px;
}

两栏布局
//float + margin
三栏
//左右使用float，中间margin
//左右position，中间margin ，父容器有外边距时出现偏差
//flex 布局
.wrapper{
  display:flex;
}
.left{
  width:80px;
  height:50px;
  background-color:red;
}

.middle{
  width:100%;
  height:50px;
  background-color:yellow;
}

.right{
  width:80px;
  height:50px;
  background-color:red;
}

//flex方向设置列时，失效解决方案：width：100%；