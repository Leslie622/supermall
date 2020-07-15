import axios from "axios"

export function requestMultidata(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  })

  //请求拦截
  instance.interceptors.request.use(aaa => {
    return aaa
  }, err => {
    console.log(err);
  })

  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}

export function requestGoods(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/n3",
    timeout: 5000
  })

  //请求拦截
  instance.interceptors.request.use(aaa => {
    return aaa
  }, err => {
    console.log(err);
  })

  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}



