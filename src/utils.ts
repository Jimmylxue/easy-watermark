import { textBound, Position } from "./baseInterface";

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

// 获取方位
export const getPositionType = (position): number => {
  let flag = null;
  switch (position) {
    case "left-top":
      flag = Position["left-top"];
      break;
    case "left-center":
      flag = Position["left-center"];
      break;
    case "left-bottom":
      flag = Position["left-bottom"];
      break;
    case "center-top":
      flag = Position["center-top"];
      break;
    case "center":
      flag = Position["center"];
      break;
    case "center-bottom":
      flag = Position["center-bottom"];
      break;
    case "right-top":
      flag = Position["right-top"];
      break;
    case "right-center":
      flag = Position["right-center"];
      break;
    case "right-bottom":
      flag = Position["right-bottom"];
      break;
  }
  return flag;
};
