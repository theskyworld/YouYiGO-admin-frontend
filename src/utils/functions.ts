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

/**
 * 获取前n天的日期
 * @param {number} count
 * @returns {Array<string>} 前n天的日期数组（YYYY-MM-DD格式）
 */
export function getPreviousDays(count: number): Array<string> {
  const today = new Date();
  let result = [];

  for (let i = 0; i < count - 1; i++) {
    const previousDay = new Date(
      today.getTime() - (i + 1) * 24 * 60 * 60 * 1000,
    );
    const year = previousDay.getFullYear();
    const month = String(previousDay.getMonth() + 1).padStart(2, "0");
    const day = String(previousDay.getDate()).padStart(2, "0");
    result.push(`${year}-${month}-${day}`);
  }
  result = result.reverse();
  // 加入今天的
  const todayStr = `${today.getFullYear()}-${String(
    today.getMonth() + 1,
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  result.push(todayStr);

  return result;
}
