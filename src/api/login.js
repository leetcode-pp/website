import request from '@/utils/request'

// 登录方法
export function login(data) {

  return request({
    url: '/24/api/userSignin',
    method: 'post',
    data: data
  })
}

