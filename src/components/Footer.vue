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
<footer class="header-bg px-28 py-4 grid grid-cols-2">
    <div class="flex items-center gap-4">
        <div class="text-5xl font-extrabold font-noto">AD.</div> 
        <div class="uppercase text-sm">Ajidagba Ayobami</div>
    </div>
    <div class="flex items-center justify-end gap-14">
        Copyright {{ year }}
    </div>
</footer>
</template>