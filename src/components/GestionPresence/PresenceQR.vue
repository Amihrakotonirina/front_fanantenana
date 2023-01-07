<template>
    <div>
        Présence qr
        <button @click="rechercheMatricule(store.state.matriculeQrCode)">click</button>
        <button @click="sauvegarderDonnees">Presence</button>

        <!--scanQrCode/-->

    </div>
</template>

<script>
import { inject, ref } from 'vue'
import axios from 'axios'
//import scanQrCode from '@/components/GestionPresence/ScanQrCode.vue'

export default {
    name:"presenceQr",
    components: {
        //scanQrCode
    },
    setup() {
        const store = inject('store')
        const matricule = ref("")
        const presence = ref({
            "present": true,
            "retard": false,
            "heureEntree": "2022-02-25T16:55:40.383Z",
            "heureSortie": "",
            "note": "essai présence manuelle",
            "membre": "/api/membre_fanantenanas/",
            "reunion": "/api/reunions/1"
        })
         let tempMembre = ref([])

        function rechercheMatricule(mat){
            tempMembre = store.state.listeMembres.filter((elem)=>{
                if(elem.matricule == mat) return elem;
            })
            console.log(tempMembre)
        }

        function sauvegarderDonnees()
        {
            //presence.value.membre.push("/api/membre_fanantenanas/"+ tempMembre[0].id)
            presence.value.membre += tempMembre[0].id
            presence.value.heureEntree = new Date();
            console.log(presence.value)
            axios({
                method:'post',
                url:"http://127.0.0.1:8000/api/presences", 
                data: presence.value,
                config: {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json; charset=UTF-8'
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

        return{
            store,
            matricule,
            tempMembre,
            rechercheMatricule,
            sauvegarderDonnees
        }
    }
}
</script>

<style scoped>

    .buttons button{
        height: 30px;
        width: 100px;
        margin:10px;
        font-size: 20px;
        font-weight: bold;
    }

</style>