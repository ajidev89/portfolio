import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want, but it's best to use the name of the store and surround it with `use` and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
const useStore = defineStore('main', {

    state: () => {
        return {
            lightMode: (localStorage.hasOwnProperty("mode_session")) ? JSON.parse(localStorage.getItem("mode_session")) : false,
        }
    },
    getters: {
        getMode(){
            let mode  = localStorage.getItem("mode_session");
            if(mode){
                console.log("Hey");
                return mode
            }
            console.log("Hey");
            return this.lightMode;
        }
    },
    actions: {
        //use this to access the whole instance
        toogleMode(){
            this.lightMode = !this.lightMode;
            localStorage.setItem('mode_session', this.lightMode); 
        }
    },
})

export default useStore;