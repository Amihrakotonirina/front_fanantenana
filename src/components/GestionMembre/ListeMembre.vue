<template>
  <div class="container">
    <div class="row filtre-liste mb-4">
      <!--label for="input-rechercher">Rechercher un membre</label-->
      <div class="form-floating col-sm-6">
        <input
          type="search"
          autocomplete="off"
          v-model="texteARechercher"
          name="input-rechercher"
          id="input-rechercher"
          placeholder="Nom, prénom ou matricule..."
          class="form-control form-control-sm"
        />
        <label
          for="check-membre-actif"
          class="col-sm-10 form-label col-form-label col-form-label-sm"
        >
          Rechercher un membre par son prénom
        </label>
      </div>

      <div class="form-check form-switch col-sm-2 mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          id="check-membre-actif"
          name="membre-actif"
        />
        <label
          for="check-membre-actif"
          class="form-check-label form-label col-form-label col-form-label-sm"
        >
          Membre actif</label
        >
      </div>
    </div>
    <!--div class="row">
      <div class="col-md-3" v-for="(membre, index) in store.state.listeMembres" :key="index">
                <div class="">
                    <span v-if="membre.photoProfile">
                        <img class="photo-profile" :src="cheminImage +''+ membre.photoProfile" alt="sary">
                    </span>
                    <span v-if="!membre.photoProfile">
                        <img class="photo-profile" src="images/user.png" alt="sary">
                    </span>
                    {{index +1 }} - {{ membre.matricule }} - {{ membre.nom }} {{ membre.prenom }}
                    <span class="bouttons">
                        <button @click="store.methods.selectCurrentMembre(membre)">Voir la fiche</button>
                    </span>
                </div>               
        </div>
      </div-->

    <hr />

    <div class="row">
      <div class="card mb-3 col-md-6" v-for="(membre, index) in filtrerListeMembre" :key="index">
        <div class="row g-0">
          <div v-if="membre.photoProfile" class="col-md-3 card-boucle">
            <img
              :src="cheminImage + '' + membre.photoProfile"
              alt="sary"
              class="img-fluid rounded photo-profile"
            />
          </div>
          <div v-if="!membre.photoProfile" class="col-md-3 card-boucle">
            <img
              src="images/user.png"
              alt="sary"
              class="img-fluid rounded-start photo-profile"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h6 class="card-title"><strong>{{ membre.nom }} {{ membre.prenom }}</strong></h6>
              <p class="card-text">{{ membre.matricule }}</p>
              <!--p class="card-text">
                <small class="text-muted">Membre Fanantenana</small>
              </p-->
            </div>
            <div>
              <!-- Button trigger modal -->
              <button
                type="button"
                @click="passerIdMembre(membre.id)"
                class="btn btn-success btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-postcard" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4Zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5ZM10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3ZM13 8h-2V6h2v2Z"/>
              </svg>
                Fiche
              </button>
              <button
                class="btn btn-md btn-success btn-sm"
                @click="navigerVersFiche(membre)"
              >
              <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>

                Modifier
              </button>
            </div>
            <!-- Modal -->
            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div
                class="
                  modal-dialog
                  modal-dialog-scrollable
                  modal-dialog-centered
                  modal-lg
                "
              >
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">
                      FICHE MEMBRE
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <!--div v-if="modalAffiche=='affichage'" class="container-affichage"-->
                    <AfficheMembre
                      :idMembre="idMembre"
                      :cheminImage="cheminImage"
                    />
                    <!--/div>
                                    <div v-if="modalAffichee=='modification'" class="container-modif">
                                        <h4>Modification</h4>
                                        modification
                                        <boutton type="boutton"  class="btn btn-success">basculer</boutton>
                                    </div-->
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-success">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-list-check"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"
                        />
                      </svg>
                      Présences
                    </button>
                    <button
                      @click="modalAffiche = 'affichage'"
                      type="button"
                      class="btn btn-success"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-printer"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                        <path
                          d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"
                        />
                      </svg>
                      Imprimer
                    </button>
                    <button
                      type="button"
                      class="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>

                      Modifier
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-x-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                        />
                      </svg>
                      Fermer
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="modal fade"
              id="staticBackdrop2"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel2"
              aria-hidden="true"
            >
              <div
                class="
                  modal-dialog
                  modal-dialog-scrollable
                  modal-dialog-centered
                  modal-lg
                "
              >
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">
                      FICHE MEMBRE
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <FicheMembreModal
                      :idMembre="idMembre"
                      :cheminImage="cheminImage"
                    />
                  </div>
                  <div class="modal-footer">
                    <button
                      class="btn btn-danger"
                      data-bs-target="staticBackdropLabel"
                      data-bs-toggle="modal"
                      data-bs-dismiss="modal"
                    >
                      Back to first
                    </button>
                  </div>
                </div>
              </div> <!-- fin modal 2 -->
            </div> 
          </div>
        </div>
      </div> <!-- fin boucle -->
    </div> <!-- fin div row avant boucle -->
    <hr />
    <div>
      {{ store.state.currentMembre }}
    </div>
  </div>
</template>

<script>
import { inject, computed, ref } from "vue";
import router from "../../router";
import AfficheMembre from "./AfficheMembre.vue";
import FicheMembreModal from "@/components/GestionMembre/FicheMembreModal.vue";

export default {
  setup() {
    const store = inject("store");
    const idMembre = ref(0);
    //const modalAffiche = ref("modification");
    const cheminImage = ref(
      "http://localhost:8000/images/fanantenana/profile/"
    );
    const texteARechercher = ref("");
    const filtrerListeMembre = computed(() => {
      return store.state.listeMembres.filter((membre) => {
        return membre.prenom
          .toLowerCase()
          .includes(texteARechercher.value.toLowerCase());
      });
    });
    const navigerVersFiche = (membre) => {
      console.log("membre dans navigerVersFiche (listeMembre) = ");
      console.log(membre);
      store.methods.selectCurrentMembre(membre);
      console.log("recuperer details membre en cours");
      store.methods.getDetailsCurrentMembre(membre.id);
      router.push({ name: "fiche-membre", params: { id: membre.id } });
    };
    const passerIdMembre = (idM) => {
      console.log(idM);
      idMembre.value = idM;
      store.methods.getDetailsCurrentMembre(idM);
    };
    return {
      store,
      idMembre,
      cheminImage,
      texteARechercher,
      filtrerListeMembre,
      //modalAffiche,
      passerIdMembre,
      navigerVersFiche,
    };
  },
  components: { AfficheMembre, FicheMembreModal },
};
</script>

<style scoped>

.btn {
  margin: 3px;
  min-width: 100px;
}

.card-boucle{
  padding:5px;
  transition: all 0.3s ease-in-out 0s;
}

.card-boucle:hover{
  transform: scale(1.05,1.05);
  transition-duration: 0.5s;
  z-index: 100;
}

.photo-profile {
  max-height:100px;
}

.filtre-liste{
  border: 1px solid rgb(114, 114, 114);
  padding:10px;
  margin:30px 5px;
  border-radius:10px;
}

.modal-lg{
  z-index:99999;
}
</style>