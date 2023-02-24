<script>
    export default{
        name:"Footer",
        data(){
            return{
                year: new Date().getFullYear(),
                hideFooterIcons: false
            }
        },
        methods:{
            hideFooterBar(){
                let scroll = document.documentElement.scrollTop + 800;
                let socialIcons =  document.querySelector("#social_icon");
                if(scroll > socialIcons.getBoundingClientRect().top + window.scrollY){
                    return this.hideFooterIcons = true
                }
                return this.hideFooterIcons = false
            }
        },
        created(){
            window.addEventListener('scroll', this.hideFooterBar);     
        },
    }
</script>

<template>
<footer class="header-bg lg:px-28 px-8 py-4 grid grid-cols-3">
    <div class="col-span-2 flex items-center gap-4">
        <div class="lg:text-5xl text-3xl font-extrabold font-noto">AD.</div> 
        <div class="uppercase text-xs lg:text-sm">Ajidagba Ayobami</div>
    </div>
    <div class="flex items-center text-xs lg:text-sm justify-end gap-14">
        Copyright {{ year }}
    </div>
</footer>
<div v-show="!hideFooterIcons && this.store.lightMode" class="fixed bg-dark-mode lg:hidden  bottom-0 w-full border-t border-b">
    <div class="footer-icon lg:hidden w-full  p-2">
        <div class="grid grid-cols-5 place-items-center my-4">
            <div>
                <a href="https://twitter.com/harji87" target="_blank">
                    <img src="@/assets/twitter-white.svg" class="h-7 w-7" />
                </a>
            </div>
            <div>
                <a href="https://instagram.com/ajidev_" target="_blank">
                    <img src="@/assets/instagram-white.svg" class="h-7 w-7"  />
                </a>
            </div>
            <div>
                <a href="https://web.facebook.com/ajidagba.ayobami" target="_blank">
                    <img src="@/assets/facebook-white.svg" class="h-7 w-7" />
                </a>
            </div>
            <div>
                <a href="https://github.com/ajidev89" target="_blank">
                    <img src="@/assets/github-white.svg" class="h-7 w-7"  />
                </a>
            </div>
            <div>
                <a href="https://github.com/ajidev89" target="_blank">
                    <img src="@/assets/linkedIn-white.svg" class="h-7 w-7"  />
                </a>
            </div>
        </div>
    </div>
</div>
<div v-show="!hideFooterIcons && !this.store.lightMode" class="fixed w-full bottom-0 border-t border-b bg-white">
    <div class="footer-icon-white lg:hidden w-full  p-2">
        <div class="grid grid-cols-5 place-items-center my-4">
            <div>
                <a href="https://twitter.com/harji87" target="_blank">
                    <img src="@/assets/twitter-black.svg" class="h-7 w-7" />
                </a>
            </div>
            <div>
                <a href="https://instagram.com/ajidev_" target="_blank">
                    <img src="@/assets/instagram-black.svg" class="h-7 w-7" />
                </a>
            </div>
            <div>
                <a href="https://web.facebook.com/ajidagba.ayobami" target="_blank">
                    <img src="@/assets/facebook-black.svg" class="h-7 w-7" />
                </a>
            </div>
            <div>
                <a href="https://github.com/ajidev89" target="_blank">
                    <img src="@/assets/github-black.svg" class="h-7 w-7" />
                </a>
            </div>
            <div>
                <a href="https://github.com/ajidev89" target="_blank">
                    <img src="@/assets/linkedIn.svg" class="h-7 w-7" />
                </a>
            </div>
        </div>
    </div>
</div>
</template>

<style>
.footer-icon{
    background: linear-gradient(92.64deg, rgba(67, 98, 190, 0.4) 10.89%, rgba(124, 145, 210, 0.2) 31.07%, rgba(255, 255, 255, 0.1) 94.01%);
}
.footer-icon-white{
    background: linear-gradient(92.64deg, rgba(67, 98, 190, 0.4) 3.89%, rgba(124, 145, 210, 0.2) 31.07%, rgba(255, 255, 255, 0.1) 94.01%);
}
</style>