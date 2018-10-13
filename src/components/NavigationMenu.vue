<template>
  <div>
    <div class="row">
      <div class="col col-md-2 py-1 button-text button-background pointer" @click="goToPage('kontakt-os')" :class="{ 'selected': first }">Kontakt os</div>
      <div class="spacer"></div>
      <div class="col py-1 button-text button-background pointer" @click="goToPage('produktet')" :class="{ 'selected': second }">Virksomheder</div>
      <div class="spacer"></div>
      <div class="col py-1 button-text button-background pointer" :class="{ 'selected': third }">Bogholdere & revisorer</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    first: Boolean,
    second: Boolean,
    third: Boolean,
  },
  methods: {
    goToPage(url) {
      this.$router.push(url);
    }
  }
}
</script>

<style>
.button-background {
  background-image: linear-gradient(#fee3cb, #fef6ed);
  border: 1px solid #fed5b1;
  color: #b66113;
  border-radius: 8px 8px 0 0;
}

@media (min-width: 768px) {
  .button-text {
    font-size: large;
  }
}

@media (min-width: 992px) {
  .button-text {
    font-size: x-large;
  }
}

.pointer {
  cursor: pointer;
}

.spacer {
  border-bottom: 1px solid #fed5b1;
  width: 4px;
}

.selected {
  background-image: linear-gradient(#fef6ed, white);
  border-bottom: white;
}
</style>
