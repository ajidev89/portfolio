<script>
    export default{
        name:"Header",
        data(){
            return{
                background:false,
                lightMode:true,
                showMobileMenu:false
            }
        },
        methods:{
            handleScroll(){
                let scroll = window.scrollY;
                this.background = (scroll > 10) ? true : false
            },
            togglePublish($event,published,id){
                let toogle = document.querySelector(`#toggleBtn`);
                let span = document.querySelector(`#toggleBtn`).nextSibling;
                this.store.toogleMode();
                if (this.store.lightMode) {
                    //Unpublish
                    toogle.lastElementChild.classList.remove('translate-x-[52px]')
                }else{
                    //publish
                    toogle.lastElementChild.classList.add('translate-x-[52px]')
                }
            },
            toogleNav(){
                this.showMobileMenu = !this.showMobileMenu
            }

        },
    }
</script>

<template>
    <section :class="{ 'bg-white': !this.store.lightMode,'bg-dark-mode': this.store.lightMode }" class="sticky top-0 z-10">
        <header class="header-bg px-8 py-4 grid grid-cols-3 lg:grid-cols-3 lg:place-items-center">
            <div class="col-span-2 lg:col-span-1 flex items-center gap-4">
                <div class="text-3xl lg:text-5xl font-extrabold font-noto">AD.</div> 
                <div class="uppercase text-xs lg:text-sm">Ajidagba Ayobami</div>
            </div>
            <div class="col-span-2 hidden lg:flex items-center gap-14">
                <ul class="flex gap-12">
                    <li>Home</li>
                    <li>Experise</li>
                    <li>Project</li>
                </ul>
                <button :class="{ 'btn-border-gradient': this.store.lightMode, 'btn-gradient': !this.store.lightMode }" >Give me a call</button>
                <div>
                    <button @click="togglePublish($event)" id="toggleBtn" class="bg-brand relative h-10 w-24 flex items-center px-2 rounded-full">
                        <div class="flex items-center  flex-grow justify-between">
                            <div><img src="@/assets/moon.svg" /></div>
                            <div><img src="@/assets/sun.svg" /></div>
                        </div>
                        <div :class="this.store.lightMode ? 'translate-x-0' : 'translate-x-[52px]'" class="h-7 w-7 flex absolute bg-white justify-center items-center rounded-full transition duration-500 transform"></div>
                    </button>
                </div>
            </div>
            <div v-if="!showMobileMenu" class="lg:hidden flex justify-end">
                <img @click="toogleNav" v-if="this.store.lightMode" src="@/assets/menu.svg" />
                <img @click="toogleNav" v-else src="@/assets/menu-black.svg" />
            </div>
            <div v-else class="lg:hidden flex justify-end">
                <img @click="toogleNav" v-if="this.store.lightMode" src="@/assets/cancel-white.svg" />
                <img @click="toogleNav" v-else src="@/assets/cancel-black.svg" />
            </div>
        </header>
    </section>

    <div v-if="showMobileMenu" :class="{ 'bg-white/20': !this.store.lightMode,'bg-dark-mode/20': this.store.lightMode }" class="fixed z-10 backdrop-blur w-full h-[84vh]">
       <div class="flex justify-center mb-8">
            <ul class="flex flex-col text-2xl gap-14 px-8 my-16">
                <li>Home</li>
                <li>Expertise</li>
                <li>Projects</li>
                <li>Speak with me</li>
            </ul>
       </div>
       <div class="flex justify-center">
            <button @click="togglePublish($event)" id="toggleBtn" class="bg-brand relative h-10 w-24 flex items-center px-2 rounded-full">
                <div class="flex items-center  flex-grow justify-between">
                    <div><img src="@/assets/moon.svg" /></div>
                    <div><img src="@/assets/sun.svg" /></div>
                </div>
                <div :class="this.store.lightMode ? 'translate-x-0' : 'translate-x-[52px]'" class="h-7 w-7 flex absolute bg-white justify-center items-center rounded-full transition duration-500 transform"></div>
            </button>
        </div>

    </div>
</template>

<style>

.header-bg{
    background: linear-gradient(92.64deg, rgba(67, 98, 190, 0.2) 3.89%, rgba(124, 145, 210, 0.1) 31.07%, rgba(255, 255, 255, 0.05) 94.01%);
}

</style>