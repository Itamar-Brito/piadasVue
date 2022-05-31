<template>
  <div class="hello">
    <div class="row">
      <div class="col col-lg-12 Success">
        <h2>Piadas MasterHoly </h2>

        <b-icon class="border border-info rounded p-2" icon="file-earmark-plus" font-scale="5"></b-icon>
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
  },created(){
    this.getPiadas()
  }
  ,
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
</style>
