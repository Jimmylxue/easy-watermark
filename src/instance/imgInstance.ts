import { isMiniProgram } from '../utils/utils'
import { ImgInstanceProps } from '../types/imgInstanceType'

export function createImgInstance({
	source,
	onError,
	canvas,
}: ImgInstanceProps): Promise<HTMLImageElement> {
	return new Promise((resolve, reject) => {
		let img: any
		if (isMiniProgram()) {
			img = canvas.createImage()
		} else {
			img = new Image()
		}
		img.setAttribute('crossOrigin', '')
		img.src = source
		img.onload = () => {
			resolve(img)
		}
		img.onerror = () => {
			onError()
			reject('资源加载失败')
		}
	})
}
