import { ImgInstanceProps } from '../type/imgInstanceType'

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
		img.onerror = onError
	})
}
