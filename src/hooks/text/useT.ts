
 import {debounce,throttle}from "@/utils/commot"
 import {onMounted, ref, watch,reactive} from 'vue'
export default function(){
    let a = ref(1)
    let b = ref('laoluo')
    function d(){
        console.log(1);
        a.value = a.value+1
    }
    function t(){
        console.log(2);
        b.value = b.value + 1
    }
    onMounted(()=>{
        console.log('防抖节流');
    })
    function debounceMd(){
        debounce(d,1000)
    }
    function throttleMd(){
        throttle(t,1000)
    }
    return {
        debounceMd,
        throttleMd,
        a,b
    }
}