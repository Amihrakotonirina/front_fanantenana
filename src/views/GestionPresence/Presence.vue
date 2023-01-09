<template>
  <h1>PRESENCE FANANTENANA</h1>
  <h3>Présence via Qr-code scan</h3>
  <!--PresenceQR/-->
  <Listepresence/>
  <ScanQrCode/>

  <h3>Présence manuelle</h3>
</template>

<script>
import PresenceQR from "@/components/GestionPresence/PresenceQR.vue"
//import ScanQrCode from "../../components/GestionPresence/ScanQrCode.vue"
import Listepresence from "../../components/GestionPresence/Listepresence.vue"

export default {
  name: 'Presence',
  components: {
    PresenceQR,
    //ScanQrCode,
    Listepresence
}
}
</script>

<style>

</style>