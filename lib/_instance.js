/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL + "api/",
  headers: {
    "content-Type": "application/json",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});
export default {
  //authentication
  home: () =>
    instance({
      method: "get",
      url: `home/`,
    }),
  settings: () =>
    instance({
      method: "get",
      url: `setting`,
    }),
  sendMessage: (data) =>
    instance({
      method: "post",
      url: "send-sms",
      data,
    }),
};
