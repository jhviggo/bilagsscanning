<template>
  <div>
    <router-link v-for="item in menuItems" :key="item.name" class="d-block mb-1 pb-1 border-bottom w-100 text-dark no-decoration" :to="`/${item.url}`">
      <a>{{ item.name }}</a>
    </router-link>
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
