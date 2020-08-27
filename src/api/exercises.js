import request from '@/utils/request'

// 获取所有题解
export function allExercises () {
  return request({
    url: '/api/allExercises/period',
    method: 'get'
  })
}

// 获取某一天的所有题解
export function queryAnswerList () {
  return request({
    url: '/api/v1/allExercises/byid',
    method: 'get'
  })
}
