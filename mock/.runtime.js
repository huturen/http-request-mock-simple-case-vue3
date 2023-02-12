/* eslint-disable */
let mocker;
import HttpRequestMock from "http-request-mock/http-request-mock.esm.mjs";

if (process.env.NODE_ENV === "development") {
  mocker = HttpRequestMock.setup();

  mocker.mock({
    "url": "https://jsonplaceholder.typicode.com/users/1",
    "body": import('./user.js'),
    "delay": 0,
    "headers": {
      "content-type": "application/json",
      "abc": "12345",
      "flag": "yes"
    }
  });
}

export default mocker;
/* eslint-enable */
