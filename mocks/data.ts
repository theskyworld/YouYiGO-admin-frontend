import { faker } from "@faker-js/faker";
import { ORDER_STATUS } from "../src/utils/constants";
import { DataType } from "../src/utils/types";
import { getOrderStatusColor } from "../src/utils/functions";

function generateOrders(): DataType[] {
  const orders = [];
  for (let i = 0; i < 50; i++) {
    const orderStatus = faker.helpers.arrayElement(Object.values(ORDER_STATUS));
    orders.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      address: faker.location.streetAddress(),
      phone: faker.phone.number({ style: "international" }),
      orderTime: faker.date.anytime(),
      orderStatus,
      orderStatusColor: getOrderStatusColor(orderStatus),
      comment: faker.lorem.sentence(),
    });
  }
  return orders;
}

export const orders = generateOrders();
