import { ConfigParams, Position, TPositionConst } from '../types/baseInterface'
import { createImgInstance, createCanvas } from '../instance/index'
import { getTextBound, getPositionType } from '../utils/utils'
import BaseError, { warn, error } from '../exception/error'

export function imgWaterMarker(config: ConfigParams): Promise<string> {
	return new Promise(async (resolve, reject) => {
		checkConfig(config, reject)
		const {
			src,
			text,
			size = 20,
			color = '#c0c0c0',
			padding = 30,
			output = 'jpeg',
			position = 'RIGHT_BOTTOM',
			rotate = 0,
			type = 'fill',
		} = config
		const img = await createImgInstance({
			source: src,
			onError: () => error('注意-一个无法打开的图片资源'),
		})
		const { canvas, ctx } = createCanvas()
		const { width, height } = img
		canvas.width = width
		canvas.height = height
		ctx.drawImage(img, 0, 0, width, height)
		ctx.font = `${size}px bold italic arial`
		let lineGradient = ctx.createLinearGradient(100, 200, 200, 200)
		lineGradient.addColorStop(1, color)
		ctx.fillStyle = lineGradient
		drawText(ctx, text, position, padding, width, height, type, rotate)
		resolve(canvas.toDataURL(`image/${output}`))
	})
}

// 检查参数是否完整
function checkConfig(config: ConfigParams, reject: (reason?: any) => void) {
	if (!config.src) {
		error('请输入图片地址')
		reject('请输入图片地址')
		throw new BaseError(1, 'configError')
	}
	if (!config.text) {
		warn('请配置水印文字')
	}
	if (!['', 'png', 'jpeg'].includes(config.output || '')) {
		error(`不支持${config.output}类型`)
		reject(`不支持${config.output}类型`)
		throw new BaseError(1, 'configError')
	}
}

function drawText(
	ctx: CanvasRenderingContext2D,
	text: string,
	position: TPositionConst,
	padding: number = 30,
	width: number,
	height: number,
	type: 'fill' | 'stroke',
	rotate?: number
): void {
	let textMsg = getTextBound(ctx, text || 'Jimmy定制')
	if (width < textMsg.width + padding || height < textMsg.height + padding) {
		error(`图片太小或水印文字太大`)
		throw new BaseError(2, '图片太小或水印文字太大')
	}
	let positionWidth = 0
	let positionHeight = 0
	switch (getPositionType(position)) {
		case Position.LEFT_TOP:
			positionWidth = padding
			positionHeight = padding
			break
		case Position.LEFT_CENTER:
			positionWidth = padding
			positionHeight = height / 2 - textMsg.height / 2
			break
		case Position.LEFT_BOTTOM:
			positionWidth = padding
			positionHeight = height - textMsg.height - padding
			break
		case Position.CENTER_TOP:
			positionWidth = width / 2 - textMsg.width / 2
			positionHeight = padding
			break
		case Position.CENTER:
			positionWidth = width / 2 - textMsg.width / 2
			positionHeight = height / 2 - textMsg.height / 2
			break
		case Position.CENTER_BOTTOM:
			positionWidth = width / 2 - textMsg.width / 2
			positionHeight = height - textMsg.height - padding
			break
		case Position.RIGHT_TOP:
			positionWidth = width - textMsg.width - padding
			positionHeight = padding
			break
		case Position.RIGHT_CENTER:
			positionWidth = width - textMsg.width - padding
			positionHeight = height / 2 - textMsg.height / 2
			break
		case Position.RIGHT_BOTTOM:
			positionWidth = width - textMsg.width - padding
			positionHeight = height - textMsg.height - padding
			break
	}
	if (rotate) {
		/**
		 * 旋转角度的逻辑：
		 * 	先设置旋转点，旋转角度之后写上字
		 * 	再将旋转点转回
		 */
		const rectCenterPoint = {
			x: positionWidth + textMsg.width / 2,
			y: positionHeight + textMsg.height / 2,
		}
		ctx.translate(rectCenterPoint.x, rectCenterPoint.y)
		ctx.rotate((rotate * Math.PI) / 180) // 处理旋转角度
		ctx.translate(-rectCenterPoint.x, -rectCenterPoint.y)
	}
	if (type === 'fill') {
		ctx.fillText(text || 'watermark', positionWidth, positionHeight)
	} else {
		ctx.strokeText(text || 'watermark', positionWidth, positionHeight)
	}

	// 后面两个数值表示从哪里开始画 如这里是从x = 100 y = 200开始画
}
