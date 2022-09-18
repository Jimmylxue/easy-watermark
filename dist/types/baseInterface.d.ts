/**
 * 公共接口类型
 */
export declare type ConfigParams = {
    src: string;
    text: string;
    size: number;
    color: string;
    padding: number;
    output: string;
    position: 'left-top' | 'left-center' | 'left-bottom' | 'center-top' | 'center' | 'center-bottom' | 'right-top' | 'right-center' | 'right-bottom';
    rotate?: number;
    type: 'fill' | 'stroke';
};
export declare type TFullMarkerParams = Omit<ConfigParams, 'position'>;
export interface textBound {
    width: number;
    height: number;
}
export declare const enum Position {
    LEFT_TOP = 1,
    LEFT_CENTER = 2,
    LEFT_BOTTOM = 3,
    CENTER_TOP = 4,
    CENTER = 5,
    CENTER_BOTTOM = 6,
    RIGHT_TOP = 7,
    RIGHT_CENTER = 8,
    RIGHT_BOTTOM = 9
}
export interface MosaicConfig {
    src: string;
    output?: string;
    size?: number;
}
export interface BlurConfig {
    src: string;
    output?: string;
    radius?: number;
}
export interface TQrCodeConfig {
    src: string;
    source: string;
    codeSize: number;
    size: number;
    colorDark: string;
    colorLight: string;
    correctLevel: number;
    output: string;
}
