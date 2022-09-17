import { ImgInstanceProps } from '../types/imgInstanceType'

export function createImgInstance({
	source,
	onError,
}: ImgInstanceProps): Promise<HTMLImageElement> {
	return new Promise((resolve, reject) => {
		const img = new Image()
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
