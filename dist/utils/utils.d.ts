import { textBound, TPositionConst } from '../types/baseInterface';
export declare const getTextBound: (ctx: CanvasRenderingContext2D, font: string) => textBound;
export declare const getPositionType: (position: TPositionConst) => number;
export declare function gaussBlur(imgData: any, radius: number): any;
export declare function isMiniProgram(): boolean;
