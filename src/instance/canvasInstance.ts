import { isMiniProgram } from '../utils/utils'

export function createCanvas(): {
	canvas: HTMLCanvasElement
	ctx: CanvasRenderingContext2D
} {
	let canvas, ctx
	if (isMiniProgram()) {
		canvas = wx.createOffscreenCanvas({ type: '2d' })
		ctx = canvas.getContext('2d')
	} else {
		canvas = document.createElement('canvas')
		ctx = canvas.getContext('2d')!
	}
	return { canvas, ctx }
}
