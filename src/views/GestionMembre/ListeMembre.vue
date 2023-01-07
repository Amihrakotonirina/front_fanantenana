<template>
  <h1>GESTION DES MEMBRES FANANTENANA</h1>
  <button class="btn btn-success" @click="$router.push('fiche-membre')">Ajouter un membre</button>
  <ListeMembreFANANTENANA/>
</template>

<script>
import ListeMembreFANANTENANA from "../../components/GestionMembre/ListeMembre.vue"

export default {
  name: 'ListeMembre',
  components: {
    ListeMembreFANANTENANA
  }
}
</script>

<style>

</style>