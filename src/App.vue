<script>
import Sidedbar from '@/components/sidebar/Sidebar.vue'
import { sidebarWidth } from './components/sidebar/state'
import "./main.js"
import axios from 'axios'
import { RouterView } from 'vue-router'


export default{
  components: { Sidedbar },
  setup(){
    return { sidebarWidth }
  },

  beforeCreate(){
    axios.get("/checkLogin")
         .then((res) => {
          this.$router.push({ name : 'Dashboard' })
         })

         .catch((err) => {
          this.$router.push({ name : 'Login' })
         })
  }
}

</script>

<template>
  <Sidedbar />
  <div :style="{ 'margin-left': sidebarWidth }">
  <router-view />
</div>

</template>



