<template>
  <div class="w-100 top-header-container">
    <div class="container text-left py-1">
      <i class="material-icons home-icon" @click="goToIndex">home</i>
      <div class="position-absolute logo-header">
        <img class="pl-md-5 logo-header__image" :src="logo" @click="goToIndex"/>
      </div>
      <div class="text-right mt-5">
        <button class="btn top-header__login py-0 px-5" @click="goToLogin">
          <i class="material-icons lock_icon" @click="goToIndex">lock_open</i>
          login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../assets/BilagsscanningLogo.png';

export default {
  methods: {
    goToIndex() {
      this.$router.push('/');
    },
    goToLogin() {
      window.location.href = 'https://bilagsscanningdk.readsoftonline.com/';
    }
  },
  data() {
    return {
      logo: logo
    }
  }
}
</script>

<style>
.top-header-container {
  background-image: linear-gradient(#f3811f, #bf6615);
  height: 2em;
}

.top-header__login {
  border: solid 1px #034ea2;
  background-color: #516bb3;
  border-radius: 8px;
  color: white;
}

.top-header__login:hover {
  border: solid 1px #b66113;
  background-color: #f58220;
}

.lock_icon {
  vertical-align: middle;
}

.logo-header {
  top: 10px
}

.logo-header__image {
  position: absolute;
  max-width: 75vw;
}

@media(max-width: 768px) {
  .logo-header__image {
    width: 300px;
  }
}

.home-icon {
  color: white;
  font-size: 1.5em;
  vertical-align: middle;
  cursor: pointer;
}
</style>
