<template>
        <b-card
          v-bind:title="title"
          tag="article"
          style="max-width: 100rem"
          class=""
        >
          <b-card-text>
            {{content}}
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
</template>

<script>
export default {
  name: "PiadasCard",
  data() {
    return {
      id: this.piada.id ? this.piada.id : null,
      title: this.piada.titulo ? this.piada.titulo :null,
      content: this.piada.piada? this.piada.piada:  "Some quick example text to build on the card title and make up the bulk of the card's content."
    };
  },
  props:{
    piada:null
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
