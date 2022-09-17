import { TQrCodeConfig } from 'types/baseInterface';
export declare function QRcode({ src, output, source, codeSize, size, colorDark, colorLight, correctLevel, }: TQrCodeConfig): Promise<string>;
