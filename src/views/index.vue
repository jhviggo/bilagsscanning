<template>
  <div>
    <div>
      <navigation-menu/>
    </div>
    <div class="border-gradient">
    </div>
  </div>
</template>

<script>
import NavigationMenu from '../components/NavigationMenu';

export default {
  components: {
    NavigationMenu
  }
}
</script>

<style>
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
