<template>
  <div>
    <b-modal v-model="showModal" title="Master Pass" hide-footer hide-header-close no-close-on-esc no-close-on-backdrop>
      <form v-on:submit.prevent="compareHash" ref="formHTML" class="form-pass">

      <input type="password" placeholder="senha" v-model="pass" />
      <b-button size="sm"   @click="compareHash()" variant="outline-secondary"
      ><b-icon icon="cursor-fill"
    /></b-button>
      </form>
    </b-modal>
  </div>
</template>

<script>
import bcrypt from 'bcryptjs';

export default {
  name: 'PassModal',
  components: {
  },
  created(){
    this.showModal =! localStorage.getItem('auth')
  },
  data(){
    return{
      pass:null,
      showModal: true
    }
  },
  methods:{
    async compareHash(){
      const hashOk = await bcrypt.compare(this.pass, this.$masterPass);
      this.pass = ''
      if(hashOk) {
        localStorage.setItem('auth', true);
        this.showModal=false
      }
      console.log(hashOk)
    }
  }
}
</script>

<style >
.form-pass{
  display: flex;
  justify-content: center;
}
</style>


