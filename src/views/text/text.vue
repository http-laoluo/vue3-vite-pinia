<script setup lang="ts">
    import textChild from "./components/textChild.vue"
    import {login} from "@/api/user"
    import { computed } from "@vue/reactivity";
    import {onMounted, ref, watch,reactive} from 'vue'
    import {useTextStore,useUserStore} from "@/stores/index"
    import {setToken} from "@/utils/auth"
    import {getCurrentInstance} from "vue";
    import {debounce,throttle}from "@/utils/commot"
    import useT from "@/hooks/text/useT"
    let { proxy } = getCurrentInstance();
    console.log(proxy.$text,'proxy.$text');
    
    const msg = ref('laoluo')
    // 使用环境变量
    console.log(import.meta.env.VITE_MODE_NAME,'import.meta.VITE_RES_URL');
    // 使用axios 
    // let res = await login() 
    console.log(import.meta.url,'/import.meta.url',import.meta.env);
    
    setToken('laoluo')

    login().then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err);
    })

    // 计算属性使用
    let goods1 = ref('')
    let good = computed(()=>{
        return 100 + goods1.value
    })
    // 监听 可以有多个
    watch(goods1,(newVal,oldVal)=>{
         console.log('新值',newVal,'旧值',oldVal);
    },{
        immediate:true,
        deep:true
    })
    // 获取组件实例 ref 
    const child = ref()
    onMounted(()=>{
        console.log('获取组件实例 ref ',child.value.data);
        
    })
    
    
    // 可以有多个同一生命周期
    onMounted(()=>{
        console.log('生命周期1');
        
    })
    onMounted(()=>{
        console.log('生命周期2');
        
    })

    // props emit使用
    let name = ref('传递的name')
    let list = reactive([{name:'张三',age:18}])

    function tap(e:any){
        console.log('子组件触发',e);
    }
    // nutui使用
    let state = reactive({
      tab1value: '0',
    });
    // 使用pinia
    const store = useTextStore()
    const userStore = useUserStore()
    onMounted(()=>{
        console.log(store,'store////',store.count,store.doubleCount);
        console.log(userStore,'userStore////',JSON.stringify(userStore.userList));
        userStore.getList()
        console.log(userStore,'userStore////',JSON.stringify(userStore.userList));
    })
   
    let piniaTap = ()=>{
        store.increment(10)
    }
    //防抖节流
    let { debounceMd,throttleMd,a,b}  = useT()
   
</script>

<template>
   <div class="home">
    {{msg}}
   </div>
   <div class="home1">
    {{msg}}
   </div>
   <div>
     商品原价100
     <input type="number" v-model="goods1">
    <div>最终价格：{{good}}</div>
   </div>
   <textChild :name="name" :list="list" @tap='tap($event)' ref="child">
      <template v-slot:head>
        <div>
            我是具名插槽
        </div>
      </template>
      <div>
        我是默认插槽
      </div>
   </textChild>
   <!-- nutui使用 -->
   <div>
        <nut-button type="primary">主要按钮</nut-button>
        <nut-button type="info">信息按钮</nut-button>

        <nut-icon name="dongdong"></nut-icon>
        <nut-icon name="JD"></nut-icon>

        <nut-tabs v-model="state.tab1value">
            <nut-tabpane title="Tab 1">
                Tab 1
            </nut-tabpane>
            <nut-tabpane title="Tab 2">
                Tab 2
            </nut-tabpane>
            <nut-tabpane title="Tab 3">
                Tab 3
            </nut-tabpane>
        </nut-tabs>
   </div>
   <div>store.count值 {{store.count}}</div>
   <div>userStore.userList: {{JSON.stringify(userStore.userList)}}</div>
   <button @click="piniaTap">pinia修改</button>
   <button @click="debounceMd">防抖{{a}}</button>
   <button @click="throttleMd">节流{{b}}</button>
</template>

<style>
 .home {
  width: 375px;
  height: 375px;
  background: pink;
 }
 .home1 {
  width: 750px;
  height: 375px;
  background: skyblue;
 }
</style>

<!-- vue3 代码片段模板 -->

<!-- {
	"Print to console": {
	  "prefix": "vue3",
	  "body": [
		"<template>",
		"  <div></div>",
		"</template>",
		"",
		"<script setup lang=\"ts\">",
		"  import { reactive, ref, onMounted } from 'vue'",
		"  const data = reactive({})",
		"  onMounted(() => {",
		"  })",
		"</script>",
		"<style scoped>",
		"</style>",
		
	],
	  "description": "Log output to console"
	}
} -->