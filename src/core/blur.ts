import { BlurConfig } from '../types/baseInterface'
import { createImgInstance } from '../instance/imgInstance'
import { createCanvas } from '../instance/canvasInstance'
import { error } from '../exception/error'
import { gaussBlur } from '../utils/utils'

export function blur({ src, output = 'jpeg', radius = 5 }: BlurConfig) {
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
		// const data = imgData.data
		const data = gaussBlur(imgData, radius)
		ctx.putImageData(data, 0, 0)
		resolve(canvas.toDataURL(`image/${output}`))
	})
}
