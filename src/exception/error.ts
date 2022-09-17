/**
 * 通用错误处理
 */

enum ErrorType {
  ConfigError = 1, // 配置信息错误
  RenderError = 2, // 渲染错误
  SourceError = 3, // 资源错误  -- 如图片资源打不开
}

export const warn = (msg: string): void => {
  console.warn(msg);
};
export const error = (msg: string): void => {
  console.error(msg);
};
export default class BaseError extends Error {
  constructor(type: number, msg: string) {
    super();
    // this.message = value;
    switch (type) {
      case ErrorType.ConfigError:
        this.name = ErrorType[ErrorType.ConfigError];
        this.message = msg;
        break;
      case ErrorType.RenderError:
        this.name = ErrorType[ErrorType.RenderError];
        this.message = msg;
        break;
      case ErrorType.SourceError:
        this.name = ErrorType[ErrorType.SourceError];
        this.message = msg;
        break;
    }
  }
}
