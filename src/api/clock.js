import request from '@/utils/request'

// 根据时间获取题目列表
export function getPeriod(data) {
  return request({
    url: '/api/v1/allExercises/period',
    method: 'GET',
    data: data
  })
}

// 获取官方题解列表
export function queryOfficialList () {
  return request({
    url: '/api/v1/officialExercises/byid',
    method: 'get'
  })
}

// 获取精选题解列表
export function querySelectedList () {
  return request({
    url: '/api/v1/selectedExercises/byid',
    method: 'get'
  })
}

// 打卡/保存题解
export function saveExercise(data) {
  return request({
    url: '/api/v1/saveExercise',
    method: 'POST',
    data: data
  })
}