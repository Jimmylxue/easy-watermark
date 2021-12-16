import { configParams, Position } from "./baseInterface";
import { getTextBound, getPositionType } from "./utils";
import BaseError, { warn, error } from "./error";

export default function imgWaterMarker(config: configParams) {
  return new Promise((resolve, reject) => {
    checkConfig(config, reject);
    let img = new Image();
    img.setAttribute("crossOrigin", "");
    img.src = config.src;
    console.log("img", img);
    img.onload = () => {
      const width = img.width;
      const height = img.height;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d"); // 画笔
      ctx.drawImage(img, 0, 0, width, height);
      ctx.font = `${config.size || 20}px bold italic arial`;
      let lineGradient = ctx.createLinearGradient(100, 200, 200, 200);
      lineGradient.addColorStop(1, config.color || "#ccc");
      ctx.fillStyle = lineGradient;
      drawText(
        ctx,
        config.text,
        config.position || "right-bottom",
        config.padding,
        width,
        height
      );
      resolve(canvas.toDataURL(`image/${config.output}||jpeg`));
    };
    img.onerror = () => {
      error("注意-一个无法打开的图片资源");
      throw new BaseError(3, "一个无法打开的图片资源");
    };
  });
}

// 检查参数是否完整
function checkConfig(config: configParams, reject) {
  if (!config.src) {
    error("请输入图片地址");
    reject("请输入图片地址");
    throw new BaseError(1, "configError");
  }
  if (!config.text) {
    warn("请配置水印文字");
  }
  if (!["", "png", "jpeg"].includes(config.output || "")) {
    error(`不支持${config.output}类型`);
    reject(`不支持${config.output}类型`);
    throw new BaseError(1, "configError");
  }
}

function drawText(
  ctx: CanvasRenderingContext2D,
  text: string,
  position: string,
  padding: number = 30,
  width: number,
  height: number
): void {
  let textMsg = getTextBound(ctx, text || "Jimmy定制");
  if (width < textMsg.width + padding || height < textMsg.height + padding) {
    error(`图片太小或水印文字太大`);
    throw new BaseError(2, "图片太小或水印文字太大");
  }
  let positionWidth = 0;
  let positionHeight = 0;
  switch (getPositionType(position)) {
    case Position["left-top"]:
      positionWidth = padding;
      positionHeight = padding;
      break;
    case Position["left-center"]:
      positionWidth = padding;
      positionHeight = height / 2 - textMsg.height / 2;
      break;
    case Position["left-bottom"]:
      positionWidth = padding;
      positionHeight = height - textMsg.height - padding;
      break;
    case Position["center-top"]:
      positionWidth = width / 2 - textMsg.width / 2;
      positionHeight = padding;
      break;
    case Position["center"]:
      positionWidth = width / 2 - textMsg.width / 2;
      positionHeight = height / 2 - textMsg.height / 2;
      break;
    case Position["center-bottom"]:
      positionWidth = width / 2 - textMsg.width / 2;
      positionHeight = height - textMsg.height - padding;
      break;
    case Position["right-top"]:
      positionWidth = width - textMsg.width - padding;
      positionHeight = padding;
      break;
    case Position["right-center"]:
      positionWidth = width - textMsg.width - padding;
      positionHeight = height / 2 - textMsg.height / 2;
      break;
    case Position["right-bottom"]:
      positionWidth = width - textMsg.width - padding;
      positionHeight = height - textMsg.height - padding;
      break;
  }
  ctx.fillText(text || "Jimmy定制", positionWidth, positionHeight);
  // 后面两个数值表示从哪里开始画 如这里是从x = 100 y = 200开始画
}
