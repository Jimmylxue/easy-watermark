import { textBound, Position, TPositionConst } from '../types/baseInterface'

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
export const getPositionType = (position: TPositionConst): number => {
	let flag: any
	switch (position) {
		case 'LEFT_TOP':
			flag = Position.LEFT_TOP
			break
		case 'LEFT_CENTER':
			flag = Position.LEFT_CENTER
			break
		case 'LEFT_BOTTOM':
			flag = Position.LEFT_BOTTOM
			break
		case 'CENTER_TOP':
			flag = Position.CENTER_TOP
			break
		case 'CENTER':
			flag = Position.CENTER
			break
		case 'CENTER_BOTTOM':
			flag = Position.CENTER_BOTTOM
			break
		case 'RIGHT_TOP':
			flag = Position.RIGHT_TOP
			break
		case 'RIGHT_CENTER':
			flag = Position.RIGHT_CENTER
			break
		case 'RIGHT_BOTTOM':
			flag = Position.RIGHT_BOTTOM
			break
	}
	return flag
}

export function gaussBlur(imgData: any, radius: number) {
	radius *= 3 //不知为什么,我的模糊半径是 css中 filter:bulr 值的三倍时效果才一致。

	//Copy图片内容
	let pixes = new Uint8ClampedArray(imgData.data)
	const width = imgData.width
	const height = imgData.height
	let gaussMatrix = [],
		gaussSum = 0,
		x,
		y,
		r,
		g,
		b,
		a,
		i,
		j,
		k,
		w

	radius = Math.floor(radius)
	const sigma = radius / 3

	a = 1 / (Math.sqrt(2 * Math.PI) * sigma)
	b = -1 / (2 * sigma * sigma)

	//生成高斯矩阵
	for (i = -radius; i <= radius; i++) {
		gaussMatrix.push(a * Math.exp(b * i * i))
	}

	//x 方向一维高斯运算
	for (y = 0; y < height; y++) {
		for (x = 0; x < width; x++) {
			r = g = b = a = gaussSum = 0
			for (j = -radius; j <= radius; j++) {
				k = x + j
				if (k >= 0 && k < width) {
					i = (y * width + k) * 4
					w = gaussMatrix[j + radius]

					r += pixes[i] * w
					g += pixes[i + 1] * w
					b += pixes[i + 2] * w
					a += pixes[i + 3] * w

					gaussSum += w
				}
			}

			i = (y * width + x) * 4
			//计算加权均值
			imgData.data.set(
				[r, g, b, a].map(v => v / gaussSum),
				i
			)
		}
	}

	pixes.set(imgData.data)

	//y 方向一维高斯运算
	for (x = 0; x < width; x++) {
		for (y = 0; y < height; y++) {
			r = g = b = a = gaussSum = 0
			for (j = -radius; j <= radius; j++) {
				k = y + j

				if (k >= 0 && k < height) {
					i = (k * width + x) * 4
					w = gaussMatrix[j + radius]

					r += pixes[i] * w
					g += pixes[i + 1] * w
					b += pixes[i + 2] * w
					a += pixes[i + 3] * w

					gaussSum += w
				}
			}
			i = (y * width + x) * 4
			imgData.data.set(
				[r, g, b, a].map(v => v / gaussSum),
				i
			)
		}
	}

	return imgData
}

export function isMiniProgram() {
	// const ua = navigator.userAgent.toLowerCase()
	// const isWeixin = ua.indexOf('micromessenger') !== -1
	// @ts-ignore
	if (window.wx) {
		return true
	} else {
		return false
	}
}
