<template>
  <div id="app">
    <div class="mb-5">
      <top-header/>
    </div>
    <div class="container pt-5">
      <router-view/>
    </div>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader';

export default {
  components: {
    TopHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
