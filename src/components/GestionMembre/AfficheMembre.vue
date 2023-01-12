<template>
    <h6>FIANGONANA PROTESTANTA VAOVAO ETO MADAGASIKARA</h6>
    <h4><strong> SAMPANA FANANTENANA </strong></h4>
    <h5>FOIBE TANINANANDRANO</h5>
    <hr>
    
<div class="row text-start" v-if="store.state.detailsCurrentMembre">
    <!--div class="row entete"-->
        <div v-if="store.state.detailsCurrentMembre.photoProfile" class="col-sm-2">
            <img :src="cheminImage +''+ store.state.detailsCurrentMembre.photoProfile" alt="sary" class="img-fluid image-profile rounded img-thumbnail">
        </div>
        <div v-if="!store.state.detailsCurrentMembre.photoProfile" class="col-sm-2">
            <img src="images/user.png" alt="sary" class="img-fluid image-profile rounded">
        </div>
        <div class="col-sm-10">
            <div class="row info-base">
                <div class="col-sm-4 texte-label">
                    Nom :
                </div>
                <div class="col-sm-8">
                    {{store.state.detailsCurrentMembre.nom}}
                </div>
                <div class="col-sm-4 texte-label">
                    Prénom(s) :
                </div>
                <div class="col-sm-8">
                    {{store.state.detailsCurrentMembre.prenom}}
                </div>
                <div class="col-sm-4 texte-label">
                    Matricule :
                </div>
                <div class="col-sm-8">
                    {{store.state.detailsCurrentMembre.matricule}}
                </div>
                <div class="col-sm-4 texte-label">
                    Membre actif :
                </div>
                <div class="col-sm-8">
                    {{store.state.detailsCurrentMembre.membre_actif ? "OUI" : "NON"}}
                </div>
                <i class="bi-alarm" style="font-size: 2rem; color: cornflowerblue;"></i>
            <!--/div-->
        <!--/div>         
    </div>
    <div class="row corps"-->
        <div class="col-sm-4 texte-label">
            Sexe :
        </div>
        <div class="col-sm-8">
            {{store.state.detailsCurrentMembre.sexe=='F' ? "Féminin" : "Masculin"}}
        </div>
        <div class="col-sm-4 texte-label">
            Date de naissance :
        </div>
        <div class="col-sm-8">
            {{moment(store.state.detailsCurrentMembre.date_naissance).format("DD/MM/YYYY") }}
        </div>
        <div class="col-sm-4 texte-label">
            Adresse :
        </div>
        <div class="col-sm-8">
            {{store.state.detailsCurrentMembre.adresse}}
        </div>
        <div class="col-sm-4 texte-label">
            Téléphone :
        </div>
        <div class="col-sm-8">
            {{store.state.detailsCurrentMembre.telephone}}
        </div>
        <div v-if="store.state.detailsCurrentMembre.compte_facebook" class="col-sm-4 texte-label">
            Compte Facebook :
        </div>
        <div v-if="store.state.detailsCurrentMembre.compte_facebook" class="col-sm-8">
            {{store.state.detailsCurrentMembre.compte_facebook}}
        </div>
        <div v-if="store.state.detailsCurrentMembre.telephone_parent" class="col-sm-4 texte-label">
            Téléphone parent :
        </div>
        <div v-if="store.state.detailsCurrentMembre.telephone_parent" class="col-sm-8">
            {{store.state.detailsCurrentMembre.telephone_parent}}
        </div>
        <div class="col-sm-4 texte-label">
            Membre depuis :
        </div>
        <div class="col-sm-8">
            {{store.state.detailsCurrentMembre.annee_adhesion}}
        </div>

        <div v-if="store.state.detailsCurrentMembre.profession" class="col-sm-4 texte-label">
            Profession :
        </div>
        <div v-if="store.state.detailsCurrentMembre.profession" class="col-sm-8">
            {{store.state.detailsCurrentMembre.profession}}
        </div>
        <div v-if="store.state.detailsCurrentMembre.etude" class="col-sm-4 texte-label">
            Etude :
        </div>
        <div v-if="store.state.detailsCurrentMembre.etude" class="col-sm-8">
            {{store.state.detailsCurrentMembre.etude}}
        </div>

        <div class="col-sm-4 texte-label">
            Numéro FPVM :
        </div>
        <div class="col-sm-8">
            {{store.state.detailsCurrentMembre.numero_fpvm}}
        </div>
        <div class="col-sm-4 texte-label">
            Statut FPVM :
        </div>
        <div class="col-sm-8">
            {{store.state.detailsCurrentMembre.status_fpvm}}
        </div>


        <!-- { { store.state.detailsCurrentMembre } } -->
    </div>
    </div> <!-- fin info-base -->
</div>
</template>

<script>
import { inject } from '@vue/runtime-core';
import moment from "moment"
import localization from 'moment/locale/fr'

export default {
    name: 'AfficheMembre',
    props:['idMembre', 'cheminImage'],
    setup(props){
        const store = inject("store");
        //store.methods.getDetailsCurrentMembre(props.idMembre)
        return{
            store,
            moment
        }
    }
}
</script>

<style scoped>
    .image-profile{
         max-width: 100px;
         margin: 8px 25px;
    }
    .info-base{
        margin: 20px
    }
    .texte-label{
        font-weight: bold;
    }

    .corps{
        margin:25px;
    }

</style>