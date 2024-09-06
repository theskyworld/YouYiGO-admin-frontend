import { LOGO_NAME } from "../utils/constants";

export default function Logo() {
  return (
    // 添加div用于设置h1文字的渐变样式
    <div className="inline-flex bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text cursor-pointer">
      <h1 className="text-3xl font-bold">{LOGO_NAME}</h1>
    </div>
  );
}
