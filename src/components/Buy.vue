<template>
  <div
    id="buy"
    class="ss-buy"
  >
    <div class="container">
      <div class="row align-items-center justify-content-between py-5 py-md-10">
        <div class="col-12 col-lg-4 text-center">
          <div class="ss-buy-box">
            <img
              class="ss-buy-image"
              :src="image1"
            >
            <h3 class="ss-buy-title">
              {{ $t('option1title') }}
            </h3>
            <ul class="ss-buy-description text-left pl-5 pr-5">
              <li>{{ $t('option1item1') }}</li>
              <li>{{ $t('option1item2') }}</li>
              <li>{{ $t('option1item3') }}</li>
              <li>{{ $t('option1item4') }}</li>
            </ul>
            <p class="ss-buy-price">
              Price: {{ $t('option1price') }}
            </p>
          </div>
        </div>
        <div class="col-12 col-lg-4 text-center">
          <div class="ss-buy-box">
            <img
              class="ss-buy-image"
              :src="image2"
            >
            <h3 class="ss-buy-title">
              {{ $t('option2title') }}
            </h3>
            <ul class="ss-buy-description text-left pl-5 pr-5">
              <li>{{ $t('option2item1') }}</li>
              <li>{{ $t('option2item2') }}</li>
              <li>{{ $t('option2item3') }}</li>
              <li>{{ $t('option2item4') }}</li>
              <li>{{ $t('option2item5') }}</li>
              <li>{{ $t('option2item6') }}</li>
            </ul>
            <p class="ss-buy-price">
              Price: {{ $t('option2price') }}
            </p>
          </div>
        </div>
        <div class="col-12 col-lg-4 text-center">
          <div class="ss-buy-box">
            <img
              class="ss-buy-image"
              :src="image3"
            >
            <h3 class="ss-buy-title">
              {{ $t('option3title') }}
            </h3>
            <ul class="ss-buy-description text-left pl-5 pr-5">
              <li>{{ $t('option3item1') }}</li>
              <li>{{ $t('option3item2') }}</li>
              <li>{{ $t('option3item3') }}</li>
              <li>{{ $t('option3item4') }}</li>
              <li>{{ $t('option3item5') }}</li>
              <li>{{ $t('option3item6') }}</li>
              <li>{{ $t('option3item7') }}</li>
            </ul>
            <p class="ss-buy-price">
              Price: {{ $t('option3price') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "option1title": "Saver",
    "option1item1": "Access basic financial courses",
    "option1item2": "Automatic Savings Tool",
    "option1item3": "Set your Financial Goals",
    "option1item4": "Start saving from $200 pesos",
    "option1price": "Free",
    "option2title": "Smart Saver",
    "option2item1": "Access all financial courses",
    "option2item2": "Automatic Investment Tools",
    "option2item3": "Tools for Investment Goals",
    "option2item4": "Start Investing from $ 200 pesos",
    "option2item5": "Access to Investments in Portfolios designed by Experts",
    "option2item6": "One consultation with our experts per month",
    "option2price": "$25 pesos / month or $ 250 pesos a year",
    "option3title": "Investor",
    "option3item1": "Access all financial courses",
    "option3item2": "Automatic Investment Tools",
    "option3item3": "Tools for Investment Goals",
    "option3item4": "Investments above $ 30 thousand pesos",
    "option3item5": "Access to Investments in Portfolios designed by Experts",
    "option3item6": "Permanent consultations with our experts",
    "option3item7": "Tailor-made investment strategies for you",
    "option3price": "1% of the Average Balance of your Investment. If you don't earn money we won't charge you"
  },
  "es": {
    "option1title": "Saver",
    "option1item1": "Accede a los cursos básicos de educación financiera",
    "option1item2": "Herramientas de Ahorro Automático",
    "option1item3": "Herramientas para Metas de Ahorro",
    "option1item4": "Empieza a Ahorrar desde $200 pesos",
    "option1price": "Free",
    "option2item1": "Accede a todos los cursos de educación financiera",
    "option2item2": "Herramientas de Inversión Automática",
    "option2item3": "Herramientas para Metas de Inversión",
    "option2item4": "Empieza a Invertir desde $200 pesos",
    "option2item5": "Acceso a Inversiones en Portafolios de Inversión diseñados por Expertos",
    "option2item6": "Una consulta con nuestros expertos al mes",
    "option2price": "$25 pesos al Mes o $250 pesos al año",
    "option3title": "Inversionista",
    "option3item1": "Accede a todos los cursos de educación financiera",
    "option3item2": "Herramientas de Inversión Automática",
    "option3item3": "Herramientas para Metas de Inversión",
    "option3item4": "Inversiones desde $30 mil pesos",
    "option3item5": "Acceso a Inversiones en Portafolios de Inversión diseñados por Expertos",
    "option3item6": "Consultas permanentes con nuestros expertos",
    "option3item7": "Diseño de tus estrategias de inversión a la medida",
    "option3price": "1% del Saldo Promedio de tu Inversión. Si no ganas Dinero no te cobramos"
  }
}
</i18n>

<script>
export default {
  name: 'Buy',
  components: {},
  props: {},
  data: function () {
    return {
      image1: require('../assets/sapling.png'),
      image2: require('../assets/leaf.png'),
      image3: require('../assets/tree.png'),
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.ss-buy
  background-color: $ss-bg-color
  padding-top: 2rem
.ss-buy-box
  background-color: $ss-bg-color-white
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1)
  padding: 0 0 2rem 0
  margin: 1rem
.ss-buy-image
  width: 100%
.ss-buy-title
  font-size: 1.75rem
  margin: 1rem
  font-weight: 700
  font-family: $ss-font-family-special
.ss-buy-description
  font-size: 1rem
  min-height: 5rem
.ss-buy-price
  font-family: $ss-font-family-special
  font-weight: 600
  font-size: 1rem
  margin: 1rem
</style>
