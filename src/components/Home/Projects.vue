<script>
    export default{
        name:"Project",
        data(){
            return{
                projects:[
                    {
                        name:"Noshtrybe",
                        description:"Noshtrybe is an online food delivery service that encourages social interactions and connections among Trybe members.",
                        websiteUrl:"https://www.noshtrybe.com/",
                        library:[
                            'Git','Node js','Npm','Vue3'
                        ],
                        image:"https://res.cloudinary.com/dv9mjlspx/image/upload/v1677079200/portfoilo/image_zqkhiz.png"
                    },
                    {
                        name:"Tryba",
                        description:"Tryba is a banking and management platform built for individuals, self-employed, and companies.",
                        websiteUrl:"http://tryba.io/",
                        library:[
                            'Git','Node js','Npm','Vue3','Laravel'
                        ],
                        image:"https://res.cloudinary.com/dv9mjlspx/image/upload/v1677079195/portfoilo/Money_app_in_a_whole_new_level_-_Tryba_vepone.png"
                    }
                ]
            }
        }
    }
</script>
<template>
    <section id="project" class="lg:px-28 relative">
        <div class="grid px-8 lg:px-0 lg:grid-cols-3">
            <div class="lg:col-span-2">
                <h1 class="lg:text-7xl lg:leading-[130.56px] text-4xl leading-[36px] font-extrabold font-noto">  
                    Projects  💼
                </h1>
                <div class="lg:my-4 my-6 text-xl leading-10">
                    Here are a few projects I have worked on.
                </div>
            </div>
        </div>
        <div class="flex justify-center px-4 my-14">
            <div class="flex flex-col gap-8">
                <div v-for="project in projects" :key="project" class="p-8 grid grid-rows-1 lg:grid-cols-2 gap-8 lg:gap-16 rounded-lg bg-[#000022] text-white">
                    <div>
                        <img :src="project.image" class="rounded" />
                    </div>
                    <div class="flex flex-col gap-10 lg:gap-0 lg:justify-between">
                        <div>
                            <h1 class="font-noto font-semibold text-2xl lg:text-4xl">
                                {{ project.name  }}
                            </h1>
                            <div class="lg:my-6 my-8 text-base  lg:text-xl lg:leading-10">
                                {{ project.description  }}
                            </div>
                            <div>
                                <a :href="project.websiteUrl" target="_blank" class="btn-brand rounded-md px-8 py-3 text-white text-sm font-semibold my-6 uppercase">
                                    View the site
                                </a>
                            </div>
    
                        </div>
                        <div class="flex flex-wrap gap-4 items-end">
                            <div v-for="expert in project.library" :key="expert" class="px-4 py-2 rounded library-btn">{{ expert }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.library-btn{
    background: linear-gradient(90deg, rgba(252, 247, 248, 0.15) 0%, rgba(255, 255, 255, 0.15) 100%);
}
</style>