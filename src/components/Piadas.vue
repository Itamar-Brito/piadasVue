<template>
  <div class="hello">
    <div class="row">
      <div class="col col-lg-12 Success body">
        <img src="../assets/wolf.png" width="100px" alt="" /><span id="title"
          >Piadas</span
        >
        <hr />

        <AddPiada v-on:piadaSalva="getPiadas()" ref="modalAddPiada"/>
        <b-icon
          id="addButton"
          class="border border-info rounded p-2 float"
          icon="file-earmark-plus"
          font-scale="3"
          v-on:click="$refs.modalAddPiada.showModal()"
        ></b-icon>

        <b-tooltip placement="righttop" target="addButton" triggers="hover">
          Adicionar nova Piada
        </b-tooltip>
      </div>
    </div>
    <Loading v-if="loading" />
    <div class="row">
      <div class="col-lg-4 cards" v-for="piada in piadas" :key="piada.id">
        <PiadasCardVue :piada="piada" v-on:editJoke="editJoke($event)" v-on:piadaDeletada="alertShow($event)" />
      </div>
    </div>
    <b-alert
      v-model="alert.showTopAlert"
      class="position-fixed fixed-top m-0 rounded-0"
      style="z-index: 2000"
      :variant=alert.variant
      dismissible
    >
      {{ alert.alertMessage }}
    </b-alert>
    <PassModal/>
  </div>
</template>

<script>
import axios from "axios";
import PiadasCardVue from "./PiadasCard.vue";
import Loading from "./Loading.vue";
import AddPiada from "./AddPiada.vue";
import PassModal from "./PassModal.vue"

export default {
  components: {
    PiadasCardVue,
    Loading,
    AddPiada,
    PassModal
  },
  name: "Piadas",
  data() {
    return {
      loading: true,
      piadas: {},
      alert: {
        showTopAlert:false,
        alertMessage:'',
        variant:"success"
      },
      newPiada: {
        title: null,
        joke: null,
        category: null
      },
    };
  },

  created() {
    this.getPiadas();

  },
  methods: {
    editJoke($event){
      this.$refs.modalAddPiada.editJoke($event)
    },
    alertShow($event){
      this.alert = $event
      this.getPiadas()
    },
    getPiadas() {
      axios
        .get(this.$piadasHost)
        .then((res) => {
          this.loading = true;
          this.piadas = res.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  background-color: rgb(207, 207, 207);
}
.float {
  float: left;
  margin-left: 25px;
  margin-bottom: 5px;
  margin-top: -6px;
  background-color: rgb(145, 145, 145);
}
#title {
  font-family: "Arial Black", Gadget, sans-serif;
  font-size: 39px;
  letter-spacing: -5px;
  vertical-align: -8px;
  text-shadow: 2px 2px #9a8ffc;
  word-spacing: 0.4px;
  color: #737373;
  font-weight: 400;
  text-decoration: none;
  font-style: normal;
  font-variant: small-caps;
  text-transform: none;
}

.cards {
  padding-top: 10px;
}
</style>
