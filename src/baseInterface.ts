/**
 * 公共接口类型
 */

export interface configParams {
	src: string // 图片地址
	text: string // 水印文字
	size: number // 水印文字字号
	color: string // 水印颜色
	padding: number // 文字距离图片的边距
	output: string // 输出类型 目前支持 png jpeg
	position: string // 水印方位
	rotate?: number // 角度
	/**
	 * 水印方位
	 * left-top （左上）
	 * left-center （左中）
	 * left-botom （左下）
	 * center-top （中上）
	 * center （正中）
	 * center-bottom （中下）
	 * right-top （右上）
	 * right-center （右中）
	 * right-bottom （右下）
	 */
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
