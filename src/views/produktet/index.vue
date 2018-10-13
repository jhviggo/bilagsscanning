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
        <h3 class="my-3 font-weight-bold">Produktet</h3>
        <p>Bilagsscanning.dk er bygget op i Navision og indeholder den nyeste teknologi inden for fakturascanning og automatisk bogføring.</p>
        <p>Derudover kan vi tilbyde en ”light” version til Economics, der dog har begrænset funktionalitet i forhold til Navision. Denne løsning af kan med fordel anvendes af små virksomheder.</p>
        <p>Det er ikke alene dette, der gør bilagsscanning.dk til det foretrukne økonomisystem i hverdagen. Systemet er bygget op med baggrund i hverdagen og er derfor skabt til at håndtere alle former for bilag, så hele dit bogholderi bliver automatiseret.</p>
        <p>Bilagscanning.dk er udviklet som et såkaldt plug-in, så har du Navision i dag, kan vi komme med et tilbud på implementering i dit nuværende system.</p>
        <p>Går du med tanker om at skifte til et nyt system, men ikke ønsker at binde likviditeten, kan vi også hjælpe her. Vi tilbyder finansiering af hele systemet så du alene behøver at forholde dig til en fast månedlig ydelse.</p>
        <p>Tjek nyheder for præsentation af de seneste kampagner fra Microsoft på licenser til Navision og har du C5 (op til version 2012) i dag kan du gratis konvertere til Navision, blot du har et serviceabonnement og systemet er købt inden 6. oktober 2013.</p>
        <p>Bilagsscanning skaber synergi mellem processerne</p>
        <ul>
          <li>Validering</li>
          <li>Kontering</li>
          <li>Likviditet og bank</li>
        </ul>

        <h5><strong>Validering</strong></h5>
        <p>Validering eller dataafløftning af informationer på en "fysisk" faktura er meget ressourcekrævende.</p>
        <p>Med bilagsscanning.dk’s løsning kan denne proces effektiviseres væsentligt, så bogholderen får tid til at udføre andre arbejdsopgaver. I travle perioder kan denne proces endda varetages af andre i organisationen, da ”validering” nu ikke længere kræver branchekendskab.</p>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe width="1903" height="769" src="https://www.youtube.com/embed/WwZB2IWDeHg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <p class="text-muted font-italic">Se videoen af validering og oplev hvor nemt det kan gøres via Bilagsscanning.</p>

        <h5><strong>Kontering</strong></h5>
        <p>Da størstedelen af databearbejdelsen foretages i valideringen, skal bogholderen alene forholde sig til, kontering som standardiseres i Bilagsscanning. Bogholderens tidsbesparelse antages at ligge på op til 50-70% i forhold til manuelle arbejdsprocesser.</p>
        <p>Lige præcis denne standardisering gør at bilagshistorikken nu ikke længere lagres hos bogholderen men derimod lagres i systemet. De skøn som en bogholder på udøve daglig begrænses dermed væsentligt, med en meget mere ensartet kontering til følge.</p>
        <p>Konteringsmodulet er opbygget med følgende automatisering:</p>
        <ul>
          <li>Automatisk oprettelse af nye kreditorer</li>
          <li>Opdatering af kreditor stamdata direkte fra Erhvervs- og Selskabsstyrelsen.</li>
          <li>Automatisk kontering af bilag, samt automatisk udfyldelse af bogføringstekst</li>
          <li>Mulighed for fri kontering af bilag, som i kender det fra den ”manuelle” kassekladder</li>
          <li>Automatisk momskontrol</li>
          <li>Mulighed automatisk validering af EU-momsnumre samt arkivering af dokumentation.</li>
        </ul>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe width="1903" height="769" src="https://www.youtube.com/embed/JFa-eNZ7ok0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <p class="text-muted font-italic">Se videoen omkring konteringsdelen i Bilagsscanning.</p>

        <h5><strong>Likviditet</strong></h5>
        Manuel bogføring af ind- og udbetalinger samt udarbejdelse af manuelle bankafstemninger er meget tidskrævende og udføres typisk af en uddannet bogholder. Ved at indføre automatisk udligning af ind- og udbetalinger samt udarbejdelse af automatisk bankafstemning, spares der meget tid og risikoen for fejl minimeres. Bogholderen skal alene forholde sig åbenstående poster</p>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe width="1903" height="769" src="https://www.youtube.com/embed/BhJd_GuXaXE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <p class="text-muted font-italic">Se videoen om likviditet og oplev hvor nemt det kan gøres via Bilagsscanning.</p>
        <h5><strong>Rapporteringsværktøjer</strong></h5>
        <p>Bilagsscanning.dk er ikke kun et bogførings- og administrativ værktøj. Med direkte excel integration har du som økonomichef eller direktør mulighed for at udarbejde vedligeholdelsesfrie rapporter der opdateres løbende som medarbejderne gør brug af systemerne.</p>
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
