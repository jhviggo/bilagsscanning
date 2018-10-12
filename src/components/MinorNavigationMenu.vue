<template>
  <div>
    <a v-for="item in menuItems" :key="item.name" class="d-block mb-1 pb-1 border-bottom w-100 text-dark no-decoration" :href="`/${item.url}`">{{ item.name }}</a>
  </div>
</template>

<script>
export default {
  props: {
    menuItems: Array
  }
}
</script>

<style>
.no-decoration {
  text-decoration: none;
}
</style>
