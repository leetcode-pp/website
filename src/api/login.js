import request from '@/utils/request'

// 登录方法
export function login (data) {
  return request({
    url: '/api/v1/userSignin',
    method: 'post',
    data: data
  })
}
// 注册
export function signUp (data) {
  return request({
    url: '/api/v1/signup',
    method: 'post',
    data: data
  })
}

