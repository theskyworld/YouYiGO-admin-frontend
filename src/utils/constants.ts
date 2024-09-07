export const LOGO_NAME = "优衣GO";

export const ORDER_STATUS = {
  WAIT_FOR_PAY: "待付款",
  WAIT_FOR_DELIVERY: "待发货",
  WAIT_FOR_RECEIVE: "待签收",
  WAIT_FOR_COMMENT: "待评价",
  FINISHED: "已完成",
  CANCELED: "已取消",
} as const;

export const TABLE_COLUMNS = {
  ORDER_ID: "订单号",
  CUSTOMER_NAME: "客户姓名",
  CUSTOMER_TEL: "客户手机号",
  CUSTOMER_ADDRESS: "收货地址",
  ORDER_TIME: "订单时间",
  ORDER_STATUS: "订单状态",
  COMMENT: "备注",
  OPERATIONS: "操作",
};

export const CLOTHING_TABLE_COLUMNS = {
  CLOTHING_ID: "服装编号",
  CLOTHING_NAME: "服装名称",
  CLOTHING_CATEGORY: "服装类别",
  CLOTHING_PRICE: "服装价格",
  CLOTHING_COLOR: "服装颜色",
  CLOTHING_PIC: "服装图片",
  CLOTHING_BRAND: "服装品牌",
  VIEWS: "浏览量",
  IS_ON_SALE: "是否已上架",
  CLOTHING_STOCK: "服装库存",
  DESCRIPTION: "服装描述",
  OPERATIONS: "操作",
};
