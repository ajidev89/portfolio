<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Header from './components/Header.vue';

  components:{ 
    Header 
  }

</script>

<template>
  <div class="font-eudoxus">
    <Header/>
    <RouterView />
  </div>

</template>
