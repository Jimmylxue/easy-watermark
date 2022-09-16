import { BlurConfig } from './type/baseInterface'
import { createImgInstance } from './core/imgInstance'
import { createCanvas } from './core/canvasInstance'
import { error } from './core/error'
import { gaussBlur } from './utils'

export function blur({ src, output = 'jpeg', radius = 8 }: BlurConfig) {
	return new Promise(async (resolve, reject) => {
		const img = await createImgInstance({
			source: src,
			onError: () => error('注意-一个无法打开的图片资源'),
		})
		const { canvas, ctx } = createCanvas()
		const { width, height } = img
		canvas.width = width
		canvas.height = height
		ctx.drawImage(img, 0, 0, width, height)
		const imgData = ctx.getImageData(0, 0, width, height)
		// const data = imgData.data
		const data = gaussBlur(imgData, radius)
		ctx.putImageData(data, 0, 0)
		resolve(canvas.toDataURL(`image/${output}||jpeg`))
	})
}
