import { error } from '@exception/error'
import { createCanvas } from '@instance/canvasInstance'
import { createImgInstance } from '@instance/imgInstance'
import { TRotateConfig } from 'types/baseInterface'

export function rotate({
	src,
	rotate,
	output = 'png',
	symmetric,
}: TRotateConfig): Promise<string> {
	return new Promise(async (resolve, reject) => {
		const { canvas, ctx } = createCanvas()
		const img = await createImgInstance({
			source: src,
			canvas,
			onError: () => {
				error('注意-一个无法打开的图片资源')
				reject('注意-一个无法打开的图片资源')
			},
		})
		const { width, height } = img
		canvas.width = width
		canvas.height = height
		const rectCenterPoint = {
			x: width / 2,
			y: height / 2,
		}
		ctx.translate(rectCenterPoint.x, rectCenterPoint.y)

		ctx.rotate((rotate * Math.PI) / 180) // 处理旋转角度
		ctx.translate(-rectCenterPoint.x, -rectCenterPoint.y)
		ctx.drawImage(img, 0, 0, width, height)
		if (symmetric) {
			if (symmetric === 'row') {
				onReverseRow(canvas, ctx)
			} else if (symmetric === 'column') {
				onReverseColumn(canvas, ctx)
			} else {
				error('注意-错误的 symmetric 参数')
				reject('注意-错误的 symmetric 参数')
			}
		}
		resolve(canvas.toDataURL(`image/${output}`))
	})
}

function onReverseColumn(
	canvas: HTMLCanvasElement,
	ctx: CanvasRenderingContext2D
) {
	const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
	const data = imgData.data
	const w = canvas.width * 4
	for (let i = 0; i < data.length; i += 4) {
		const r = data[i]
		const g = data[i + 1]
		const b = data[i + 2]
		const a = data[i + 3]
		// 左右等比位置的像素交换
		if (i % w < w / 2) {
			const newI = i + (w - (i % w) * 2)

			data[i] = data[newI]
			data[i + 1] = data[newI + 1]
			data[i + 2] = data[newI + 2]
			data[i + 3] = data[newI + 3]

			data[newI] = r
			data[newI + 1] = g
			data[newI + 2] = b
			data[newI + 3] = a
		}
	}
	ctx.putImageData(imgData, 0, 0)
}

function onReverseRow(
	canvas: HTMLCanvasElement,
	ctx: CanvasRenderingContext2D
) {
	const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
	const data = imgData.data
	const h = canvas.height
	const w = canvas.width
	let middleAxle /*中轴*/ = Math.floor(h / 2),
		rowAisles = w * 4

	// 2.遍历总行数一半的每一行作为外循环(向下取整)
	for (var curRow = 0; curRow < middleAxle; curRow++) {
		//
		let aisleStart /*开始的通道位置*/ = curRow * rowAisles,
			mirrorStart /*中轴对称的开始位置*/ = (h - curRow - 1) * rowAisles

		// 3.遍历当前行的列作为内循环,把列的每个通道按照水平轴对称和镜像里的通道互换
		for (
			;
			aisleStart < rowAisles * (curRow + 1);
			aisleStart += 4, mirrorStart += 4
		) {
			var tr = data[aisleStart],
				tg = data[aisleStart + 1],
				tb = data[aisleStart + 2],
				ta = data[aisleStart + 3]

			data[aisleStart] = data[mirrorStart]
			data[aisleStart + 1] = data[mirrorStart + 1]
			data[aisleStart + 2] = data[mirrorStart + 2]
			data[aisleStart + 3] = data[mirrorStart + 3]

			data[mirrorStart] = tr
			data[mirrorStart + 1] = tg
			data[mirrorStart + 2] = tb
			data[mirrorStart + 3] = ta
		}
	}
	ctx.putImageData(imgData, 0, 0)
}
