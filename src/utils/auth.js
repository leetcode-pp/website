const TokenKey = 'Admin-Token'

export function getToken() {
  // return sessionStorage.getItem(TokenKey)
  return 'token-mock'
}

export function setToken(token) {
  return  sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return sessionStorage.clear(TokenKey)
}
