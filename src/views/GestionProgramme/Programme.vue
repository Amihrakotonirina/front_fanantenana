<template>
  <h1>PROGRAMME FANANTENANA</h1>
  <ProgrammeFANANTENANA/>

  
</template>

<script>
import ProgrammeFANANTENANA from "../../components/GestionProgramme/ProgrammeFANANTENANA.vue"
import { onMounted } from "vue"
import store from "../../store"

export default {
  name: 'Programme',
  components: {
        ProgrammeFANANTENANA
    },

    setup(){
        
         onMounted(() => {
            store.methods.recupAllCategorieReunion()
            store.methods.recupAllProgrammes()
            
        })

        return{

        }
    }
}
</script>

<style>

</style>