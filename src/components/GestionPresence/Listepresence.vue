<template>
    <div>
        <h1>Liste des présences</h1>
        <div v-for="(presence, index) in store.state.listePresence" :key="index">
            {{index +1 }} - {{presence.membre.nom}} {{presence.membre.prenom}} ({{presence.reunion.categorie.categorie}} -  {{presence.reunion.categorie.categorie}})
        </div>
    </div>
</template>

<script>
import { inject, computed, ref, onMounted } from 'vue'

export default {
    setup() {
        const api_url = ref("")
        const store = inject('store')


        onMounted(() => {
            store.methods.recupAllPresences()
            api_url.value = process.env.VUE_APP_API_URL            
        })

        return{
            store,
            api_url
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