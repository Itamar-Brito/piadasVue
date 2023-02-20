<template>
  <div class="hello">
    <Loading v-if="loading"/>
    <b-modal v-model="modalShow" :title="isEdit ? 'Editar Piada' : 'Adicionar Piada'">
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
      </form>
      <template #modal-footer="{ cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="sm" variant="success" @click="submitForm()">
          {{ isEdit ? 'Salvar Edição' : 'Adicionar Piada' }}
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
import Loading from "./Loading.vue";

export default {
  name: "AddPiada",
  components: {
    Loading,
  },
  data() {
    return {
      loading: false,
      modalShow:false,
      isEdit:false,
      editId:null,
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
    showModal(){
      this.modalShow =true
    },
    editJoke(jokeId){
      this.editId = jokeId
      this.loading = true
      this.modalShow =true
      this.isEdit = true
      this.findJokeById(jokeId)

    },
    findJokeById(id){
      axios
        .get(this.$piadasHost+'/'+id)
        .then((res) => {

          this.form = res.data;
          console.log(this.form)
          this.loading = false
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateOrCreateAxios(){
      if(this.isEdit){
        return axios.patch(`${this.$piadasHost}/${this.editId}` , this.form)
      }
      return axios.post(this.$piadasHost, this.form)
    },
    submitForm() {
        this.updateOrCreateAxios()
        .then((res) => {
          console.log(res);
          this.$bvModal.hide("modal-add-piada");
          this.showTopAlert = true;
          this.alertMessage = "Sucesso ao salvar a Piada";
          this.$emit("piadaSalva");
          this.modalShow=false
        })
        .catch((error) => {
          // error.response.status Check status code
          console.log(error)
        })
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
