/**
 * 公共接口类型
 */
declare type TOutputType = 'png' | 'jpeg';
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
export declare type TPositionConst = keyof typeof Position;
export declare type ConfigParams = {
    src: string;
    text: string;
    size?: number;
    color?: string;
    padding?: number;
    output?: TOutputType;
    position?: TPositionConst;
    rotate?: number;
    type?: 'fill' | 'stroke';
};
export declare type TFullMarkerParams = Omit<ConfigParams, 'position'>;
export interface textBound {
    width: number;
    height: number;
}
export interface MosaicConfig {
    src: string;
    output?: TOutputType;
    size?: number;
}
export interface BlurConfig {
    src: string;
    output?: TOutputType;
    radius?: number;
}
export interface TQrCodeConfig {
    source: string;
    src?: string;
    codeSize?: number;
    size?: number;
    colorDark?: string;
    colorLight?: string;
    correctLevel?: number;
    output?: TOutputType;
}
export interface TRotateConfig {
    src: string;
    rotate: number;
    output?: TOutputType;
    symmetric?: 'row' | 'column';
}
export declare enum TFilterType {
    '黑白滤镜' = 0
}
export interface TFilterConfig {
    src: string;
    type: TFilterType;
    output?: TOutputType;
}
export {};
