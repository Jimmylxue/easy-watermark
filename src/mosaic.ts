import { MosaicConfig } from './type/baseInterface'
import { createImgInstance } from './core/imgInstance'
import { createCanvas } from './core/canvasInstance'
import { error } from './core/error'

export function mosaic({
	src,
	output = 'jpeg',
	size = 8,
}: MosaicConfig): Promise<string> {
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
		const data = imgData.data
		ctx.fillRect(0, 0, width, height)
		/*行列遍历*/
		for (let y = 0; y < height; y += size) {
			for (let x = 0; x < width; x += size) {
				const i = (y * width + x) * 4
				const [r, g, b] = [data[i], data[i + 1], data[i + 2]]
				ctx.fillStyle = `rgb(${r},${g},${b})`
				ctx.beginPath()
				ctx.arc(x, y, size / 2, 0, Math.PI * 2)
				ctx.fill()
			}
		}
		resolve(canvas.toDataURL(`image/${output}||jpeg`))
	})
}
