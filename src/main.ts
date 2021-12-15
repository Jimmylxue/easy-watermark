import { configParams } from "./baseInterface";

export default function imgWaterMarker(config: configParams) {
  console.log(config);
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.setAttribute("crossOrigin", "");
    img.src = config.src;
    console.log("img", img);
    img.onload = () => {
      const width = img.width;
      const height = img.height;
      console.log("width:", width, "height", height);
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d"); // 画笔
      ctx.drawImage(img, 0, 0, width, height);
      ctx.font = "40px bold italic arial";
      let lineGradient = ctx.createLinearGradient(100, 200, 200, 200);
      lineGradient.addColorStop(1, config.color || "#ccc");
      console.log("123456");
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 20;
      ctx.shadowOffsetY = 20;
      ctx.fillStyle = lineGradient;
      // ctx.rotate((350 * Math.PI) / 180);
      ctx.fillText(config.text || "Jimmy定制", width - 190, height - 170);
      resolve(canvas.toDataURL("image/jpeg"));
    };

    // 后面两个数值表示从哪里开始画 如这里是从x = 100 y = 200开始画
    // return canvas.toDataURL("image/jpeg");
  });
}
