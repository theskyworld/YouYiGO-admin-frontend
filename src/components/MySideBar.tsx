import {
  AccountBookOutlined,
  LineChartOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { type AntdIconProps } from "../utils/types";

type SideBarItem = {
  id: string;
  title: string;
  icon: React.ForwardRefExoticComponent<
    Omit<AntdIconProps, "ref"> & React.RefAttributes<HTMLSpanElement>
  >;
  children?: SideBarItem[];
};

const sideBarItems: SideBarItem[] = [
  {
    id: "1",
    title: "统计分析",
    icon: LineChartOutlined,
  },
  {
    id: "2",
    title: "服装管理",
    icon: AccountBookOutlined,
    children: [
      {
        id: "2-1",
        title: "服装管理",
        icon: AccountBookOutlined,
      },
      {
        id: "2-2",
        title: "服装管理",
        icon: AccountBookOutlined,
      },
    ],
  },
  {
    id: "3",
    title: "订单管理",
    icon: UnorderedListOutlined,
  },
  {
    id: "4",
    title: "用户管理",
    icon: UserOutlined,
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
