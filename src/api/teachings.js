import request from "@/utils/request";

// 获取基础讲义
export function fetchTeachings(category) {
  return request({
    url: `/api/v1/teachings?category=${category}`,
    method: "get"
  });
}

// 获取基础讲义
export function fetchTeachingById(id) {
  return request({
    url: `/api/v1/teaching?id=${id}`,
    method: "get"
  });
}
