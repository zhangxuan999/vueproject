import axios from './axios'

export const BANNER = 'banner'
export const RECOMMEND = 'recommend'
// 这里封装的是home相关的网络请求
export function getHomeMultidata() {
  return axios({
    url: '/home/multidata'
  })
}

export function getHomeData(type, page) {
  return axios({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
