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
        .post(
          "http://piada.atwebpages.com/php_action/api/delete-by-id.php?token=zJdDauhxKlsh629024971ee86",
          {
            params: this.form,
          }
        )
        .then((res) => {
          //create a class for a person
        })
        .catch((error) => {
          // error.response.status Check status code
        })
        .finally(() => {
          //Perform action in always
        });
    },
  },
};
</script>

<style scoped>
</style>
