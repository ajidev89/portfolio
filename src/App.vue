<script>
  import { RouterLink, RouterView } from 'vue-router'
  import Header from './components/Header.vue';

  export default{
    name:"App",
    components:{ 
      Header 
    },
  }



</script>

<template>
  
  <div :class="{ 'bg-dark-mode text-white': this.store.lightMode, 'bg-white text-black': !this.store.lightMode }" class="font-eudoxus transition-all ease-in-out duration-500">
    <Header/>
    <RouterView />
  </div>

</template>
