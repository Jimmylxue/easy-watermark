import { TQrCodeConfig } from 'types/baseInterface'
import { createImgInstance, createCanvas } from '@instance/index'
import { error } from '@exception/index'
// @ts-ignore
import { api } from '../api/qrcode.js'
export function QRcode({
	src,
	output,
	source,
	codeSize = 400,
	size = 100,
	colorDark = '#000',
	colorLight = '#fff',
	correctLevel = 2,
}: TQrCodeConfig): Promise<string> {
	return new Promise(async (resolve, reject) => {
		const { canvas, ctx } = createCanvas()
		canvas.width = codeSize
		canvas.height = codeSize
		api.draw(
			source,
			ctx,
			0,
			0,
			codeSize, // width
			codeSize, // height
			colorLight,
			colorDark,
			'',
			correctLevel
		)

		if (src) {
			const img = await createImgInstance({
				source: src,
				onError: () => error('注意-一个无法打开的图片资源'),
			})
			ctx.drawImage(
				img,
				codeSize / 2 - size / 2,
				codeSize / 2 - size / 2,
				size,
				size
			)
		}

		resolve(canvas.toDataURL(`image/${output}||jpeg`))
	})
}
