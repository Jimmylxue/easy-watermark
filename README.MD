## watermark.js

watermark 是一个基于 canvas 的简单的生成自定义水印的插件，轻量、灵活、配置简单是它的特点。

GitHub: [传送门](https://github.com/Jimmylxue/easy-watermark)

> issues 是第一生产动力！😄

## DEMO

![image-20220604104010832](https://vitepress-source.oss-cn-beijing.aliyuncs.com/typoraimage-20220604104010832.png)

![demo](http://jimmyxx.oss-cn-beijing.aliyuncs.com/demo.png)

![demo](http://jimmyxx.oss-cn-beijing.aliyuncs.com/demo2.png)

## 快速开始

#### 安装下载

```
npm i esay-watermark

cnpm i esay-watermark (推荐)
```

#### 基本使用

- 在 vue 中使用

  ```vue
  <template>
  	<img alt="Vue logo" :src="imgurl" />
  </template>

  <script setup>
  import { ref } from 'vue'
  import waterMarker from 'esay-watermark'

  const imgurl = ref('')
  waterMarker({
  	src: 'https://img1.baidu.com/it/u=128307009,2094083535&fm=26&fmt=auto',
  	text: 'jimmy',
  	color: '#bdc3c7',
  	size: 120,
  	position: 'center',
  	padding: 10,
  }).then(res => (imgurl.value = res))
  </script>
  ```

- 在 html 中使用

  ```html
  <body>
  	<script src="./watermark.min.js"></script>
  	<img id="img2" alt="" />
  	<script>
  		let img2 = document.getElementById('img2')
  		let config = {
  			src: 'http://jimmyxx.oss-cn-beijing.aliyuncs.com/lot.png',
  			text: 'jimmy',
  			color: '#bdc3c7',
  			size: 40,
  			position: 'center',
  			padding: 10,
  		}
  		waterMarker(config).then(res => {
  			img2.src = res
  		})
  	</script>
  </body>
  ```

## API

| 属性名   | 类型   | 是否必填   | 描述                          |
| -------- | ------ | ------ | --------------------------------------------- |
| src      | string | yes | 图片地址（必填）                              |
| text     | string | yes | 水印文字                                      |
| color    | string | yes | 水印颜色                                      |
| size     | number | yes | 水印文字大小，默认 20                         |
| padding  | number | yes | 水印距离图片边缘的距离，默认 30               |
| output   | string | yes | 输出图片类型 支持 `jpeg`和`png` ，默认 `jpeg` |
| position | Position | yes | 水印所处位置，默认 right-bottom（右下）       |
| type | 'fill'\|'stroke' | no | 文字的“填充模式”和“描边模式”（默认填充模式） |
| rotate | number | no | 旋转角度       |

其中Position属性具有以下属性值：

| Position 属性值 | 效果 |
| --------------- | ---- |
| left-top        | 左上 |
| left-center     | 左中 |
| left-bottom     | 坐下 |
| center-top      | 中上 |
| center          | 正中 |
| center-bottom   | 中下 |
| right-top       | 右上 |
| right-center    | 右中 |
| right-bottom    | 右下 |

## 更新日志

- [x] 新增 rotate 旋转角度

  > 2022.06.02 更新
  
- [x] 新增 type 文字书写方式 “描边”|“填充”

  > 2022.07.01 更新

## 敬请期待

日后这个库会不定期更新....

同时也期待有小伙伴一起维护整个小玩具~
