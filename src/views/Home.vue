<template>
  <div class="home container">
    <img alt="logo fanantenana" src="../assets/logo_sf.png" />
    <br />
    <hr />
    <router-link to="/liste-membre">
      <button
        type="button"
        class="btn btn-lg btn-success bouton-menu"
      >
        Gestion des <br />
        Membres
      </button>
    </router-link>
    <router-link
      to="/programme">
      <button
        type="button"
        class="btn btn-lg btn-success bouton-menu"
      >
      Programme de <br />
      l'année
      </button>
    </router-link>
    <router-link
      to="/presence">
      <button
        
        type="button"
        class="btn btn-lg btn-success bouton-menu"
      >
        Gestion des <br />
        Présences
      </button>
    </router-link>
    <router-link
      to="/presence">
      <button
        
        type="button"
        class="btn btn-lg btn-success bouton-menu"
      >
        Gestion des <br />
        Billets
      </button>
    </router-link>
    <router-link
      to="/presence">
      <button
        
        type="button"
        class="btn btn-lg btn-success bouton-menu"
      >
        Gestion des <br />
        groupes
      </button>
    </router-link>
    <!--scanQrCode/-->
  </div>
  <router-view />
</template>

<script>
// @ is an alias to /src
//import scanQrCode from '@/components/ScanQrCode.vue'

export default {
  name: "Home",
  components: {
    //scanQrCode,
  },
};
</script>

<style scoped>
.bouton-menu {
  margin: 15px;
  height: 150px;
  width: 150px;
}
</style>
