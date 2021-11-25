import {request} from './request'
export function getHomeMultidata() {//home中有多个axios请求，在此处管理
        return request({
          url:'/home/multidata'
        })
}
export function getHomeMultidata1() {
  return request({
    url:'/home/multidata'
  })
}
export function getHomeMultidata2() {
  return request({
    url:'/home/multidata'
  })
}
