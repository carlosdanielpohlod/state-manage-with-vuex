<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Counter />
    <ShowData />
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import ShowData from './components/ShowData.vue'
export default {
  name: 'App',
  components: {
    Counter, ShowData
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
