/**
 * @url https://jsonplaceholder.typicode.com/users/1
 * @header content-type: application/json
 * @delay 10
 * @header abc: xyz-12345
 * @header flag: yes
 * @method get
 */
import faker from "http-request-mock/plugin/faker.esm.mjs";
export default (request) => {
  void [faker, request];
  return {
    name: faker.name(),
    email: faker.email(),
    phone: "1-770-7364",
    gender: "male",
    age: 18,
  };
};
