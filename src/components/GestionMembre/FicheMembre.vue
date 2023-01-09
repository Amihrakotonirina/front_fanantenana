<template>
    <!--form v-if="modification" @submit.prevent="submitForm"-->
    <form @submit.prevent="submitForm">
        <div class="row mb-3">
                <div class="form-floating col-sm-2">
                    <input v-model="newMembre.matricule" type="text" class="form-control form-control-sm" name="input-matricule" id="matricule" placeholder="Matricule">
                    <label for="matricule" class="col-sm-10 form-label col-form-label col-form-label-sm"> Matricule : </label>
                </div>      
            <div class="form-floating col-sm-5">
                <input v-model="newMembre.nom" type="text" class="form-control form-control-sm" name="input-nom" id="nom" placeholder="Nom">
                <label for="nom" class="col-sm-3 form-label col-form-label col-form-label-sm"> Nom : </label>
            </div>
            <div class="form-floating col-sm-5">
                <input v-model="newMembre.prenom" type="text" class="form-control form-control-sm" name="input-prenom" id="prenom" placeholder="Prénoms">
                <label for="prenom" class="col-sm-3 form-label col-form-label col-form-label-sm"> Prénoms : </label>
            </div>
        </div> 

        <div class="row mb-3">
            <div class="form-floating col-sm-2"> 
                <select v-model="newMembre.sexe" class="form-select form-control-sm" aria-label="Floating label select" name="select-sexe" id="sexe">
                    <option value="M" selected>Masculin</option>
                    <option value="F">Féminin</option>
                </select>
                <label for="sexe" class="col-sm-12 form-label col-form-label col-form-label-sm">Sexe : </label>
            </div>
            <div class="form-floating col-sm-2"> 
                <input v-model="newMembre.dateNaissance" class="form-control form-control-sm" type="date" id="date-naissance" placeholder="Date de naissance">
                <label for="date-naissance" class="col-sm-12 form-label col-form-label col-form-label-sm">Date de naissance : </label>
            </div>
            <div class="form-floating col-sm-3"> 
                <input v-model="newMembre.adresse" class="form-control form-control-sm" type="text" id="adresse" name="input-adresse" placeholder="Adresse">
                <label for="adresse" class="col-sm-6 form-label col-form-label col-form-label-sm">Adresse : </label>
            </div>
            <div class="form-floating col-sm-2 mb-3"> 
                <input v-model="newMembre.telephone" class="form-control form-control-sm" type="text" id="telephone" name="input-telephone" placeholder="Téléphone">
                <label for="telephone" class="col-sm-8 form-label col-form-label col-form-label-sm">Téléphone : </label>
            </div>
            <div class="form-floating col-sm-3 mb-3"> 
                <input v-model="newMembre.telephoneParent" class="form-control form-control-sm" type="text" id="telephone-parent" name="input-telephone-parent" placeholder="Téléphone parent">
                <label for="telephone-parent" class="col-sm-8 form-label col-form-label col-form-label-sm">Téléphone parent : </label>
            </div>
        </div>

        
        <div class="row mb-3">
            <div class="form-floating col-sm-3 mb-3"> 
                <input v-model="newMembre.compteFb"  class="form-control form-control-sm" type="text" id="don" name="input-compte-fb" placeholder="Don">
                <label for="don" class="col-sm-8 form-label col-form-label col-form-label-sm">Compte Facebook : </label>
            </div>
        
            <div class="form-floating col-sm-3 mb-3"> 
                <input v-model="newMembre.don" class="form-control form-control-sm" type="text" id="don" name="input-don" placeholder="Don">
                <label for="don" class="col-sm-3 form-label col-form-label col-form-label-sm">Don : </label>
            </div>
            
            <div class="form-floating col-sm-3 mb-3"> 
                <input v-model="newMembre.profession" class="form-control form-control-sm" type="text" id="profession" name="input-profession" placeholder="Profession">
                <label for="profession" class="col-sm-6 form-label col-form-label col-form-label-sm">Profession : </label>
            </div>
            <div class="form-floating col-sm-3 mb-3"> 
                <input v-model="newMembre.etude" class="form-control form-control-sm" type="text" id="etude" name="input-etude" placeholder="Etude">
                <label for="etude" class="col-sm-6 form-label col-form-label col-form-label-sm">Etude : </label>
            </div>
        </div>
        <div class="row mb-3">   
            <div class="form-floating col-sm-2 mb-3"> 
                <input v-model="newMembre.anneeAdhesion" class="form-control form-control-sm" type="numerique" id="annee-adhesion" name="input-annee-adhesion">
                <label for="annee-adhesion" class="col-sm-12 form-label col-form-label col-form-label-sm">Année d'adhesion : </label>
            </div>

            <div class="form-floating col-sm-2 mb-3"> 
                <input v-model="newMembre.numeroFPVM" class="form-control form-control-sm" type="number" id="numero-fpvm" name="input-numero-fpvm">
                <label for="numero-fpvm" class="col-sm-12 form-label col-form-label col-form-label-sm">Numéro FPVM : </label>
            </div>

            <div class="form-floating col-sm-3 mb-3"> 
                <select v-model="newMembre.statutFPVM" class="form-select form-control form-control-sm" name="select-statut-fpvm" id="statut-fpvm">
                    <option value="Mpiaramivavaka">Mpiaramivavaka</option>
                    <option value="Mpandray">Mpandray</option>
                    <option value="Mpiomana">Mpiomana</option>
                    <option value="Mpiandry">Mpiandry</option>
                </select>
                <label for="statut-fpvm" class="col-sm-12 form-label col-form-label col-form-label-sm">Statut FPVM : </label>
            </div>
            
            <div class="form-check form-switch col-sm-2 mb-3"> 
                <label for="check-membre-actif" class="form-check-label"> Membre actif</label>
                <input v-model="newMembre.membreActif" class="form-check-input" type="checkbox" id="check-membre-actif" name="membre-actif">
            </div>
        
            <div class="form-floating col-sm-3 mb-3">
                <button class="btn btn-lg btn-primary" type="submit">Enregistrer</button>   
            </div>
        </div>
    </form>
    <div>
        {{ store.state.detailsCurrentMembre }}
    </div>
    
  
</template>

<script>
import { inject, ref, onMounted, onBeforeMount } from 'vue'
import axios from 'axios'
import router from "@/router";

export default {
    setup(){
        const store = inject('store')
        const modification = ref(false)
        const tempMembre = ref(null)
        const newMembre = ref({
            "matricule": "",
            "nom": "",
            "prenom": "",
            "sexe": "",
            "dateNaissance": "",
            "adresse": "",
            "telephone": "",
            "photoProfile": "",
            "telephoneParent": "",
            "anneeAdhesion": 2022,
            "compteFb":"",
            "don": "",
            "profession": "",
            "etude": "",
            "numeroFPVM": 0,
            "statutFPVM": "Mpiaramivavaka",
            "membreActif": true,
        })

        function submitForm(){
            axios({
                method:'post',
                url:"http://127.0.0.1:3000/api/v1/membre_fanantenanas", 
                data:newMembre.value,
                config: {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json; charset=utf-8'
                    }
                }
            })
            .then(() => {
                console.log("données enregistrées");
                store.methods.recupAllMembres()
            })
            .catch((err) => {
                console.warn('Une erreur s\'est produite lors de l\'enregistrement. ', err);
            });
            
        }
        
        onMounted(() => {  
          api_url.value = process.env.VUE_APP_API_URL
        })
        
      /*  onMounted(() => {
            let routerValue = parseInt(router.currentRoute.value.params.id)*1
            newMembre.value = store.state.listeMembres.filter((membre)=>{
                return (membre.id == routerValue)
            })

            if (newMembre.value[0].matricule == "" || newMembre.value[0].matricule == null) 
               {
                   console.log(newMembre.value[0].matricule)
                    modification.value = false
               }
               else
               {
                   console.log(newMembre.value.matricule)
                   modification.value = true
               }
        
            console.log(modification.value)
            console.log('newMembre = ')
            console.log(newMembre.value)


        })
*/

        onBeforeMount(() => {
            let routerValue = parseInt(router.currentRoute.value.params.id)*1
            console.log('router value = ')
            console.log(routerValue)
            let val = store.methods.getDetailsCurrentMembre(routerValue)
            console.log('val = ')
            console.log(val)
           // if(store.state.currentMembre && routerValue == store.state.currentMembre.id)
           
            if(store.state.detailsCurrentMembre && routerValue == store.state.detailsCurrentMembre.id)
            {
                console.log('anaty if')
                modification.value = true
                //newMembre.value = store.state.currentMembre
                newMembre.value = store.state.detailsCurrentMembre
            }
            console.log('(dans onMounted FicheMembre) : details current membre = ')
            console.log(store.state.detailsCurrentMembre)
             console.log(modification.value)
        })
        
        return{
            store,
            newMembre,
            modification,
            tempMembre,
            submitForm,
            api_url
        }
        
    }
}
</script>

<style>

</style>