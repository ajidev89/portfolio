<script setup>
import HeroSection from '../components/Home/HeroSection.vue';
import Experience from '../components/Home/Experience.vue';
import Projects from '../components/Home/Projects.vue';
import Contact from '../components/Home/Contact.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
<section class="flex flex-col gap-32">
  <HeroSection/>
  <Experience/>
  <Projects/>
  <Contact/>
  <Footer/>
</section>
</template>
