import request from '@/utils/request'

// 获取所有题解
export function allExercises() {
  return request({
    url: '/api/allExercises/period',
    method: 'get'
  })
}
