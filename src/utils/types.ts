export interface IconBaseProps extends React.HTMLProps<HTMLSpanElement> {
  spin?: boolean;
  rotate?: number;
}
export type TwoToneColor = string | [string, string];
export interface AntdIconProps extends IconBaseProps {
  twoToneColor?: TwoToneColor;
}
