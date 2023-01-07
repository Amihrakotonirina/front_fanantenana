<template>
  <div class="about">
    <h1>Données from store via composition API</h1>
    {{store.state.counter}}
    <h2>Carré</h2>
    {{store.state.counter}} <sup>2</sup> = {{ store.getters.calculCarre() }}
  </div>
</template>
<script>
import { inject } from 'vue'
export default{
  setup(){
    const store = inject('store')

    return{
      store
    }
  }
}
</script>
