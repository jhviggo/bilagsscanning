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
        <h3 class="my-3 font-weight-bold">Kontakt os</h3>
        <p>Udfyld nedenstående kontaktformular, eller ring til os på telefon <strong>8844 8833</strong>.</p>
        <div class="row">
          <div class="col-12 col-lg-6">
            <form class="w-100">
              <div v-for="contact in contactForm" :key="contact.id" class="row mb-3">
                <label class="col" :for="contact.id">{{ contact.text }}</label>
                <input class="col mr-3" :id="contact.id" type="text" :name="`name-${contact.id}`">
              </div>
            </form>
          </div>
          <div class="col-12 col-lg-6">
            <p>Jeg vil gerne:</p>
            <form>
            <div>
              <input class="mr-1" id="appointment-1" name="contact-action" type="radio"/>
              <label for="appointment-1">have et uforpligtende møde</label>
            </div>
            <div>
              <input class="mr-1" id="appointment-2" name="contact-action" type="radio"/>
              <label for="appointment-2">have materiale tilsendt</label>
            </div>
            <div>
              <input class="mr-1" id="appointment-3" name="contact-action" type="radio"/>
              <label for="appointment-3">høre mere om produktet</label>
            </div>
            </form>
          </div>
        </div>
        <button class="btn top-header__login py-0 px-5 ml-5">Send</button>
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

<style scoped>
input {
  border: solid 1px #fed5b1;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
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
</style>
