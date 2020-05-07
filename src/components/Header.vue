<template>
  <div>
    <b-navbar
      toggleable="md"
      type="light"
      variant="faded"
    >
      <div class="container">
        <b-navbar-brand href="#">
          <img
            src="../assets/logo.png"
            height="60"
            width="150"
            alt="Sprout Logo"
          >
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse
          id="nav-collapse"
          is-nav
        >
          <b-navbar-nav class="ml-auto">
            <b-nav-item
              href="/"
              class="ss-header-link"
            >
              {{ $t('who') }}
            </b-nav-item>
            <b-nav-item
              href="#about"
              class="ss-header-link"
            >
              {{ $t('how') }}
            </b-nav-item>
            <b-nav-item
              href="#footer"
              class="ss-header-link"
            >
              {{ $t('start') }}
            </b-nav-item>
            <b-nav-item href="">
              <LanguageSwitcher />
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<i18n>
{
  "en": {
    "who": "Who are we?",
    "how": "How does it work?",
    "start": "Start investing",
    "contact": "Contact"
  },
  "es": {
    "who": "¿Porque nosotros?",
    "how": "¿Como funciona?",
    "start": "Empieza a invertir",
    "contact": "Contacto"
  }
}
</i18n>

<script>
import LanguageSwitcher from './LanguageSwitcher'

export default {
  name: 'Header',
  components: {
    LanguageSwitcher,
  },
  props: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.ss-header
  background-color: $ss-bg-color-white
.ss-header-link
  .nav-link
    font-weight: 700
    transition: color 0.4s ease 0s
    color: $ss-font-color-black
    margin-right: 2rem
    &:hover
      color: $ss-font-color-sprout !important
</style>
