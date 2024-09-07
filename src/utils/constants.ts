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
