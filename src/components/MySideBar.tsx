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
import { useNavigate } from "react-router-dom";
import { SIDE_BAR_ITEMS } from "../utils/constants";
import { type AntdIconProps } from "../utils/types";

type SideBarItem = {
  id: string;
  title: string;
  icon: React.ForwardRefExoticComponent<
    Omit<AntdIconProps, "ref"> & React.RefAttributes<HTMLSpanElement>
  >;
  path?: string;
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
    path: "/statistics",
  },
  {
    id: "2",
    title: SLIDE,
    icon: FileImageOutlined,
    path: "/slide",
  },
  {
    id: "3",
    title: ANNOUNCEMENT,
    icon: FileTextOutlined,
    path: "/announcement",
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
        path: "/clothing/list",
      },
      {
        id: "4-2",
        title: CLOTHING_CATEGORY,
        icon: AppstoreOutlined,
        path: "/clothing/category",
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
        path: "/order/list",
      },
      {
        id: "5-2",
        title: ORDER_COMMENT,
        icon: EditOutlined,
        path: "/order/comment",
      },
    ],
  },
];

export default function MySideBar() {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items2 = sideBarItems.map((item) => {
    return {
      key: item.id,
      icon: React.createElement(item.icon),
      label: item.title,
      path: item.path,
      children: item.children
        ? item.children.map((item) => {
            return {
              key: item.id,
              icon: React.createElement(item.icon),
              label: item.title,
              path: item.path,
            };
          })
        : null,
    };
  });
  return (
    <Sider width={200} style={{ background: colorBgContainer }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items2}
        onClick={({ item }) => item.props.path && navigate(item.props.path)}
      />
    </Sider>
  );
}
