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
            },
            scrollToView(el,offset){
                const myEl = document.getElementById(el)
                this.$smoothScroll({
                    scrollTo: myEl,
                    duration: 1000,
                    offset: offset,
                });

                this.toogleNav();
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
                    <li>
                        <a href="#home" v-smooth-scroll="{ duration: 1000, offset: -62 }"> 
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#expertise" v-smooth-scroll="{ duration: 1000, offset: -100 }"> 
                            Expertise
                        </a>
                    </li>
                    <li>
                        <a href="#project" v-smooth-scroll="{ duration: 1000, offset: -100 }"> 
                            Projects
                        </a>
                    </li>
                </ul>
                <a href="tel:+2347084773667" :class="{ 'btn-border-gradient': this.store.lightMode, 'btn-gradient': !this.store.lightMode }" >Give me a call</a>
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
            <div v-show="!showMobileMenu" class="lg:hidden flex justify-end">
                <img @click="toogleNav" v-show="this.store.lightMode" src="@/assets/menu.svg" />
                <img @click="toogleNav" v-show="!this.store.lightMode" src="@/assets/menu-black.svg" />
            </div>
            <div v-show="showMobileMenu" class="lg:hidden flex justify-end">
                <img @click="toogleNav" v-show="this.store.lightMode" src="@/assets/cancel-white.svg" />
                <img @click="toogleNav" v-show="!this.store.lightMode" src="@/assets/cancel-black.svg" />
            </div>
        </header>
    </section>

    <div v-show="showMobileMenu" :class="{ 'bg-white/20': !this.store.lightMode,'bg-dark-mode/20': this.store.lightMode }" class="fixed z-10 backdrop-blur w-full h-screen">
       <div class="flex justify-center mb-8">
            <ul class="flex flex-col text-2xl gap-14 px-8 my-16">
                <li>
                    <a href="#home" @click="scrollToView('home', -62)"> 
                        Home
                    </a>
                </li>
                <li>
                    <a href="#expertise" @click="scrollToView('expertise',-100)"> 
                        Expertise
                    </a>
                </li>
                <li>
                    <a href="#project" @click="scrollToView('project',-100)"> 
                        Projects
                    </a>
                </li>
                <li>
                    <a href="tel:+2347084773667">
                        Speak with me
                    </a>
                </li>
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