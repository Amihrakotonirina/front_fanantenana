<template>
  <div class="hello">
    <div class="container">
      <div v-if="store.state.todayReunions.length == 1">
        <h4>misy 1</h4>
      </div>
      <div v-if="store.state.todayReunions.length > 1">
          <h3>Veuillez sélectionner un programme : </h3>
        <div class="mb-3" v-for="reunion in store.state.todayReunions">
          {{ reunion.commentaire }} : Heure : de {{ moment(reunion.heureDebut).format("hh:mm") }} à {{ moment(reunion.heureFin).format("hh:mm") }} - {{ reunion.ouverte ? 'Ouverte' : 'Fermé' }} - Catégorie : {{ reunion.categorie_reunion.categorie }}
        </div>
      </div>
      <div v-if="!store.state.todayReunions">
        <h4>Créer un nouveau programme</h4>
      </div>
    </div>
    <div class="center stream">
      <!--qr-stream @decode="onDecode" class="mb">
        <div style="color: blue;" class="frame"></div>
      </qr-stream-->
    </div>
    <div class="result">
      Result: {{data}}
      <button @click="sauvegarderDonnees">Presence</button>
      <input type="integer" v-model="matricule" name="fanantenana_id">
      <button @click="sauvegarderDonnees">Presence manuelle</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, ref, inject, onMounted } from 'vue';
import { QrStream } from 'vue3-qr-reader';
import axios from 'axios';
import moment from "moment"
import localization from 'moment/locale/fr'


export default defineComponent({
  name: 'scanQrCode',
  components: {
    QrStream
  },
  setup() {
    const api_url = ref("")
    const currentReunion = ref("")
    const store = inject('store')
    const state = reactive({
      data: null
    })

    const matricule = ref("")

        const presence = ref({
            "present": true,
            "retard": false,
            "heureEntree": null,
            "heureSortie": null,
            "note": "présence",
            //"membre_fanantenana": "/api/v1/membre_fanantenanas/",
            //"membre_fanantenana": null,
            //"reunion": "/api/v1/reunions/"
            //"reunion": null
        })

    let tempMembre = ref([])

    function onDecode(data) {
      state.data = data
      matricule.value = store.methods.rechercheMatricule(data)
      //store.methods.setMatriculeQrCode(data)
      sauvegarderDonnees()
    }

    onMounted(() => {  
      api_url.value = process.env.VUE_APP_API_URL
      store.methods.getTodayReunions()
      if(store.state.todayReunions){
        if(store.state.todayReunions.length == 1)
        {
          currentReunion.value = store.state.todayReunions[0]
          console.log("Une réunion existe")
        }
        else
        {
          console.log("Plusieurs réunions existent")
          console.log(store.state.todayReunions[0])
          //afficher selection de programme
        }
      }
      else
      {
          console.log("Pas de réunion")
        //Afficher message : "Il n'y a pas de programme enregistré pour la date d'aujourdhui, veuillez créer un pour commencer."
      }

      //SI today_reunion existe et que la taille = 1; afficher page de présence
      //SINON si today_reunion existe et que la taille sup à 1; afficher sélection de programme
      //SINON Afficher message : "Il n'y a pas de programme enregistré pour la date d'aujourdhui, veuillez créer un pour commencer."
    })

    function sauvegarderDonnees()
    {



      //presence.value.membre_fanantenana = "/api/v1/membre_fanantenanas/"+ 7 //tempMembre[0].id
      //presence.value.reunion = "/api/v1/reunions/"+ 3 //store.state.currentProgramme

      //presence.value.heureEntree = hour
      //presence.value.heureSortie = hour

      axios({
          method:'post',
          url:`${api_url.value}/presences/new/${tempMembre.value[0].id}/${currentReunion.value.id}`, 
          data: presence.value,
          config: {
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json; charset=utf-8'
              }
          }
      })
      .then(() => {
          console.log("données enregistrées");
          
      })
      .catch((err) => {
          console.warn('Une erreur s\'est produite lors de l\'enregistrement. ', err);
      });
    }
        
    return {
      ...toRefs(state),
      onDecode,
      store,
      matricule,
      tempMembre,
      sauvegarderDonnees,
      api_url,
      currentReunion,
      moment
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.stream {
  max-height: 500px;
  max-width: 500px;
  margin: auto;
}
.frame {
  border-style: solid;
  border-width: 2px;
  border-color: red;
  height: 200px;
  width: 200px;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  margin: auto;
}
</style>
