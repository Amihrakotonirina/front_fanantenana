<template>
    <div>
        <form @submit.prevent="submitForm">
            <label for="date-reunion">Date : </label>
            <input v-model="currentReunion.dateReunion" type="date" id="date-reunion" >

            <label for="heure-debut">A partir de : </label>
            <input v-model="currentReunion.heureDebut" type="time" id="heure-debut">

            <label for="heure-fin">jusqu'à : </label>
            <input v-model="currentReunion.heureFin" type="time" id="heure-fin">

            <label for="categorie-reunion">Catégorie : </label>
            <select v-model="lienCategorie" name="categorieReunion" id="categorie-reunion">
                <option v-for="categorie in store.state.listeCategorieProgramme" :key="categorie.id" :value="categorie.id" >{{ categorie.categorie }}</option>
            </select>

            <label for="commentaire">Commentaire :</label>
            <input v-model="currentReunion.commentaire" type="text" id="commentaire" placeholder="Note ou commentaire">
            
            <button type="submit" class="btn btn-success">Enregistrer</button>
        </form>
    <hr>
    <br>
    </div>

    <br>
    <h2>Programme 2023 </h2> 
    <!--div class="liste" v-for="programme in store.state.listeProgramme" :key="programme.id">
        <div class="element">
            {{ programme.categorie.categorie }} : {{ moment(programme.dateReunion).format("dddd DD MMMM YYYY") }} - de {{ moment(programme.heureDebut).format("hh:mm") }} à {{ moment(programme.heureFin).format("hh:mm") }}
            <button @click="store.methods.selectCurrentProgramme(programme)" class="btn btn-success"> Détails </button>
        </div>
    </div-->

    <div class="tableau">
        <table class="table table-light table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date - heure</th>
                    <th scope="col">Type</th>
                    <th scope="col">Commentaire</th>
                    <th scope="col">Statut</th>
                    <th scope="col">Données brutes</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody v-for="programme in store.state.listeProgramme" :key="programme.id">
                <tr>
                    <th scope="row">{{ programme.id }}</th>
                    <td>{{ moment(programme.dateReunion).format("dddd DD MMMM YYYY") }} - de {{ moment(programme.heureDebut).format("hh:mm") }} à {{ moment(programme.heureFin).format("hh:mm") }}</td>
                    <td>{{ programme.categorie_reunion.categorie }}</td>
                    <td>{{ programme.commentaire }}</td>
                    <td>{{ programme.ouverte ? "Ouverte" : "Terminé" }}</td>
                    <!--td>{ {programme.presences}}</td-->
                    <td>{ {programme.presences.size}}</td>
                    <td>
                        <button class="btn btn-sm btn-success">Détails</button>
                        <button class="btn btn-sm btn-danger">Supprimer</button>
                            <!-- Button trigger modal -->
                        <button
                            type="button"
                            class="btn btn-success btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-postcard" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4Zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5ZM10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3ZM13 8h-2V6h2v2Z"/>
                        </svg>
                            Fiche
                        </button>
                    </td>
                </tr>
            </tbody>
            </table>
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
                      DETAILS PRESENCE
                      
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
                    <DetailsPresence />
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


</template>

<script>
import { inject, ref ,onMounted} from 'vue'
import axios from 'axios'
import moment from "moment"
import localization from 'moment/locale/fr'
import DetailsPresence from '../GestionPresence/DetailsPresence.vue'

export default {
    setup() {
        const store = inject("store");
        const lienCategorie = ref("");
        const api_url = ref("");
        const output = ref(null);
        const currentReunion = ref({
            "dateReunion": "",
            "heureDebut": "",
            "heureFin": "",
            "commentaire": "",
            "categorie": "/api/v1/categorie_reunions/",
            "ouverte": true
        });

        function submitForm() {
            currentReunion.value.categorie = currentReunion.value.categorie + "" + lienCategorie.value;
            axios({
                method: "post",
                url: `${api_url.value}/reunions`,
                data: currentReunion.value,
                config: {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json; charset=UTF-8"
                    }
                }
            })
                .then(() => {
                console.log("données enregistrées");
                store.methods.recupAllProgrammes();
            })
                .catch((err) => {
                console.warn("Une erreur s'est produite lors de l'enregistrement. ", err.message);
            });
        }

        onMounted(() => {  
          api_url.value = process.env.VUE_APP_API_URL
      })

        return {
            store,
            currentReunion,
            lienCategorie,
            moment,
            output,
            submitForm,
            api_url
        };
    },
    components: { DetailsPresence }
}
</script>

<style scoped>

    button{
        min-width: 100px;
        margin:3px;
    }
    .tableau{
        background-color: #fff;
        margin: 50px;
        border-radius: 10px;
        padding-bottom: 5px;
    }

</style>