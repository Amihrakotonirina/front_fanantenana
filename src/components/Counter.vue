<template>
    <div :style="{color: store.state.theme}" class="counter">
        {{ store.state.counter }}
    </div>
    <div class="buttons">
        <button @click="store.methods.decrementerCounter"> - </button>
        <button @click="store.methods.incrementerCounter"> + </button>
    </div>

    <div>
        {{store.state.counter}}
        <sup>2</sup> = 
        { { store.getters.calculCarre() } }
    </div>

    <div>
        <input
            v-model="theme"
            type="text">
    </div>
  
</template>

<script>
import { inject, computed } from 'vue'

export default {
    setup() {
        const store = inject('store')

        const theme = computed({
            get(){
                return store.state.theme
            },
            set(val){
                store.methods.setTheme(val)
            }
        })

        return{
            store,
            theme
        }
    }
}
</script>

<style>
    .counter{
        font-size: 80px;
        font-weight: bolder;
    }
    .buttons button{
        height: 30px;
        width: 100px;
        margin:10px;
        font-size: 20px;
        font-weight: bold;
    }

</style>