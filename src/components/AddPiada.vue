<template>
  <div class="hello">
    <b-modal id="modal-add-piada" title="Adicionar Piada">
      <form v-on:submit.prevent="submitForm" ref="formHTML">
        <div class="row">
          <input type="text" placeholder="Título piada" v-model="form.title" />
          <br />
          <textarea
            placeholder="Contúdo da Piada"
            name="piada"
            id="piada"
            cols="30"
            rows="10"
            v-model="form.joke"
          ></textarea>
          <b-form-select
            class="category"
            v-model="form.category"
            :options="categoryOptions"
          ></b-form-select>
        </div>
        {{ form  }}
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
      style="z-index: 2000"
      variant="success"
      dismissible
    >
      {{ alertMessage }}
    </b-alert>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddPiada",
  data() {
    return {
      alertMessage: "",
      showTopAlert: false,
      categoryOptions: [
        { value: null, text: "Selecione uma categoria de piada" },
        { value: "Sacanagem", text: "Sacanagem" },
        { value: "Sogra", text: "Sogra" },
        { value: "Trocadilho", text: "Trocadilho" },
        { value: "Humor negro", text: "Humor negro" },
        { value: "Piadas de bater na porta", text: "Piadas de bater na porta" },
        { value: "Piadas de loiras", text: "Piadas de loiras" },
        { value: "Piadas de casamento", text: "Piadas de casamento" },
        { value: "Piadas de religião", text: "Piadas de religião" },
        { value: "Piadas sobre homens", text: "Piadas sobre homens" },
        { value: "Piadas sobre mulheres", text: "Piadas sobre mulheres" },
      ],
      form: {
        title: null,
        joke: null,
        category: null,
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .post(this.$piadasHost,
          this.form,
        )
        .then((res) => {
          console.log(res);
          this.$bvModal.hide("modal-add-piada");
          this.showTopAlert = true;
          this.alertMessage = "Sucesso ao salvar a Piada";
          this.$emit("piadaSalva");
        })
        .catch((error) => {
          // error.response.status Check status code
          console.log(error)

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
.category{
  margin-top: 25px;
}
</style>
