import request from "@/utils/request";

type Method = 'GET'| 'POST' | 'PUT' | 'DELETE'
interface requestType {
  [key:string]:any,
  url: string;
  method?: Method;
  params?: any;
  data?: any;
}
export  function login(data?:Object){
    return request({
        url:"/login",
        method:'post',
        data
    })
}
