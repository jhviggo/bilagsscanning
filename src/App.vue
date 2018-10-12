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
  font-family: 'Open Sans Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

p, span, h1, h2, h3, h4 {
  color: #58595b;
}

/* Gradient border */
.border-gradient {
  border-width: 1px;
  border-style: solid;
  -webkit-border-image:
    -webkit-gradient(linear, 0 0, 0 100%, from(#fed5b1), to(rgba(0, 0, 0, 0))) 1 100%;
  -webkit-border-image:
    -webkit-linear-gradient(#fed5b1, rgba(0, 0, 0, 0)) 1 100%;
  -moz-border-image:
    -moz-linear-gradient(#fed5b1, rgba(0, 0, 0, 0)) 1 100%;
  -o-border-image:
    -o-linear-gradient(#fed5b1, rgba(0, 0, 0, 0)) 1 100%;
  border-image:
    linear-gradient(to bottom, #fed5b1, rgba(0, 0, 0, 0)) 1 100%;
}
</style>
