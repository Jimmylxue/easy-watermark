import { TFilterConfig, TFilterType } from '../types/baseInterface'
import { createImgInstance } from '../instance/imgInstance'
import { createCanvas } from '../instance/canvasInstance'
import { error } from '../exception/error'

export function filter({
	src,
	type,
	output = 'jpeg',
}: TFilterConfig): Promise<string> {
	return new Promise(async (resolve, reject) => {
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
		const imgData = ctx.getImageData(0, 0, width, height)
		switch (type) {
			case TFilterType.黑白滤镜:
				grayscale(imgData, ctx)
		}
		resolve(canvas.toDataURL(`image/${output}`))
	})
}

export function grayscale(imageData: ImageData, ctx: CanvasRenderingContext2D) {
	const data = imageData.data
	for (var i = 0; i < data.length; i += 4) {
		var avg = (data[i] + data[i + 1] + data[i + 2]) / 3
		data[i] = avg // red
		data[i + 1] = avg // green
		data[i + 2] = avg // blue
	}
	ctx.putImageData(imageData, 0, 0)
}
