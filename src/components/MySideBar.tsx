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
import { SideBarItem } from "../utils/types";
import { MenuItemGroupType, MenuItemType } from "antd/es/menu/interface";

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
    key: "1",
    label: STATISTICS,
    icon: React.createElement(LineChartOutlined),
    path: "/statistics",
  },
  {
    key: "2",
    label: SLIDE,
    icon: React.createElement(FileImageOutlined),
    path: "/slide",
  },
  {
    key: "3",
    label: ANNOUNCEMENT,
    icon: React.createElement(FileTextOutlined),
    path: "/announcement",
  },
  {
    key: "4",
    label: CLOTHING,
    icon: React.createElement(AccountBookOutlined),
    children: [
      {
        key: "4-1",
        label: CLOTHING_LIST,
        icon: React.createElement(OrderedListOutlined),
        path: "/clothing/list",
      },
      {
        key: "4-2",
        label: CLOTHING_CATEGORY,
        icon: React.createElement(AppstoreOutlined),
        path: "/clothing/category",
      },
    ],
  },
  {
    key: "5",
    label: ORDER,
    icon: React.createElement(ContainerOutlined),
    children: [
      {
        key: "5-1",
        label: ORDER_LIST,
        icon: React.createElement(OrderedListOutlined),
        path: "/order/list",
      },
      {
        key: "5-2",
        label: ORDER_COMMENT,
        icon: React.createElement(EditOutlined),
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

  function findTargetItem(
    items: SideBarItem[],
    key: string,
  ): SideBarItem | undefined {
    for (const item of items) {
      if (item!.key === key) {
        return item;
      } else if ((item as MenuItemGroupType).children) {
        const result: SideBarItem | undefined = findTargetItem(
          (item as MenuItemGroupType).children as SideBarItem[],
          key,
        );
        if (result) return result;
      }
    }
  }

  function handleItemClick(key: string) {
    const item = findTargetItem(sideBarItems, key);
    if (item && (item as MenuItemType & { path: string }).path) {
      navigate((item as MenuItemType & { path: string }).path);
    }
  }

  return (
    <Sider width={200} style={{ background: colorBgContainer }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={sideBarItems}
        onClick={({ key }) => handleItemClick(key)}
      />
    </Sider>
  );
}
