<script>
    export default{
        name:"HeroSection",
    }
</script>

<template>
  <section>
    <section class="lg:px-28 px-8 relative mt-8">
      <h1 class="lg:text-8xl text-5xl leading-[65.28px] lg:leading-[130.56px] font-extrabold font-noto">  
        Building <span class="text-gradient">secure <br>
        web-apps</span> is my <br> life’s work.
      </h1>
      <div class="my-6 lg:my-0">
        Have an idea you’d want to discuss  with me?
      </div>
      <button class="btn-brand rounded-md px-8 py-3 text-white text-sm font-semibold my-6 uppercase">
        Tell me about it
      </button>
      <div class="absolute hidden top-72 left-0 lg:flex justify-end lg:px-28 -z-0 w-full">
        <img src="@/assets/fade.svg"  class="h-[600px] w-auto"/>
      </div>
    </section>
    <section class="lg:px-28 mt-16 px-6 relative grid lg:grid-cols-3">
        <div class="lg:col-span-2">
            <h1 class="lg:text-7xl text-4xl leading-[36px] lg:leading-[130.56px] font-extrabold font-noto">  
                Hello There 👋,
            </h1>
            <div class="text-xl my-6 lg:my-0 leading-10">
                I'm Ajidagba Ayobami. I am a full-stack web developer, driven to develop useful solutions while tackling the problem of online security.
            </div>
        </div>
        <div class="lg:hidden flex justify-center">
          <img src="@/assets/face-mobile.png"  class="h-[368px] w-auto"/>
        </div>
    </section>
  </section>
    
</template>