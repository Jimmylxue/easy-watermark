import { textBound, Position } from './type/baseInterface'

// 获取文字的宽高
export const getTextBound = (
	ctx: CanvasRenderingContext2D,
	font: string
): textBound => {
	let baseMsg = ctx.measureText(font)
	return {
		width: baseMsg.width,
		height: baseMsg.actualBoundingBoxDescent,
	}
}

// 获取方位
export const getPositionType = (position: string): number => {
	let flag: any
	switch (position) {
		case 'left-top':
			flag = Position.LEFT_TOP
			break
		case 'left-center':
			flag = Position.LEFT_CENTER
			break
		case 'left-bottom':
			flag = Position.LEFT_BOTTOM
			break
		case 'center-top':
			flag = Position.CENTER_TOP
			break
		case 'center':
			flag = Position.CENTER
			break
		case 'center-bottom':
			flag = Position.CENTER_BOTTOM
			break
		case 'right-top':
			flag = Position.RIGHT_TOP
			break
		case 'right-center':
			flag = Position.RIGHT_CENTER
			break
		case 'right-bottom':
			flag = Position.RIGHT_BOTTOM
			break
	}
	return flag
}
