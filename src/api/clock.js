import request from '@/utils/request'

// 根据时间获取题目列表
export function getPeriod (data) {
    console.log(data)
    return request({
      url: '/api/v1/allExercises/period',
      method: 'GET',
      data: data
    })
  }