import http from './http'

export function getUserInfo(data: any): Promise<any> {
  return http.get!('/repository/get', data || {})
}

export function getError(data: any): Promise<any> {
  return http.get!('error', data || {})
}
