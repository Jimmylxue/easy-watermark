/**
 * 公共接口类型
 */

type TOutputType = 'png' | 'jpeg'

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

export type TPositionConst = keyof typeof Position

export type ConfigParams = {
	src: string // 图片地址
	text: string // 水印文字
	size?: number // 水印文字字号
	color?: string // 水印颜色
	padding?: number // 文字距离图片的边距
	output?: TOutputType // 输出类型 目前支持 png jpeg
	position?: TPositionConst // 水印方位
	rotate?: number // 角度
	type?: 'fill' | 'stroke'
}

export type TFullMarkerParams = Omit<ConfigParams, 'position'>

export interface textBound {
	width: number
	height: number
}

export interface MosaicConfig {
	src: string
	output?: TOutputType
	size?: number
}

export interface BlurConfig {
	src: string
	output?: TOutputType
	radius?: number // 模糊半径
}

export interface TQrCodeConfig {
	source: string // 二维码资源
	src?: string // 中心图片链接
	codeSize?: number // 二维码宽
	size?: number // 中心图片宽
	colorDark?: string // 背景色
	colorLight?: string // 前景色
	correctLevel?: number // 错误级别
	output?: TOutputType // 输出资源
}

export interface TRotateConfig {
	src: string
	rotate: number // 角度
	output?: TOutputType // 输出类型 目前支持 png jpeg
	symmetric?: 'row' | 'column'
}
