<script>
    export default{
        name:"Footer",
        data(){
            return{
                year: new Date().getFullYear()
            }
        }
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
</template>