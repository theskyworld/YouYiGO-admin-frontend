import {
  AccountBookOutlined,
  AppstoreOutlined,
  ContainerOutlined,
  EditOutlined,
  FileImageOutlined,
  FileTextOutlined,
  LineChartOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import { Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { SIDE_BAR_ITEMS } from "../utils/constants";
import { type AntdIconProps } from "../utils/types";

type SideBarItem = {
  id: string;
  title: string;
  icon: React.ForwardRefExoticComponent<
    Omit<AntdIconProps, "ref"> & React.RefAttributes<HTMLSpanElement>
  >;
  children?: SideBarItem[];
};
const {
  STATISTICS,
  CLOTHING,
  ORDER,
  ANNOUNCEMENT,
  SLIDE,
  CLOTHING_CATEGORY,
  CLOTHING_LIST,
  ORDER_LIST,
  ORDER_COMMENT,
} = SIDE_BAR_ITEMS;
export const sideBarItems: SideBarItem[] = [
  {
    id: "1",
    title: STATISTICS,
    icon: LineChartOutlined,
  },
  {
    id: "2",
    title: SLIDE,
    icon: FileImageOutlined,
  },
  {
    id: "3",
    title: ANNOUNCEMENT,
    icon: FileTextOutlined,
  },
  {
    id: "4",
    title: CLOTHING,
    icon: AccountBookOutlined,
    children: [
      {
        id: "4-1",
        title: CLOTHING_LIST,
        icon: OrderedListOutlined,
      },
      {
        id: "4-2",
        title: CLOTHING_CATEGORY,
        icon: AppstoreOutlined,
      },
    ],
  },
  {
    id: "5",
    title: ORDER,
    icon: ContainerOutlined,
    children: [
      {
        id: "5-1",
        title: ORDER_LIST,
        icon: OrderedListOutlined,
      },
      {
        id: "5-2",
        title: ORDER_COMMENT,
        icon: EditOutlined,
      },
    ],
  },
];

const items2 = sideBarItems.map((item) => {
  return {
    key: item.id,
    icon: React.createElement(item.icon),
    label: item.title,
    children: item.children
      ? item.children.map((item) => {
          return {
            key: item.id,
            icon: React.createElement(item.icon),
            label: item.title,
          };
        })
      : null,
  };
});

export default function MySideBar() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Sider width={200} style={{ background: colorBgContainer }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items2}
      />
    </Sider>
  );
}
