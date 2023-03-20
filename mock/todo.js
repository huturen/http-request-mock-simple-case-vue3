/**
 * @url https://jsonplaceholder.typicode.com/todos/1
 * @header content-type: application/json
 * @delay 0
 * @header abc: 12345
 * @header flag: yes
 * @method any
 */
import faker from "http-request-mock/plugin/faker.esm.mjs";

export default async (request) => {
  const res = await request.doOriginalCall();

  console.log("original response: ", res);
  return {
    title: `@${faker.datetime(Date.now())} do [${res.responseJson.title}]`,
  };
};
