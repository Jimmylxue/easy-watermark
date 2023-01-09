import { TFilterConfig } from '../types/baseInterface';
export declare function filter({ src, type, output, }: TFilterConfig): Promise<string>;
export declare function grayscale(imageData: ImageData, ctx: CanvasRenderingContext2D): void;
