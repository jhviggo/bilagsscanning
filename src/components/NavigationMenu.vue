<template>
  <div>
    <div class="row row-container">
      <div class="col col-md-2 py-3 button-background" :class="{ 'selected': first }">Kontakt os</div>
      <div class="spacer"></div>
      <div class="col py-3 button-background" :class="{ 'selected': second }">Virksomheder</div>
      <div class="spacer"></div>
      <div class="col py-3 button-background" :class="{ 'selected': third }">Bogholdere & revisorer</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    first: Boolean,
    second: Boolean,
    third: Boolean,
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

.row-container {
  margin-right: 0;
   margin-left: 0;
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
