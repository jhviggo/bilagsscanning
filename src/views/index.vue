<template>
  <div>
    <div>
      <navigation-menu/>
    </div>
    <div class="row border-gradient">
      <div class="col-12 col-md-6">
        <img class="w-100" :src="image"/>
      </div>
      <div class="col-12 col-md-6 text-left">
        <h4 class="my-3 font-weight-bold">Den nemmeste måde at bogføre på...</h4>
        <p>Uanset om det drejer sig om kontante kvitteringer, leverandørfakturaer, rentenotaer eller hvad man ellers i hverdagen møder kan bilagsscanning.dk håndtere dine bilag. Vi kan sågar bearbejde bilag sendt til os som billede fra din mobiltelefon.</p>
        <p>Ud over selve bilagshåndteringen har bilagsscanning.dk udarbejdet en automatiseret procedure for automatisk bogføring af ind- og udbetalinger samt automatisk bankafstemning.</p>
        <p>Det er da effektivisering...</p>
        <h5><strong>Virksomheder</strong></h5>
        <p>Med bilagsscanning.dk opnår du de samme fordele som store virksomheder uden at du behøver at investere i store og dyre systemer. Du er med vores opdateringsservice endda sikret, at du altid har den seneste opdatering.</p>
        <a href="/produkt">Læs mere om produktet her</a>
        <h5 class="mt-3"><strong>Bogholdere og revisorer</strong></h5>
        <p>Bliv ERHVERVSSERVICE PARTNER med Bilagsscanning.dk og effektiviser de daglige rutiner hos dine kunder - forventet tidsbesparelse op mod 50% - og dermed en meget større indtjening.</p>
        <a href="/produkt">Læs mere om produktet her</a>

      </div>
    </div>
  </div>
</template>

<script>
import NavigationMenu from '../components/NavigationMenu';
import FrontPageImage from '../assets/forside.jpg';

export default {
  components: {
    NavigationMenu
  },
  data() {
    return {
      image: FrontPageImage
    }
  }
}
</script>

<style scoped>
p {
  line-height: 20px;
}
</style>
