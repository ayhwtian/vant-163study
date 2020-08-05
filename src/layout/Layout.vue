<template>
 <div id="Layout">
   <router-view />
   <tabbar></tabbar>
 </div>
</template>

<script>
import tabbar from '@/components/tabbar'

 export default {
   name: 'Layout',
   components: {
     tabbar,
   },
   data () {
     return {
     }
   },
 }
</script>

<style scoped>
</style>