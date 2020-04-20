<template>
  <div>
    <nav class="ss-header navbar navbar-expand-lg">
      <div class="container">
        <div class="d-flex flex-grow-1">
          <span class="w-100 d-lg-none d-block"><!-- hidden spacer to center brand on mobile --></span>
          <a
            class="navbar-brand d-none d-lg-inline-block"
            href="#"
          >
            <img
              src="../assets/logo.png"
              height="60"
              width="120"
              alt="Sprout Logo"
            >
          </a>
          <div class="w-100 text-right">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span class="navbar-toggler-icon" />
            </button>
          </div>
        </div>
        <div
          id="myNavbar"
          class="collapse navbar-collapse flex-grow-1 text-right"
        >
          <ul class="navbar-nav ml-auto flex-nowrap">
            <li class="nav-item">
              <a
                href="/"
                class="ss-header-link nav-link m-2 menu-item nav-active"
              >{{ $t('who') }}</a>
            </li>
            <li class="nav-item">
              <a
                href="#about"
                class="ss-header-link nav-link m-2 menu-item"
              >{{ $t('how') }}</a>
            </li>
            <li class="nav-item">
              <a
                href="#footer"
                class="ss-header-link nav-link m-2 menu-item"
              >{{ $t('start') }}</a>
            </li>
            <li class="nav-item">
              <a
                href="#footer"
                class="ss-header-link nav-link m-2 menu-item"
              >{{ $t('contact') }}</a>
            </li>
            <li class="nav-item">
              <a
                href=""
                class="ss-header-link nav-link m-2 menu-item"
              ><LanguageSwitcher /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
  color: $ss-font-color-black
  font-weight: 700
  transition: color 0.4s ease 0s
  &:hover
    color: $ss-font-color-sprout
</style>
