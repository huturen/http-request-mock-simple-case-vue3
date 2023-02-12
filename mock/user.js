/**
 * @url https://jsonplaceholder.typicode.com/users/1
 * @header content-type: application/json
 * @delay 0
 * @header abc: 12345
 * @header flag: yes
 * @method any
 */
import faker from "http-request-mock/plugin/faker.esm.mjs";

export default (request) => {
  request.method === "POST" && console.log(request.body);

  return {
    name: faker.name(),
    email: faker.email(),
    phone: "1-770-7364",
    gender: "male",
    age: 18,
  };
};
