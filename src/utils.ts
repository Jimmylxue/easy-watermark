import { textBound } from './baseInterface';

// 获取文字的宽高
export const getTextBound = (
  ctx: CanvasRenderingContext2D,
  font: string
): textBound => {
  let baseMsg = ctx.measureText(font);
  return {
    width: baseMsg.width,
    height: baseMsg.actualBoundingBoxDescent,
  };
};
