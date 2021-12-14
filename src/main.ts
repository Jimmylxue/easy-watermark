interface config {
  src: string; // 图片地址
  text: string; // 水印文字
}
export default function imgWaterMarker(src: string, text: string) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.setAttribute("crossOrigin", "");
    img.src = src;
    console.log(img, "img");
    console.log(img);
    img.onload = () => {
      const width = img.width;
      const height = img.height;
      console.log("width:", width, "height", height);
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d"); // 画笔
      ctx.drawImage(img, 0, 0, width, height);
      // console.log(draw, img);
      // ctx.fillStyle = "#2ecc71";
      // ctx.fill();
      // ctx.font = "40px bold italic Courier New";
      ctx.font = "40px bold italic arial";
      let lineGradient = ctx.createLinearGradient(100, 200, 200, 200);
      // lineGradient.addColorStop(0, "#f1c40f");
      lineGradient.addColorStop(1, "#CCC");
      console.log("123456");
      // ctx.font = "bold italic 160px arial";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 20;
      ctx.shadowOffsetY = 20;
      ctx.fillStyle = lineGradient;
      // ctx.rotate((350 * Math.PI) / 180);
      ctx.fillText("Jimmyxuexue", width - 250, height - 100);

      resolve(canvas.toDataURL("image/jpeg"));
    };

    // 后面两个数值表示从哪里开始画 如这里是从x = 100 y = 200开始画
    // return canvas.toDataURL("image/jpeg");
  });
}
