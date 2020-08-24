import request from '@/utils/request'

// 登录方法
export function login (data) {
  return request({
    url: '/api/userSignin',
    method: 'post',
    data: data
  })
}

