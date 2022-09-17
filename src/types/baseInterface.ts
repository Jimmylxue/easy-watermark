/**
 * 公共接口类型
 */

export interface ConfigParams {
	src: string // 图片地址
	text: string // 水印文字
	size: number // 水印文字字号
	color: string // 水印颜色
	padding: number // 文字距离图片的边距
	output: string // 输出类型 目前支持 png jpeg
	position:
		| 'left-top'
		| 'left-center'
		| 'left-bottom'
		| 'center-top'
		| 'center'
		| 'center-bottom'
		| 'right-top'
		| 'right-center'
		| 'right-bottom' // 水印方位
	rotate?: number // 角度
	type: 'fill' | 'stroke'
}

export interface textBound {
	width: number
	height: number
}

export const enum Position {
	LEFT_TOP = 1,
	LEFT_CENTER,
	LEFT_BOTTOM,
	CENTER_TOP,
	CENTER,
	CENTER_BOTTOM,
	RIGHT_TOP,
	RIGHT_CENTER,
	RIGHT_BOTTOM,
}

export interface MosaicConfig {
	src: string
	output?: string
	size?: number
}

export interface BlurConfig {
	src: string
	output?: string
	radius?: number // 模糊半径
}

export interface TQrCodeConfig {
	src: string // 中心图片链接
	source: string // 二维码资源
	codeSize: number // 二维码宽
	size: number // 中心图片宽
	colorDark: string // 背景色
	colorLight: string // 前景色
	correctLevel: number // 错误级别
	output: string // 输出资源
}
