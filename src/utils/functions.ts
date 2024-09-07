import { ORDER_STATUS } from "./constants";
import { OrderStatus } from "./types";

export function formatDate(date: Date) {
  return `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

export function getOrderStatusColor(orderStatus: OrderStatus): string {
  const {
    WAIT_FOR_PAY,
    WAIT_FOR_DELIVERY,
    WAIT_FOR_RECEIVE,
    WAIT_FOR_COMMENT,
    FINISHED,
    CANCELED,
  } = ORDER_STATUS;
  switch (orderStatus) {
    case WAIT_FOR_PAY:
      return "blue";
    case WAIT_FOR_DELIVERY:
      return "orange";
    case WAIT_FOR_RECEIVE:
      return "green";
    case WAIT_FOR_COMMENT:
      return "purple";
    case FINISHED:
      return "cyan";
    case CANCELED:
      return "red";
    default:
      return "gray";
  }
}
