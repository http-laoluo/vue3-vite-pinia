import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTextStore = defineStore('text', () => {

  const count = ref(0)

  const doubleCount = computed(() => count.value * 2)
  
  function increment(num:number) {
    count.value =  count.value + num
  }

  return { count, doubleCount, increment }
})
