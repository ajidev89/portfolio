<script>
    export default{
        name:"Header",
        data(){
            return{
                background:false
            }
        },
        methods:{
            handleScroll(){
                let scroll = window.scrollY;
                this.background = (scroll > 10) ? true : false
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        }
    }
</script>

<template>
    <div :class="{'bg-white shadow-md': background == true }" class="fixed top-0">
        <div class="flex items-center justify-between flex-grow px-8 py-4 w-screen" >
            <div v :class="{'text-black': background == true,'text-gray-100': background == false}" class="font-semibold uppercase" >AJIDEV</div>
            <div class="flex gap-6 items-center">
                <ul class="flex gap-8 font-semibold uppercase text-sm">
                    <li>Home</li>
                    <li>Experience</li>
                    <li>Project</li>
                    <li>Contact</li>
                </ul>
                <div>
                    <button class="bg-black rounded text-gray-100 text-sm font-semibold py-3 px-8">Hire me</button>
                </div>
            </div>
        </div>
    </div>
</template>