<template>
  <div class="bg-light-orange">
    <div class="container p-3">
      <div class="row">
        <div class="col text-left">
          <p class="m-0"><strong>Bilagsscanning.dk A/S</strong></p>
          <p class="text-muted m-0">Lundsbjerg Industrivej 13</p>
          <p class="text-muted m-0">6200 Aabenraa</p>
          <p class="text-muted m-0">Tlf. +45 8844 8833</p>
          <p class="text-muted m-0">CVR-nr. 36909110</p>
          <a class="text-muted m-0 d-block" href="mailto:info@bilagsscanning.dk">info@bilagsscanning.dk</a>
          <a class="text-muted m-0 d-block" href="/">www.bilagsscanning.dk</a>
        </div>
        <div class="col text-left">
          <p class="m-0"><strong>Virksomheder</strong></p>
          <ul class="pl-3 text-muted">
            <li @click="goTo('produktet')">Produktet</li>
            <li @click="goTo('info')">Hvad opnår jeg</li>
            <li @click="goTo('kontakt-os')">Kontakt os</li>
          </ul>
        </div>
        <div class="col text-left">
          <p class="m-0"><strong>Bogholdere & revisorer</strong></p>
          <ul class="pl-3 text-muted">
            <li @click="goTo('produktet')">Produktet</li>
            <li @click="goTo('partner')">Bliv Erhvervsservice Partner</li>
            <li @click="goTo('kontakt-os')">Kontakt os</li>
          </ul>
        </div>
        <div class="col text-left">
          <p class="m-0"><strong>Bilagsscanning.dk</strong></p>
          <ul class="pl-3 text-muted">
            <li @click="goTo('om-os')">Om os</li>
            <li @click="goTo('kontakt-os')">Kontakt os</li>
          </ul>
        </div>
        <div class="col text-left">
          <p class="m-0"><strong>Support og hjælp</strong></p>
          <ul class="pl-3 text-muted">
            <li @click="goTo('FAQ')">Ofte stillede spørgsmål</li>
          </ul>
        </div>

      </div>
      <a class="text-muted" href="http://bilagseksperten.dk">Copyright &copy; Bilagseksperten.dk</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(url) {
      this.$router.push(url);
    }
  }
}
</script>

<style scoped>
.bg-light-orange {
  background-color: #fff7f0;
}

li {
  cursor: pointer;
}

p, a, li {
  font-size: 14px;;
}

.shadow-top {
  box-shadow: black;
}
</style>
