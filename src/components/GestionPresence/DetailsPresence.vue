<template>
    <!--div>
        {{presence.membre.nom}} {{presence.membre.prenom}} ({{presence.reunion.categorie.categorie}} -  {{presence.reunion.categorie.categorie}})
    </div-->
    <div>
        bonjour details présence :
        <br>
        {{ presence }}
    </div>
</template>

<script>
import { inject, computed, ref } from 'vue'
import { onMounted } from "vue"

export default {
    setup() {
        const store = inject('store')
        const presence = ref(null);


        onMounted(() => {
            store.methods.getDetailsPresence(2)
            presence.value = store.state.detailsPresence
            console.log("presence = ")
            console.log(presence.value)
            
        })

        return{
            store,
            presence
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