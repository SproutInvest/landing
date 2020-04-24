<template>
  <div
    id="about"
    class="ss-about"
  >
    <div class="container">
      <div class="row align-items-center justify-content-between py-5 py-md-10">
        <div class="col-12 col-lg-6 text-center text-lg-left">
          <h3 class="mb-5">
            {{ $t('h1') }}
          </h3>
          <p>{{ $t('t1') }}</p>
        </div>
        <div
          class="col-12 col-lg-6 aos-init aos-animate text-center"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <h1>
            1
          </h1>
          <ul class="text-left ml-5 mb-5">
            <li>{{ $t('l11') }}</li>
            <li>{{ $t('l12') }}</li>
          </ul>
        </div>
      </div>
      <div class="row align-items-center justify-content-between py-5 py-md-10">
        <div
          class="col-12 col-lg-6 aos-init aos-animate text-center"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <h1>
            2
          </h1>
          <ul class="text-left ml-5 mb-5">
            <li>{{ $t('l21') }}</li>
            <li>{{ $t('l22') }}</li>
            <li>{{ $t('l23') }}</li>
          </ul>
        </div>
        <div class="col-12 col-lg-6 text-center text-lg-left">
          <h3 class="mb-5">
            {{ $t('h2') }}
          </h3>
          <p>{{ $t('t2') }}</p>
        </div>
      </div>
      <div class="row align-items-center justify-content-between py-5 py-md-10">
        <div class="col-12 col-lg-6 text-center text-lg-left">
          <h3 class="mb-5">
            {{ $t('h3') }}
          </h3>
          <p>{{ $t('t3') }}</p>
        </div>
        <div
          class="col-12 col-lg-6 aos-init aos-animate text-center"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <h1>
            3
          </h1>
          <ul class="text-left ml-5 mb-5">
            <li>{{ $t('l31') }}</li>
            <li>{{ $t('l32') }}</li>
            <li>{{ $t('l33') }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "h1": "Learn the 101 of your money",
    "t1": "With Sprout, you will be able to understand all about your finances and how they work.",
    "l11": "Clear overview of all finances",
    "l12": "All of your accounts in one place",
    "h2": "Define financial goals",
    "t2": "Milestones cannot be achieved if they are not first set. Let us help you with that!",
    "l21": "Set custom spending limits",
    "l22": "Get realtime budget alerts",
    "l23": "Devise a clear spending plan",
    "h3": "Track your money",
    "t3": "And watch it grow, earn much more compared to traditional banks with our team of experts and our smart algorithms.",
    "l31": "Cancel wasteful accounts",
    "l32": "Schedule payments on the go",
    "l33": "Manage your debt"
  },
  "es": {
    "h1": "Aprende Finanzas Personales",
    "t1": "Con Spröut, tendrás la oportunidad de aprender desde lo más básico hasta lo más avanzado del mundo de las Finanzas, desde que es la Inflación y como te impacta, hasta estrategias para hacer crecer tu dinero mientras te diviertes.",
    "l11": "Camino claro de aprendizaje financiero",
    "l12": "Pon el aprendizaje en práctica y empieza a hacer crecer tu dinero",
    "l13": "Te aconsejamos para que uses mejor tu Dinero a un precio accesible",
    "h2": "Define tus Metas de Inversión",
    "t2": "Spröut es una herramienta para alcanzar todas tus metas Ya sea que busques retirarte cómodamente o comprar un coche o una casa.",
    "l21": "Planea tus metas de inversión con Spröut",
    "l22": "Invierte automáticamente y sin darte cuenta",
    "l23": "Crea retos de inversión con Familia y Amigos",
    "h3": "Lleva un registro de tu Dinero",
    "t3": "En lugar de que tu dinero pierda valor en una cuenta bancaria, ve como día a día tu dinero crece con Spröut. Usamos la mejor tecnología para elegir la mejor inversión para ti.",
    "l31": "Usamos la misma encriptación que tu Banco",
    "l32": "Fácil de depositar y retirar dinero",
    "l33": "El precio más bajo para una cuenta de Inversión en México"
  }
}
</i18n>

<script>
export default {
  name: 'About',
  props: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h1
  font-size: 15rem
  font-family: $ss-font-family-special
  color: $ss-font-color-blue
  font-weight: 700
li
  font-size: 1.2rem
  font-family: $ss-font-family-basic
  color: $ss-font-color-blue
h3
  font-size: 2.25rem
  font-family: $ss-font-family-special
  color: $ss-font-color-blue
  font-weight: 700
  line-height: 1.5
  display: inline-block
  border-bottom: 3px solid $ss-color-gold
  // text-decoration: underline solid $ss-color-gold
p
  font-size: 1.15rem
  font-family: $ss-font-family-special
  color: $ss-font-color-blue
</style>
