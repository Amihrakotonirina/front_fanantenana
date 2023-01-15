//composition API fa tsy vuex

import { reactive, readonly, ref, computed } from "vue";
import axios from "axios";

const state = reactive({
  /*/essai
  counter:0,
  theme:'grey',
  //fin essai*/

  //Sérieux
  api_url: "",
  matriculeQrCode: "",
  listeMembres: [],
  currentMembre: null,
  detailsCurrentMembre : null,
  listeProgramme: [],
  currentProgramme : null,
  listeCategorieProgramme: [],
  listePresence: [],
  detailsPresence: null,
  todayReunions : []
})

const methods = {
  /*/essai
  decrementerCounter(){
    state.counter--
  },
  incrementerCounter(){
    state.counter++
  },
  setTheme(val){
    state.theme = val
  },
  //fin essai*/


  //Sérieux


  //MEMBRE
  recupAllMembres() {
    //console.log("recupAllMembres")
    axios
      .get(`${state.api_url}/membre_fanantenanas`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(response => {
        //console.log("response = ")
        //console.log(response.data)
        //console.log(response.data['hydra:member'])
        state.listeMembres = response.data//['hydra:member']
        /*console.log("listeMembres = ")
        console.log(state.listeMembres)*/
      })
    .catch(e => console.log(e))
  },

  selectCurrentMembre(membre) {
    state.currentMembre = membre
    console.log(state.currentMembre)
  },

  getDetailsCurrentMembre(id) {
    axios
      .get(`${state.api_url}/membre_fanantenanas/${id}`,
        {
        headers: {
          'Content-Type' : 'application/json'
        }
        })
      .then(response => {
        state.detailsCurrentMembre = response.data//['hydra:member']
        console.log('details current membre = ')
        console.log(state.detailsCurrentMembre)
      })
    .catch(e => console.log(e))
  },

  selectCurrentProgramme(prog) {
    state.currentProgramme = prog;
    console.log(state.currentProgramme)
  },

  //PROGRAMME (Réunion)

  recupAllProgrammes() {
    axios
      .get(`${state.api_url}/reunions`,
    {
      headers: {
          'Content-Type' : 'application/json'
        }
        })
    .then(response => {
        state.listeProgramme = response.data//['hydra:member']
      })
    .catch(e => console.log(e))
  },

  filterProgramme(reunion_id){
    state.listeProgramme.filter((reunion)=>{
            if(reunion.matricule == reunion_id)
            {
              state.selectCurrentProgramme(reunion);
              return reunion;
            }
          })
  },


recupAllCategorieReunion() {
    axios
      .get(`${state.api_url}/categorie_reunions`,
    {
      headers: {
          'Content-Type' : 'application/json'
        }
        })
    .then(resp => {
          state.listeCategorieProgramme = resp.data//["hydra:member"]
      })
    .catch(e => console.log(e))
  },
  

  setMatriculeQrCode(mat) {
    state.matriculeQrCode = mat
  },

  rechercheMatricule(mat){
      store.state.listeMembres.filter((elem)=>{
          if(elem.matricule == mat) return elem.matricule;
      })
  },

  setApiUrl(){
    state.api_url = process.env.VUE_APP_API_URL
  },


  //PRESENCE
  recupAllPresences() {
    axios
      .get(`${state.api_url}/presences`,
    {
      headers: {
          'Content-Type' : 'application/json'
        }
        })
    .then(response => {
      state.listePresence = response.data//['hydra:member']
      })
    .catch(e => console.log(e))
  },

    getDetailsPresence(id) {
    axios
      .get(`${state.api_url}/presences/${id}`,
        {
        headers: {
          'Content-Type' : 'application/json'
        }
        })
      .then(response => {
        state.detailsPresence = response.data//['hydra:member']
      })
    .catch(e => console.log(e))
  },

  recupAllPresencesByProgramme(prog){

  },

  selectCurrentProgramme(prog) {
    state.currentProgramme = prog;
    //console.log(state.currentProgramme)
  },

  getTodayReunions() {
    axios
      .get(`${state.api_url}/today/reunions`,
        {
        headers: {
          'Content-Type' : 'application/json'
        }
        })
      .then(response => {
        state.todayReunions = response.data
      })
    .catch(e => console.log(e))
  }
  
}


const getters = {
  /*calculCarre(){
    return state.counter * state.counter
  }*/
}

export default{
  state : readonly(state),
  methods,
  getters
}