<template>
  <div class="hello">
    <div class="row">
      <div class="col col-lg-12 Success body">
        <img src="../assets/wolf.png" width="100px" alt=""><span id="title">Piadas</span>
        <hr />
        <b-modal id="modal-1" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
        </b-modal>

        <b-icon
          id="addButton"
          v-b-modal.modal-1
          class="border border-info rounded p-2 float"
          icon="file-earmark-plus"
          font-scale="3"
        ></b-icon>

        <b-tooltip placement="righttop" target="addButton" triggers="hover">
          Adicionar nova Piada
        </b-tooltip>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Piadas",
  data() {
    return {
      data: "",
    };
  },
  created() {
    this.getPiadas();
  },
  methods: {
    getPiadas() {
      axios
        .get("http://piada.atwebpages.com/php_action/api/get-piadas.php")
        .then((res) => {
          console.log(res.data);
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
  margin-left: 10px;
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
</style>
