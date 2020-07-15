import { requestMultidata, requestGoods } from "./request"

export function getHomeMultidata() {
  return requestMultidata({
    url: "/home/multidata"
  })
}

export function getHomeGoods(type, page) {
  return requestGoods({
    url: "/home/data",
    params:{
      type,
      page
    }
  })
}