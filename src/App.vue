<template>
  <div id="app" class="teste">
    <Piadas/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Piadas from './components/Piadas'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Piadas
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #021d38;
  margin-top: 8px;
}

</style>
