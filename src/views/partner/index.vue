<template>
  <div>
    <navigation-menu
      :third="true"
    />
    <div class="row border-gradient">
      <minor-navigation-menu
        class="col-4 col-lg-3 d-none d-lg-block p-4 text-left"
        :menu-items="menuItems"
      />
      <div class="col-12 col-lg-9 text-left">
        <h3 class="my-3 font-weight-bold">Bliv Erhvervsservice Partner</h3>
        <p>Erhvervsservice Partner er bilagsscanning.dk’s løsning til bogholdere og revisorer der ønsker en mere effektiv hverdag.</p>
        <p>Bilagsscanning.dk er udviklet med baggrund i effektivisering og standardisering af virksomhedens processer.</p>
        <p>Med bilagsscanning.dk Erhvervsservice Partner løsning opnår du følgende fordele:</p>
        <ul>
          <li>Et system skræddersyet til bogførings og revisionsbranchen.</li>
          <li>Indbyggende kontroller, der minimerer taste- og bogføringsfejl</li>
          <li>Stor effektivisering i det daglige arbejde og dermed større indtjening.</li>
          <li>Projektstyring af dine kunder og udfyldelse af timesedler direkte i systemet.</li>
          <li>Udligning af spidsbelastningsperioder.</li>
          <li>Standardisering af arbejdsrutiner.</li>
          <li>Direkte adgang i Excel til informationer i bilagsscanning.dk. Til brug for udarbejdelse af dynamiske rapporter.</li>
          <li>Online bilagsarkiv, som kunderne kan tilgå fra nettet.</li>
          <li>Værktøjer til flytning af regnskaber fra C5 og Economic til Bilagsscanning.dk</li>
          <li>Automatisk opdatering</li>
          <li>Og meget mere…</li>
        </ul>
        <p>En af systemets mange styrker ligger i dets fleksibilitet. Vores opsplitning af processerne gør at opgaverne nu ikke længere behøver at ligger hos faste bogholdere i virksomheden.</p>
        <p>Nu kan arbejdsopgaver på tværs af kunder fordeles mellem medarbejderne, da validering, kontering samt likviditet og afstemning nu kan gennemføres uafhængigt af hinanden.</p>
        <p>Kundernes løbende rapportering af bilag vil også være med til at udligne arbejdspresset da dele af bogføringsopgaverne ikke længere behøver at ske op til en af fristdagene for afregning af moms.</p>
        <p>Den direkte integration imellem Bilagsscanning.dk og Excel giver mulighed for at udarbejde dynamiske månedsrapporter, salgsstatistikker m.m. til kunder som løbende opdateres som bogholderen anvender bilagsscanning.dk.</p>
        <p>Gi’ os et kald, vi kommer gerne på besøg og viser hvad vi kan:</p>
        <router-link to="kontakt-os"><a>Klik her for at gå til kontakt</a></router-link>
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
      menuItems: Array
    }
  },
  created() {
    this.menuItems = require('../../content/minorMenuRevisorer.json');
  }
}
</script>
