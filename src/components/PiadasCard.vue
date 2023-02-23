<template>
<div>
 <b-card v-bind:title="title" tag="article" style="max-width: 100rem" class="">
    <b-card-text>
      {{ content }}
    </b-card-text>

    <b-button @click="deletePiada()" variant="outline-secondary"
      ><b-icon icon="trash"
    /></b-button>
    <b-button @click="emitEdition()" variant="outline-secondary"
      ><b-icon icon="pencil"
    /></b-button>
  </b-card>

</div>

</template>

<script>
import axios from "axios";
export default {
  name: "PiadasCard",
  data() {
    return {
      id: this.piada.id ? this.piada.id : null,
      title: this.piada.title ? this.piada.title : null,
      content: this.piada.joke
        ? this.piada.joke
        : "Some quick example text to build on the card title and make up the bulk of the card's content.",
      form: {
        id: this.piada.id,
        token: "zJdDauhxKlsh629024971ee86",
      },
    };
  },
  props: {
    piada: null,
  },
  methods: {
    emitEdition(){
      this.$emit("editJoke",this.piada.id);
    },
    deletePiada() {
      axios
        .delete(this.$piadasHost+'/'+this.piada.id+'?pass="dogdog20"')
        .then((res) => {
          this.$emit("piadaDeletada", { showTopAlert:true, alertMessage:'Piada deletada com sucesso', variant:"success"});
        })
        .catch((error) => {
          this.$emit("piadaDeletada", { showTopAlert:true, alertMessage:'Piada nao foi deletada', variant:"danger"});
        })
    },
  },
};
</script>

<style scoped>
</style>
