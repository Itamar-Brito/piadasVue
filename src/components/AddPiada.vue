<template>
  <div class="hello">
    <b-modal id="modal-add-piada" title="Adicionar Piada">
      <form v-on:submit.prevent="submitForm" ref="formHTML">
        <div class="row">
          <input type="text" placeholder="Título piada" v-model="form.titulo" />
          <br />
          <textarea
            placeholder="Contúdo da Piada"
            name="piada"
            id="piada"
            cols="30"
            rows="10"
            v-model="form.piada"
          ></textarea>

        </div>
      </form>
      <template #modal-footer="{ cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="sm" variant="success" @click="submitForm()">
          Adicionar Piada
        </b-button>
        <b-button size="sm" variant="danger" @click="cancel()">
          Cancelar
        </b-button>
      </template>
    </b-modal>
    <b-alert
    v-model="showTopAlert"
      class="position-fixed fixed-top m-0 rounded-0"
      style="z-index: 2000;"
      variant="success"
      dismissible>
      {{alertMessage}}
    </b-alert>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddPiada",
  data() {
    return {
      alertMessage:'',
      showTopAlert:false,
      form: {
        titulo: null,
        piada: null,
        api:true,
        token:'zJdDauhxKlsh629024971ee86'
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .get(
          "http://piada.atwebpages.com/php_action/api/create-piada.php",{
            params: this.form
          }
        )
        .then((res) => {
          console.log(res);
          this.$bvModal.hide('modal-add-piada')
          this.showTopAlert = true
          this.alertMessage = "Sucesso ao salvar a Piada"
          this.$emit('piadaSalva')
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
