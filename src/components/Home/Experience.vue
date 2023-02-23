<script>
    export default{
        name:"HeroSection",
        data(){
            return{
                expertise:[
                    'Git','Node js','Npm','Tailwind','Composer','PHP','Laravel','NGINX','Vue3'
                ]
            }
        }
    }
</script>

<template>
    <section class="lg:px-28 px-8 relative">
        <div class="grid lg:grid-cols-3">
            <div class="lg:col-span-2">
                <h1 class="lg:text-7xl lg:leading-[130.56px] text-4xl leading-[36px] font-extrabold font-noto">  
                    Expertise ⚙
                </h1>
                <div class="lg:my-4 my-6 text-xl leading-10">
                    Software development, frontend and backend developer.
                </div>
            </div>
        </div>
        <div class="flex justify-center my-14">
            <div class="flex flex-wrap justify-center gap-4 lg:w-[40%]">
                <div v-for="expert in expertise" :key="expert" class="px-4 py-2 rounded  expert-btn">{{ expert }}</div>
            </div>
        </div>
    </section>
</template>

<style>
.expert-btn{
    background: linear-gradient(90deg, rgba(128, 160, 255, 0.2) 0%, rgba(151, 71, 255, 0.2) 100%);
}

</style>