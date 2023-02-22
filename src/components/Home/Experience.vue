<script>
    export default{
        name:"HeroSection",
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
    <section class="px-28 relative">
        <div class="grid grid-cols-3">
            <div class="col-span-2">
                <h1 class="text-7xl !leading-[130.56px] font-extrabold font-noto">  
                    Expertise ⚙
                </h1>
                <div class="my-4">
                    Software development, frontend and flutter developer.
                </div>
            </div>
        </div>
        <div class="flex justify-center my-14">
            <div class="flex flex-wrap justify-center gap-4 w-[40%]">
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