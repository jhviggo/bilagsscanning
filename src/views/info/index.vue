<template>
  <div>
    <div>
      <navigation-menu
        :second="true"
      />
    </div>
    <div class="row border-gradient">
      <minor-navigation-menu
        class="col-4 col-lg-3 d-none d-lg-block p-4 text-left"
        :menu-items="menuItems"
      />
      <div class="col-12 col-lg-9 text-left">
        <h3 class="my-3 font-weight-bold">Hvad opnår jeg</h3>
        <p>Som bruger af Bilagsscanning.dk opnår du et innovativt effektiviseringsværktøj, som er i konstant udvikling. Som Microsoft Certificeret partner forpligtiger vi os til hele tiden at sørge for at vores system er up-to-date og naturligvis overholder de gældende regler indenfor bogføring. Produktet opdateres løbende i tråd med Microsofts opdateringer til Microsoft Dynamics NAV. Vi bestræber os på, at være klar med ny version inden for 3 måneder efter, at Microsoft frigiver ny version. Bilagsscanning.dk support lifecycle følger den Dynamics NAV version det er installeret i.</p>
        <p>Du opnår indirekte større indtjening, idet ressourcerne i virksomheden kan blive brugt på det som det hele drejer sig om, nemlig at tjene flere penge.</p>
        <p>Du opnår større fleksibilitet både for din virksomhed men også for dine medarbejdere. F.eks. behøver dine sælgere ikke længere at aflevere fysiske bilag, men kan blot tage et billede af en kvittering og uploade via Bilagsscanning. Apps til iPhone og Android giver nemlig bruger mulighed for at indscanne kontantbilag samt kreditorbilag fra telefonen.</p>
        <p>Med Bilagsscanning opnår du udligning af timeforbrug og sikrer mindre overarbejde – alt i alt bedre ressourcefordeling.</p>
        <p>Skulle du have behov for support, så er vi klar til at modtage din henvendelse. Vores målsætningen er at din supportsag er behandlet inden for 6 timer inden for normal arbejdstid. Kontakt supporten via: email: info@bilagsscanning.dk eller på telefon +45 88 44 88 33.</p>
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
    this.menuItems = require('../../content/minorMenuVirksomheder.json');
  }
}
</script>
