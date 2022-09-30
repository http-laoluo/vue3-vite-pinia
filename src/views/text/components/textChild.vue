<template>
  <div>child---{{name}}</div>
  <slot name="head"></slot>
  <button @click="tapMd">子按钮</button>

  <slot></slot>
</template>

<script setup lang="ts">
  import { reactive, ref, onMounted } from 'vue'
  const data = reactive({name:'///'})
  let props = defineProps({
    name:String,
    list:Object
  })
  let emit = defineEmits(['tap'])
  function tapMd(){
    emit('tap',{name:'laoluo'})
  }
  onMounted(() => {
    console.log(props,'props');
    console.log(emit,'emit');
     
  })
  //父组件通过实例访问需要暴漏出去
  defineExpose({
    data
  })
</script>
<style scoped>
</style>