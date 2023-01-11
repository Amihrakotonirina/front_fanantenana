<template>
  <nav id="nav" class="navbar sticky-top navbar-expand-md navbar-light bg-light">
    <div class="container-fluid align-items-center">
      <router-link to="/">
        <img
          class="logo-sf float-start navbar-brand"
          src="@/assets/logo_sf.png"
          alt=""
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              Accueil
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Membres
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <router-link
                  class="nav-link active"
                  aria-current="page"
                  to="/fiche-membre"
                >
                  Nouveau membre
                </router-link>
              </li>
              <li>
                <router-link
                  class="nav-link"
                  aria-current="page"
                  to="/liste-membre"
                >
                  Tous les membres
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/programme">
              Programme
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/presence">
              Présences
            </router-link>
          </li>
        </ul>
      </div>
      <span class="date-heure float-end"
        >Date : {{ moment(todaysDate).format("dddd DD MMMM YYYY") }}</span
      >
    </div>
  </nav>
  <!--div id="nav"-->
  <!--router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | -->
  <!--router-link to="/">
      <img class="logo-sf float-start" src="@/assets/logo_sf.png" alt="" />
    </router-link>
    <router-link to="/liste-membre"> Membres </router-link> |
    <router-link to="/programme"> Programme </router-link> |
    <router-link to="/presence"> Présences </router-link>
    <span class="date-heure"
      >Date : {{ moment(todaysDate).format("dddd DD MMMM YYYY") }}</span
    >
  </div-->
  <router-view />

  <nav class="navbar fixed-bottom navbar-dark bg-dark">
  <div class="container-fluid">
    <img
          class="logo-sf-footer float-start navbar-brand"
          src="@/assets/logo_sf.png"
          alt=""
        />
  </div>
</nav>
</template>

<script>
import store from "@/store";
import moment from "moment";
import localization from "moment/locale/fr";
import { provide, onMounted } from "vue";

export default {
  setup() {
    provide("store", store);

    let todaysDate = new Date();

    onMounted(() => {
      console.log("mounted");
      store.methods.setApiUrl();
      store.methods.recupAllMembres();
      store.methods.recupAllCategorieReunion();
      //this.moment = moment;
    });

    return {
      store,
      moment,
      todaysDate,
    };
  },
};
</script>

<style>
.logo-sf {
  max-width: 60px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #a3ce9a;
  margin-bottom: 75px;
}

#nav {
  margin-bottom: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav span.date-heure {
  font-weight: lighter;
  font-size: small;
  float: right;
  padding: 3px 10px;
  border-radius: 5px;
  background-color: darkslategray;
  color: aliceblue;
}
.logo-sf-footer{
  display: block;
  background-color: fff;
  max-width: 50px;
}
</style>