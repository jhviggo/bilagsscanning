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
        <h3 class="my-3 font-weight-bold">Ofte stillede spørgsmål</h3>
        <p><strong>1. Hvor stor en besparelse kan jeg forvente:</strong></p>
        <p>Hvor stor besparelsen bliver for din virksomhed kan forvente kan vi ikke med sikkerhed sige. Vores test viser en besparelse på op til 50%.</p>
        <p>Derudover medfører bilagsscanning.dk at risikoen for konterings og momsfejl minimeres væsentligt.</p>
        <p><strong>2. Kan jeg lave tilretninger til min bilagsscanning.dk løsning:</strong></p>
        <p>Bilagsscanning.dk er udarbejdet som et såkaldt ”plug-in”, det betyder at det vil kunne implementeres i stort set alle Navision systemer fra 2015 og frem.</p>
        <p>Kan ens Navision løsning ikke passe ind i standardløsningen fra Bilagsscanning.dk, vil man stadig kunne få et opdaterings abonnement, der dog skal tilpasses de tilretninger man har fået lavet.</p>
        <p><strong>3. Hvornår skal jeg leje og hvornår skal jeg købe systemet:</strong></p>
        <p>Som udgangspunkt er hovedreglen, at det er mere økonomisk af leje en licens hvis virksomheden er under 3 ansatte. Dog gør man klog i at afstemme dette i forhold til virksomhedens udvikling for vores finanseringsprogram gør, at købsprisen kan indregnes i bilagsprisen og dermed undgår at trække på ens likviditet. Ved denne model er man efter 3 år ejer at sit ejet Navision system.</p>
        <p><strong>4. Kan jeg tilgå systemet online:</strong></p>
        <p>Systemet kan tilgås online via bilagsscanning.dk men også via iPad eller andre tablets.</p>
        <p><strong>5. Hvor sikre er mine bilag?</strong></p>
        <p>Denne løsning er bygget op i Microsoft Navision, alle data lagres på Microsofts Azure servere og bilagsarkivet styres af lexmarks.</p>
        <p><strong>6. Hvilken support ydes der til løsningen:</strong></p>
        <p>Bilagsscanning.dk sælges igennem it-partnere som vil forestå den direkte support til din virksomhed. Bilagsscanning.dk leveres dog altid inklusiv installation, kursus samt 2 timers gratis support. I forbindelse med køb af bilagsscanning.dk vil der også blive udleveret brugermanualer m.m. For yderligere information, bedes i venligst kontakte jeres It-partner.</p>
        <p>Bogholdere og revisorer er omfattet af Bilagsscanning.dk erhvervsservicekoncept. For yderligere information omkring erhvervsservicekonceptet, bedes i venligst kontakte os på telefon 8844 8833 eller på mail: info@bilagsscanning.dk.</p>
        <p><strong>7. Hvor kan jeg få yderligere information omkring bilagsscanning.dk:</strong></p>
        <p>Det vigtig for os, at i som bruger løbende uddannes i systemet. Vi vil derfor løbende lægge små videoer op med hjælp og vejledning til udfordringer i dagligdagen.</p>
        <p>Har i udfordringer, som i gerne vil have hjælp til kan i sende os en mail på info@bilagsscanning.dk og så kan det være at det næste gang er din problemstilling vi sender yderligere hjælp og vejledning til.</p>
        <p><strong>8. Hvor tit opdateres Bilagsscanning.dk:</strong></p>
        <p>Bilagsscanning.dk opdateres løbende og bliver derfor automatisk også løftet med op i de kommende versioner af Dynamics Nav. Vores udviklere arbejder derudover løbende på at effektivisere funktionerne i Bilagsscanning.dk.</p>
        <p>Såfremt i som bruger har ønsker til funktionalitet m.m. kan du altid sende os en mail på info@bilagsscanning.dk og vi vil forsøge at tilgodese jeres ønsker i fremtidige versioner.</p>
        <p><strong>9. Kan bilagsscanning.dk installeres på egne servere:</strong></p>
        <p>Bilagsscanning.dk kan installeres på egne servere. Opdateringer sender vi til din It-partner / It-administrator, som vil forestå selve installationen på jeres servere. For nærmere information kontakt venligst jeres it-partner eller kontakt os på telefon: 8844 8833</p>
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
      menuItems: Object,
      contactForm: Array,
    }
  },
  created() {
    this.menuItems = require('../../content/minorMenuKontakt.json');
    this.contactForm = require('../../content/contact.json');
  }
}
</script>
