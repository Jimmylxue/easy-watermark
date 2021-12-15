/**
 * 公共接口类型
 */

export interface configParams {
  src: string; // 图片地址
  text: string; // 水印文字
  size: number; // 水印文字字号
  color?: string; // 水印颜色
}

export interface textBound {
  width: number;
  height: number;
}
