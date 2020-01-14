# CSS布局整理


## 定高不定宽


### 轮播组件
##### img宽高100%，父容器设定合理height；


### 左边右边各两个样式
##### 容器弹性布局定主轴侧轴，内边距0 10px；


### 平分4个router-link
##### flex-grow：1


### 左右两张图，平均分布
##### ul容器flex，wrap，justify；li宽度50%；
##### ul同上 padding：0 10，li：49% padding-bottom：10


### 图片文字同行
##### 图片display：inline-block，定宽高，高和行高一样；


### 取消按钮
##### 父容器弹性，搜索条弹性的定高flex-grow为1


### 正方形图片定宽高，容器定高；·