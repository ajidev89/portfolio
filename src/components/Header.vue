<script>
    export default{
        name:"Header",
        data(){
            return{
                background:false,
                lightMode:true
            }
        },
        methods:{
            handleScroll(){
                let scroll = window.scrollY;
                this.background = (scroll > 10) ? true : false
            },
            async togglePublish($event,published,id){
                console.log("hey");
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
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        }
    }
</script>

<template>
    <header class="header-bg px-8 py-4 grid grid-cols-3 place-items-center">
        <div class="flex items-center gap-4">
            <div class="text-5xl font-extrabold font-noto">AD.</div> 
            <div class="uppercase text-sm">Ajidagba Ayobami</div>
        </div>
        <div class="col-span-2 flex items-center gap-14">
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
                    <div :class="this.store.lightMode ? 'translate-x-0' : 'translate-x-[52px]'" class="h-7 w-7 flex absolute bg-white justify-center items-center rounded-full transition duration-500 transform">
                        <div class="h-6 w-6 border-[#9747FF] border-r-2 rounded-r-xl">
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </header>
</template>

<style>

.header-bg{
    background: linear-gradient(92.64deg, rgba(67, 98, 190, 0.2) 3.89%, rgba(124, 145, 210, 0.1) 31.07%, rgba(255, 255, 255, 0.05) 94.01%);
}

</style>