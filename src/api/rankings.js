import request from "./request";

// 登录方法
export function queryRankings(data) {
  return request({
    url: "/api/v1/ranks",
    method: "get",
    data: data
  });
}
