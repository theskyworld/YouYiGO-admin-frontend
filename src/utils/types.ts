import { ORDER_STATUS } from "./constants";

export interface IconBaseProps extends React.HTMLProps<HTMLSpanElement> {
  spin?: boolean;
  rotate?: number;
}
export type TwoToneColor = string | [string, string];
export interface AntdIconProps extends IconBaseProps {
  twoToneColor?: TwoToneColor;
}

export type OrderStatus = (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS];
export interface DataType {
  id: string;
  name: string;
  address: string;
  phone: string;
  orderTime: Date;
  orderStatus: OrderStatus;
  orderStatusColor: string;
  comment: string;
}
export type DataIndex = keyof DataType;
export type Operation = {
  id: string;
  label: string;
  handler: () => void;
};

export interface Clothing {
  id: string;
  name: string;
  category: string;
  price: number;
  color: string;
  pic: string;
  brand: string;
  views: number;
  isOnSale: boolean;
  description: string;
  stock: number;
}
export type ClothingIndex = keyof Clothing;
