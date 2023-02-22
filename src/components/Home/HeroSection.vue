<script>
    export default{
        name:"HeroSection",
    }
</script>

<template>
  <section>
    <section class="px-28 relative mt-8">
      <h1 class="text-8xl !leading-[130.56px] font-extrabold font-noto">  
        Building <span class="text-gradient">secure <br>
        web-apps</span> is my <br> life’s work.
      </h1>
      <div>
        Have an idea you’d want to discuss  with me?
      </div>
      <button class="btn-brand rounded-md px-8 py-3 text-white text-sm font-semibold my-6 uppercase">
        Tell me about it
      </button>
      <div class="absolute top-72 left-0 flex justify-end px-28 -z-0 w-full">
        <img src="@/assets/fade.svg"  class="h-[600px] w-auto"/>
      </div>
    </section>
    <section class="px-28 mt-16 relative grid grid-cols-3">
        <div class="col-span-2">
            <h1 class="text-7xl !leading-[130.56px] font-extrabold font-noto">  
                Hello There 👋,
            </h1>
            <div>
                I'm Ajidagba Ayobami. I am a full-stack web developer, driven to develop useful solutions while tackling the problem of online security.
            </div>
        </div>
    </section>
  </section>
    
</template>