import axios from "axios"
 // `cancelToken` 指定用于取消请求的 cancel token http://www.axios-js.com/
const CancelToken = axios.CancelToken;
interface paramsType {
  [key:(string)]:((str:string)=>void)
}

const pendingReq:paramsType={};
const request = axios.create({
    baseURL: '/api',//import.meta.env.VITE_RES_URL,
    timeout: 5000,
    responseType: 'json'
});


// Add a request interceptor
request.interceptors.request.use((config)=>{
    // Do something before request is sent
    // 这里可以自定义一些config 配置
    const key = config.url + '&' + config.method;
    // cancel the request
    pendingReq[key] && pendingReq[key]('操作太频繁了~');
    config.cancelToken = new CancelToken((c) => {
      // 接收一个 cancel 函数作为参数
      pendingReq[key] = c;
    });

    config.headers={'Platform-Token': 'PClass'}
    return config
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
request.interceptors.response.use((response)=>{
    // Do something with response data
    const res = response.data
    // 这里处理一些response 正常放回时的逻辑
    const key = response.config.url + '&' + response.config.method;
    pendingReq[key] && delete pendingReq[key];
  
    return res
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default  request