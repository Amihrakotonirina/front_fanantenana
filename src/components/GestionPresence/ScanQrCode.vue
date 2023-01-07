<template>
  <div class="hello">
    <div class="center stream">
      <qr-stream @decode="onDecode" class="mb">
        <div style="color: red;" class="frame"></div>
      </qr-stream>
    </div>
    <div class="result">
      Result: {{data}}
      <button @click="sauvegarderDonnees">Presence</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, ref, inject } from 'vue';
import { QrStream } from 'vue3-qr-reader';
import axios from 'axios';


export default defineComponent({
  name: 'scanQrCode',
  components: {
    QrStream
  },
  setup() {
    const store = inject('store')
    const state = reactive({
      data: null
    })

    const matricule = ref("")

        const presence = ref({
            "present": true,
            "retard": false,
            "heureEntree": "2022-02-25T16:55:40.383Z",
            "heureSortie": "2022-02-25T16:55:40.383Z",
            "note": "essai présence manuelle",
            "membre": "/api/membre_fanantenanas/",
            "reunion": "/api/reunions/2"
        })

    let tempMembre = ref([])

    function onDecode(data) {
      state.data = data
      store.methods.setMatriculeQrCode(data)
      rechercheMatricule(data)
      console.log(store.state.matriculeQrCode)
      sauvegarderDonnees()
    }

        function rechercheMatricule(mat){
            tempMembre = store.state.listeMembres.filter((elem)=>{
                if(elem.matricule == mat) return elem;
            })
            console.log(tempMembre)
        }

       function sauvegarderDonnees()
        {
            //presence.value.membre.push("/api/membre_fanantenanas/"+ tempMembre[0].id)
            presence.value.membre = "/api/membre_fanantenanas/" + tempMembre[0].id
            console.log(presence.value)
            axios({
                method:'post',
                url:"http://127.0.0.1:8000/api/presences", 
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
      rechercheMatricule,
      sauvegarderDonnees
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
