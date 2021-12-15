import { configParams } from './baseInterface';
import { getTextBound } from './utils';

export default function imgWaterMarker(config: configParams) {
  console.log(config);
  return new Promise((resolve, reject) => {
    checkConfig(config, reject);
    let img = new Image();
    img.setAttribute('crossOrigin', '');
    img.src = config.src;
    console.log('img', img);
    img.onload = () => {
      const width = img.width;
      const height = img.height;
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d'); // 画笔
      ctx.drawImage(img, 0, 0, width, height);
      ctx.font = `${config.size || 20}px bold italic arial`;
      let lineGradient = ctx.createLinearGradient(100, 200, 200, 200);
      lineGradient.addColorStop(1, config.color || '#ccc');
      console.log('123456');
      ctx.fillStyle = lineGradient;
      // ctx.rotate((350 * Math.PI) / 180);
      let textMsg = getTextBound(ctx, config.text || 'Jimmy定制');
      ctx.fillText(
        config.text || 'Jimmy定制',
        width - textMsg.width - 50,
        height - textMsg.height - 50
      );
      resolve(canvas.toDataURL('image/jpeg'));
    };

    // 后面两个数值表示从哪里开始画 如这里是从x = 100 y = 200开始画
    // return canvas.toDataURL("image/jpeg");
  });
}

// 检查参数是否完整
function checkConfig(config, reject) {
  if (!config.src) {
    console.warn('请输入图片地址');
    reject('config_error');
  }
}
