<template>
  <div>
    <div>
      <navigation-menu
        :first="true"
      />
    </div>
    <div class="row border-gradient">
      <minor-navigation-menu
        class="col-4 col-lg-3 d-none d-lg-block p-4 text-left"
        :menu-items="menuItems"
      />
      <div class="col-12 col-lg-9 text-left">
        <h3 class="my-3 font-weight-bold">Om os</h3>
        <p>Bilagsscanning A/S er stiftet af branchen.</p>
        <p>Bilagsscanning.dk er udviklet af en arbejdsgruppe af repræsentanter fra flere forskellige brancher som sammen har været med til at skabe et produkt som samler det bedste at alle verdner.</p>
        <p>Arbejdsgruppen består af fagfolk fra bogførings- og revisionsbranchen, it-udvikler samt eksperter i dokument Capture (automatisk afløftning af informationer).</p>
        <p>Vores fornemste opgave har været at vende de manuelle rutiner, en bogholder dagligt sidder med, på hovedet og analysere dem, med det ene formål at effektivisere, effektivisere, effektivisere.</p>
        <p>Projektet har nu været i gang i 2 år og vi er nu klar til at lancere, hvad vi mener er det mest effektive økonomisystem til dato. Hvor andres systemer alene fokuserer på leverandørbilag, har vi skabt et system der kan håndtere alle bilag.</p>
        <p>Men projektet er langt fra slut endnu...</p>
        <p>En stor del af del af prisen som i betaler for systemet er øremærket til fortsat udvikling og denne kan du som virksomhedsejer, bogholder eller revisor få indflydelse på.</p>
        <p>Den bedste effektivisering opnås ved at lytte til dem der bruger det, så derfor vil den fremtidige udvikling se med udgangspunkt i at gøre det bedre, så:</p>
        <p>Bilagsscanning.dk altid er, den nemmeste måde at bogføre på...</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationMenu from '../../components/NavigationMenu';
import MinorNavigationMenu from '../../components/MinorNavigationMenu';

export default {
  components: {
    NavigationMenu,
    MinorNavigationMenu
  },
  data() {
    return {
      menuItems: Array,
      contactForm: Array,
    }
  },
  created() {
    this.menuItems = require('../../content/minorMenuKontakt.json');
    this.contactForm = require('../../content/contact.json');
  }
}
</script>
