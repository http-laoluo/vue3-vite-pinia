//格式化时间
export function format(dat:Date){
    //获取年月日，时间
    var year = dat.getFullYear();
    var mon = (dat.getMonth()+1) < 10 ? "0"+(dat.getMonth()+1) : dat.getMonth()+1;
    var data = dat.getDate()  < 10 ? "0"+(dat.getDate()) : dat.getDate();
    var hour = dat.getHours()  < 10 ? "0"+(dat.getHours()) : dat.getHours();
    var min =  dat.getMinutes()  < 10 ? "0"+(dat.getMinutes()) : dat.getMinutes();
    var seon = dat.getSeconds() < 10 ? "0"+(dat.getSeconds()) : dat.getSeconds();
                 
    var newDate = year +"-"+ mon +"-"+ data +" "+ hour +":"+ min +":"+ seon;
    return newDate;
}

/**
 * 格式化日期
 * @param {string | number | Date} value 指定日期
 * @param {string} format 格式化的规则
 * @example
 * ```js
 * formatDate();
 * formatDate(1603264465956);
 * formatDate(1603264465956, "h:m:s");
 * formatDate(1603264465956, "Y年M月D日");
 * formatDate(1603264465956, "Y年M月D日 h:m:s")
 * formatDate(1603264465956, "Y-M-D h:m:s")
 * ```
 */
export function formatDate(value = Date.now(), format = "Y-M-D h:m:s") {
    const formatNumber = (n:number) => `0${n}`.slice(-2);
    const date = new Date(value);
    const formatList = ["Y", "M", "D", "h", "m", "s"];
    const resultList = [];
    resultList.push(date.getFullYear().toString());
    resultList.push(formatNumber(date.getMonth() + 1));
    resultList.push(formatNumber(date.getDate()));
    resultList.push(formatNumber(date.getHours()));
    resultList.push(formatNumber(date.getMinutes()));
    resultList.push(formatNumber(date.getSeconds()));
    for (let i = 0; i < resultList.length; i++) {
        format = format.replace(formatList[i], resultList[i]);
    }
    return format;
}

// 获得当前时间，并格式化
export function getNowFormatDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month:(number | string)= date.getMonth() + 1;
    var d:(number | string) = date.getDate();
    var hour:(number | string) = date.getHours();
    var minute:(number | string) = date.getMinutes();
    var second:(number | string) = date.getSeconds();
    if(month<10){
        month = "0" + month;
    }
    if(d<10){
        d = "0" + d;
    } 
    if(hour<10){
        hour = "0" + hour;
    }
    if(minute<10){
        minute = "0" + hour;
    } 
    if(second<10){
        second = "0" + second;
    }
    return year + "-" + month + "-" + d + " " +hour + ":" + minute + ":" + second;
}

// 1.定义一个定时器, 保存上一次的定时器
let timer:any = null

// 防抖
export function debounce(fn:Function, delay:number) {

    // 2.真正执行的函数
    // const _debounce = function () {
      // 取消上一次的定时器
      if (timer) clearTimeout(timer)
      // 延迟执行
      timer = setTimeout(() => {
        // 外部传入的真正要执行的函数
        fn()
      }, delay)
    // }
  
    // return _debounce
}

// 1.记录上一次的开始时间
let lastTime = 0

// 节流
export function throttle(fn:Function, interval:(number)) {

  
    // 2.事件触发时, 真正执行的函数
    // const _throttle = function () {
    //   2.1.获取当前事件触发时的时间
      const nowTime = new Date().getTime()
  
      // 2.2.使用当前触发的时间和之前的时间间隔以及上一次开始的时间, 计算出还剩余多长事件需要去触发函数
      const remainTime = interval - (nowTime - lastTime)
      if (remainTime <= 0) {
        // 2.3.真正触发函数
        fn()
        // 2.4.保留上次触发的时间
        lastTime = nowTime
      }
    // }
  
    // return _throttle
}