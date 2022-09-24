import { TFullMarkerParams } from '../types/baseInterface'
import { createImgInstance, createCanvas } from '../instance/index'
import { getTextBound } from '../utils/utils'
import BaseError, { warn, error } from '../exception/error'

export function fullMarker(config: TFullMarkerParams): Promise<string> {
	return new Promise(async (resolve, reject) => {
		checkConfig(config, reject)
		const {
			src,
			text,
			size = 20,
			color = '#c0c0c0',
			padding = 20,
			output = 'jpeg',
			rotate = 0,
			type = 'fill',
		} = config
		const { canvas, ctx } = createCanvas()
		const img = await createImgInstance({
			source: src,
			canvas,
			onError: () => error('注意-一个无法打开的图片资源'),
		})
		const { width, height } = img
		canvas.width = width
		canvas.height = height
		ctx.drawImage(img, 0, 0, width, height)
		ctx.font = `${size}px bold italic arial`
		let lineGradient = ctx.createLinearGradient(100, 200, 200, 200)
		lineGradient.addColorStop(1, color)
		ctx.fillStyle = lineGradient
		drawText(ctx, text, padding, width, height, type, rotate)
		resolve(canvas.toDataURL(`image/${output}`))
	})
}

// 检查参数是否完整
function checkConfig(
	config: TFullMarkerParams,
	reject: (reason?: any) => void
) {
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

	let startX = 0,
		startY = 0
	let count = 0
	const diff = (startX: number, startY: number) => {
		if (startX < width) {
			count++
			type === 'fill'
				? ctx.fillText(
						text || 'watermark',
						positionWidth + startX,
						positionHeight + startY
				  )
				: ctx.strokeText(
						text || 'watermark',
						positionWidth + startX,
						positionHeight + startY
				  )
			startX += textMsg.width + padding
			diff(startX, startY)
		} else if (startY < height) {
			startY += textMsg.height * 2 + padding
			startX = 0
			diff(startX, startY)
		} else {
			console.log('diff结束', count)
		}
	}
	diff(startX, startY)
}
