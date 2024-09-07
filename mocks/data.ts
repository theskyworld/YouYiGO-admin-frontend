import { faker } from "@faker-js/faker";
import { ORDER_STATUS } from "../src/utils/constants";
import { getOrderStatusColor } from "../src/utils/functions";
import { Clothing, DataType } from "../src/utils/types";

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

function generateClothings(): Clothing[] {
  const clothes = [];
  for (let i = 0; i < 50; i++) {
    clothes.push({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      category: faker.commerce.department(),
      price: Number(faker.commerce.price()),
      color: faker.color.human(),
      pic: faker.image.url(),
      brand: faker.company.name(),
      views: faker.number.int(),
      isOnSale: faker.datatype.boolean(),
      description: faker.lorem.sentence(),
      stock: faker.number.int(),
    });
  }
  return clothes;
}

export const orders = generateOrders();
export const clothes = generateClothings();
export const avatar = faker.image.url();
