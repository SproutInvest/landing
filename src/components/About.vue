<template>
  <div
    id="about"
    class="ss-about"
  >
    <div class="container">
      <div class="row align-items-center justify-content-between py-5 py-md-10">
        <div class="col-12 col-lg-6 text-center text-lg-left">
          <span class="ss-about-number">1</span>
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
          <img
            class="ss-about-image"
            src="../assets/about1.png"
            alt="Sprout About Image 1"
          >
          <ul class="text-left ml-5 mb-5">
            <li>{{ $t('l11') }}</li>
            <li>{{ $t('l12') }}</li>
            <li>{{ $t('l13') }}</li>
          </ul>
        </div>
      </div>
      <div class="row align-items-center justify-content-between py-5 py-md-10">
        <div
          class="col-12 col-lg-6 aos-init aos-animate text-center"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <img
            class="ss-about-image"
            src="../assets/about2.png"
            alt="Sprout About Image 2"
          >
          <ul class="text-left ml-5 mb-5">
            <li>{{ $t('l21') }}</li>
            <li>{{ $t('l22') }}</li>
            <li>{{ $t('l23') }}</li>
          </ul>
        </div>
        <div class="col-12 col-lg-6 text-center text-lg-left">
          <span class="ss-about-number">2</span>
          <h3 class="mb-5">
            {{ $t('h2') }}
          </h3>
          <p>{{ $t('t2') }}</p>
        </div>
      </div>
      <div class="row align-items-center justify-content-between py-5 py-md-10">
        <div class="col-12 col-lg-6 text-center text-lg-left">
          <span class="ss-about-number">3</span>
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
          <img
            class="ss-about-image"
            src="../assets/about3.png"
            alt="Sprout About Image 3"
          >
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
    "t1": "With Sprout, you will be able to understand all about your finances and how they work, while having fun.",
    "l11": "Clear path to financial learning",
    "l12": "Put learning into practice and start growing your money",
    "l13": "Get advice on how to make your money work for you",
    "h2": "Define financial goals",
    "t2": "Milestones cannot be achieved if they are not first set. Let us help you with that!",
    "l21": "Plan your investment goals",
    "l22": "Invest automatically without any worry",
    "l23": "Create investment challenges with Family and Friends",
    "h3": "Track your money",
    "t3": "And watch it grow, earn much more compared to traditional saving accounts with our team of experts and our smart algorithms.",
    "l31": "Easy to deposit and withdraw money",
    "l32": "Track investments daily",
    "l33": "The lowest price for investment account in Mexico"
  },
  "es": {
    "h1": "Aprende Finanzas Personales",
    "t1": "Con Sprout, tendrás la oportunidad de aprender desde lo más básico, hasta lo más avanzado del mundo de las finanzas",
    "l11": "Camino claro de aprendizaje, de cero a inversionista",
    "l12": "Pon el aprendizaje en práctica y empieza a hacer mejor uso de tu dinero",
    "l13": "Te aconsejamos para que uses mejor tu dinero a un precio accesible",
    "h2": "Define tus Metas de Inversión",
    "t2": "Sprout es una herramienta para alcanzar todas tus metas, ya sea que busques retirarte cómodamente, o quieras comprar algo que tengas en mente.",
    "l21": "Planea tus metas de inversión con Sprout",
    "l22": "Invierte automáticamente y sin darte cuenta",
    "l23": "Crea retos de inversión con familia y amigos",
    "h3": "Lleva un registro de tu Dinero",
    "t3": "En lugar de que tu dinero pierda valor en una cuenta bancaria, observa como día a día tu dinero crece con Sprout. Usamos la mejor tecnología para elegir la mejor inversión para ti.",
    "l31": "Usamos la misma encriptación que tu Banco",
    "l32": "Fácil de depositar y retirar dinero",
    "l33": "El precio más bajo para una cuenta de inversión en México"
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
.ss-about-number
  font-size: 4rem
  font-family: $ss-font-family-special
  color: $ss-font-color-blue
  font-weight: 700
  display: inline-block
  margin-right: 1rem
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
  border-bottom: 10px solid $ss-bg-color
  // text-decoration: underline solid $ss-color-gold
p
  font-size: 1.15rem
  font-family: $ss-font-family-special
  color: $ss-font-color-blue
.ss-about-image
  width: 50%
  margin: 0 auto
</style>
