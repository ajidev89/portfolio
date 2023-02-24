<script>
    export default{
        name:"Contact",
        data(){
            return{
                expertise:[
                    'Git','Node js','Npm','Composer','PHP','Laravel','NGINX','Vue3'
                ]
            }
        }
    }
</script>

<template>
    <section class="lg:px-28 px-8 relative">
        <div class="grid lg:grid-cols-3">
            <div class="lg:col-span-2">
                <h1 class="lg:text-6xl lg:leading-[130.56px] text-4xl leading-[36px]  font-extrabold font-noto">  
                    Let's create magic 🧝‍♂️
                </h1>
                <div class="my-4 text-xl leading-10">
                    Thank you for your time. I am open to collaborating with a team oftalented developers and designers. Give me a call  ,  or drop me an email at ajidagba21@gmail.com, if you think we could work well together. Working with exceptional humans is always  an honor. 
                </div>
            </div>
        </div>
        <div class="lg:absolute lg:top-72 lg:left-0 flex justify-center lg:justify-end lg:px-28 -z-0 w-full">
            <img src="@/assets/contact-face.png"  class="lg:h-[500px] w-auto"/>
          </div>
    </section>
    <section  class="lg:px-28 px-8 my-16 relative grid lg:grid-cols-3">
        <div class="lg:col-span-2">
            <h1 class="lg:text-7xl lg:leading-[130.56px] text-4xl leading-[36px] font-extrabold font-noto">  
                Let's connect 🔗
            </h1>
            <div class="my-8 lg:my-0 text-xl leading-10">
                I am always interested to talk about everything web development,
                and Tech.
            </div>
            <div v-show="!this.store.lightMode" id="social_icon" class="flex items-center gap-8 my-4">
                <div>
                    <a href="https://twitter.com/harji87" target="_blank">
                        <img src="@/assets/twitter-black.svg" />
                    </a>
                </div>
                <div>
                    <a href="https://instagram.com/ajidev_" target="_blank">
                        <img src="@/assets/instagram-black.svg" />
                    </a>
                </div>
                <div>
                    <a href="https://web.facebook.com/ajidagba.ayobami" target="_blank">
                        <img src="@/assets/facebook-black.svg" />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/ajidev89" target="_blank">
                        <img src="@/assets/github-black.svg" />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/ajidev89" target="_blank">
                        <img src="@/assets/linkedIn.svg" />
                    </a>
                </div>
            </div>
            <div v-show="this.store.lightMode" id="social_icon" class="flex items-center gap-8 my-4">
                <div>
                    <a href="https://twitter.com/harji87" target="_blank">
                        <img src="@/assets/twitter-white.svg" />
                    </a>
                </div>
                <div>
                    <a href="https://instagram.com/ajidev_" target="_blank">
                        <img src="@/assets/instagram-white.svg" />
                    </a>
                </div>
                <div>
                    <a href="https://web.facebook.com/ajidagba.ayobami" target="_blank">
                        <img src="@/assets/facebook-white.svg" />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/ajidev89" target="_blank">
                        <img src="@/assets/github-white.svg" />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/ajidev89" target="_blank">
                        <img src="@/assets/linkedIn-white.svg" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.expert-btn{
    background: linear-gradient(90deg, rgba(128, 160, 255, 0.2) 0%, rgba(151, 71, 255, 0.2) 100%);
}

</style>