## watermark.js

watermark 是一个基于 canvas 的简单的生成自定义水印的插件，轻量、灵活、配置简单是它的特点。

GitHub: [传送门](https://github.com/Jimmylxue/easy-watermark)

> issues 是第一生产力！😄

知识星球：[传送门](http://www.jimmyxuexue.top)

> 大兄弟们聚过来，这件事很重要🎉🎉🎉

## 效果

**marker 水印效果**

![image-20220604104010832](https://vitepress-source.oss-cn-beijing.aliyuncs.com/typoraimage-20220604104010832.png)

![demo](http://jimmyxx.oss-cn-beijing.aliyuncs.com/demo.png)

![demo](http://jimmyxx.oss-cn-beijing.aliyuncs.com/demo2.png)

**mosaic 马赛克效果**

![image-20220701233625989](https://vitepress-source.oss-cn-beijing.aliyuncs.com/typoraimage-20220701233625989.png)

**blur 高斯模糊**

![image-20220917173326254](https://vitepress-source.oss-cn-beijing.aliyuncs.com/typoraimage-20220917173326254.png)

## 快速开始

#### 安装下载

```
npm i esay-watermark

yarn add esay-watermark (推荐)
```

#### 基本使用

- 在框架中使用

  > Vue的demo，react和其他框架同理

  ```vue
  <template>
  	<img alt="Vue logo" :src="imgurl" />
    <img alt="Vue logo" :src="imgur2" />
    <img alt="Vue logo" :src="imgur3" />
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { marker, mosaic, blur } from 'esay-watermark'
  
  const imgUrl = ref('')
  const imgUrl2 = ref('')
  const imgUrl3 = ref('')
  
  // 水印效果
  marker({
  	src: 'https://img1.baidu.com/it/u=128307009,2094083535&fm=26&fmt=auto',
  	text: 'jimmy',
  	color: '#bdc3c7',
  	size: 120,
  	position: 'center',
  	padding: 10,
  }).then(res => (imgurl.value = res))
  
  // 马赛克效果
  mosaic({
  	src: 'https://avatars.githubusercontent.com/u/65758455?v=4',
  	size: 5,
  }).then(source => {
  	imgur2.src = source
  })
    
  // 高斯模糊效果
  blur({
  	src: 'https://avatars.githubusercontent.com/u/65758455?v=4',
  	radius: 5,
  }).then(source => {
  	imgur2.src = source
  })
  </script>
  ```

- 在 html 中使用

  ```html
  <body>
  	<script src="./watermark.min.js"></script>
  	<img id="img" alt="水印效果" />
		<img id="img2" alt="马赛克效果" />
    <img id="img3" alt="高斯模糊效果" />
		<script>
			const { marker, mosaic, blur } = waterMarker // watermark 默认导出对象
  		const img = document.getElementById('img')
			const img2 = document.getElementById('img2')
      const img3 = document.getElementById('img3')
      
			// 制作水印
			const config = {
				src: 'http://jimmyxx.oss-cn-beijing.aliyuncs.com/lot.png',
				text: 'easy-watermark',
				color: '#bdc3c7',
				size: 40,
				position: 'center',
  			padding: 10,
  			rotate: -15,
  			type: 'stroke',
  		}
  		marker(config).then(res => {
				img2.src = res
			})
	
			// 制作马赛克效果
			mosaic({
				src: 'https://avatars.githubusercontent.com/u/65758455?v=4',
				size: 5,
  		}).then(source => {
  			img.src = source
  		})
      
      // 高斯模糊效果
      blur({
        src: 'https://avatars.githubusercontent.com/u/65758455?v=4',
        radius: 5,
      }).then(source => {
        imgur2.src = source
      })
  	</script>
  </body>
  ```

## API

**marker API**

| 属性名   | 类型   | 是否必填   | 描述                          |
| -------- | ------ | ------ | --------------------------------------------- |
| src      | string | yes | 图片地址（必填）                              |
| text     | string | yes | 水印文字                                      |
| color    | string | yes | 水印颜色                                      |
| size     | number | yes | 水印文字大小，默认 20                         |
| padding  | number | yes | 水印距离图片边缘的距离，默认 30               |
| output   | 'jpeg' \| 'png' | yes | 输出图片类型 支持 `jpeg`和`png` ，默认 `jpeg` |
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

**mosaic API**

| 属性名   | 类型   | 是否必填   | 描述                          |
| -------- | ------ | ------ | --------------------------------------------- |
| src      | string | yes | 图片地址（必填）                              |
| size | number \| string | no | 模糊力度，越大越模糊（默认10） |
| output | 'jpeg' \| 'png' | no | 导出图片类型（默认jpeg）                |

**blur API**

| 属性名   | 类型   | 是否必填   | 描述                          |
| -------- | ------ | ------ | --------------------------------------------- |
| src      | string | yes | 图片地址（必填）                              |
| blur | number \| string | no | 模糊半径，越大越模糊（默认5） |
| output | 'jpeg' \| 'png' | no | 导出图片类型（默认jpeg）                |

## 更新日志

- [x] 新增 rotate 旋转角度

  > 2022.06.02 更新
  
- [x] 新增 type 文字书写方式 “描边”|“填充”

  > 2022.07.01 更新
  
- [x] 新增 `mosaic ` 图片转马赛克

  > 2022.07.02 更新
  
- [x] 新增 `blur` 高斯模糊

  > 2022.09.17 更新

## 敬请期待

日后这个库会不定期更新😁....

期待小伙伴们的star和PR🤞🤞🤞
