<template>
    <div v-for="(presence, index) in store.state.listePresence" :key="index">
        {{index +1 }} - {{presence.membre.nom}} {{presence.membre.prenom}} ({{presence.reunion.categorie.categorie}} -  {{presence.reunion.categorie.categorie}})
    </div>
</template>

<script>
import { inject, computed, ref } from 'vue'
import { onMounted } from "vue"

export default {
    setup() {
        const store = inject('store')


        onMounted(() => {
            store.methods.recupAllPresences()
            
        })

        return{
            store,
        }
    }
}
</script>

<style scoped>

    .button{
        height: 30px;
        width: 100px;
        margin:10px;
        font-size: 20px;
        font-weight: bold;
    }

    .photo-profile{
        max-width: 100px;
        margin-left: 25px;
    }

</style>