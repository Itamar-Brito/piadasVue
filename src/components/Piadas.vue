<template>
  <div class="hello">
    <div class="row">
      <div class="col col-lg-12 Success body">
        <img src="../assets/wolf.png" width="100px" alt="" /><span id="title"
          >Piadas</span
        >
        <hr />

        <AddPiada v-on:piadaSalva="getPiadas()" />
        <b-icon
          id="addButton"
          v-b-modal.modal-add-piada
          class="border border-info rounded p-2 float"
          icon="file-earmark-plus"
          font-scale="3"
        ></b-icon>

        <b-tooltip placement="righttop" target="addButton" triggers="hover">
          Adicionar nova Piada
        </b-tooltip>
      </div>
    </div>
    <Loading v-if="loading" />
    <div class="row">
      <div class="col-lg-4 cards" v-for="piada in piadas" :key="piada.id">
        <PiadasCardVue :piada="piada" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PiadasCardVue from "./PiadasCard.vue";
import Loading from "./Loading.vue";
import AddPiada from "./AddPiada.vue";
export default {
  components: {
    PiadasCardVue,
    Loading,
    AddPiada,
  },
  name: "Piadas",
  data() {
    return {
      loading: true,
      piadas: {},
      newPiada: {
        title: null,
        joke: null,
        category: null
      },
    };
  },

  created() {
    this.getPiadas();
    console.log()
  },
  methods: {
    getPiadas() {
      axios
        .get(this.$piadasHost)
        .then((res) => {
          this.loading = true;
          this.piadas = res.data;
          this.loading = false;
          console.log(this.piadas)
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
