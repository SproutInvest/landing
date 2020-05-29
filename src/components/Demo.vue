<template>
  <div class="ss-demo">
    <div class="container">
      <div class="row align-items-center justify-content-between py-5 py-md-10">
        <div class="col-12 col-lg-9 text-center text-lg-left">
          <div class="ss-demo-section py-5">
            <h3>{{ $t('chartTitle') }}</h3>
            <div id="chart">
              <apexchart
                type="area"
                height="600"
                :options="chartOptions"
                :series="series"
              />
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3 text-center text-lg-left">
          <div class="ss-demo-slider-section">
            <label>{{ $t('initial') }}</label>
            <br>
            <label>{{ formatCurrency(initialAmount) }}</label>
            <b-form-input
              id="initialAmountRange"
              v-model="initialAmount"
              class="ss-demo-range"
              type="range"
              min="100"
              max="30000"
              step="100"
              @change="updateChart"
            />
            <br><br>
            <label>{{ $t('deposit') }}</label>
            <br>
            <label>{{ formatCurrency(monthlyDeposit) }}</label>
            <b-form-input
              id="monthlyDepositRange"
              v-model="monthlyDeposit"
              class="ss-demo-range"
              type="range"
              min="100"
              max="3000"
              step="100"
              @change="updateChart"
            />
            <br><br>
            <label>{{ $t('term') }}</label>
            <br>
            <label>{{ investmentTerm }} {{ $t('years') }}</label>
            <b-form-input
              id="investmentTermRange"
              v-model="investmentTerm"
              class="ss-demo-range"
              type="range"
              min="3"
              max="40"
              step="1"
              @change="updateChart"
            />
            <br>
            <br>
            <small>{{ $t('disclaimer') }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "initial": "Initial Investment Amount",
    "deposit": "Monthly Deposit Amount",
    "term": "Investment Term",
    "years": "years",
    "disclaimer": "*assuming risk-free rate of 6%",
    "chartTitle": "English Title"
  },
  "es": {
    "initial": "Monto de Inversión Inicial",
    "deposit": "Monto de Depósito Mensual",
    "term": "Plazo de Inversión",
    "years": "años",
    "disclaimer": "*Tasa Libre de Riesgo 6%",
    "chartTitle": "Spanish Title"
  }
}
</i18n>

<script>
import VueApexCharts from 'vue-apexcharts'

const BANK_RATE = 0.02
const SPROUT_RATE = 0.09

function generateSeries(initialAmount = 10000, monthlyDeposit = 1000, rate, investmentTerm = 10) {
  let value = initialAmount
  const year = 1
  let series = []
  for (let i = 0; i < investmentTerm; i++) {
    series.push([year + i, value])
    value = Math.floor(value * (1 + rate)) + 12 * monthlyDeposit
  }
  return series
}

function getSeries(amount, deposit, term, locale) {
  return [
    {
      name: locale === 'es' ? 'Banco' : 'Savings Bank',
      data: generateSeries(amount, deposit, BANK_RATE, term),
    },
    {
      name: locale === 'es' ? 'Inversión en Sprout' : 'Sprout Investment',
      data: generateSeries(amount, deposit, SPROUT_RATE, term),
    },
  ]
}

const formatter = function (locale) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: locale === 'es' ? 'MXN' : 'USD',
    maximumSignificantDigits: 3,
  })
}

export default {
  name: 'Demo',
  components: {
    apexchart: VueApexCharts,
  },
  props: {},
  data: function() {
    const ga = this.$ga
    return {
      locale: 'en',
      initialAmount: 10000,
      monthlyDeposit: 1000,
      investmentTerm: 10,
      series: getSeries(this.initialAmount, this.monthlyDeposit, this.investmentTerm, this.locale),
      chartOptions: {
        chart: {
          type: 'area',
          height: 1000,
          stacked: false,
          toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: true,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false | '<img src="/static/icons/reset.png" width="20">',
              customIcons: [],
            },
            autoSelected: 'zoom', 
          },
          events: {
            click() {
              ga.event({
                eventCategory: 'demo',
                eventAction: 'click',
                eventLabel: 'chartClick',
              })
            },
          },
        },
        colors: ['#EFF0F3', '#B3EBDE'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'straight',
        },
        fill: {
          type: 'solid',
          opacity: 1,
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          fontFamily: 'Open Sans',
          fontSize: '15px',
          onItemClick: {
            toggleDataSeries: false,
          },
          onItemHover: {
            highlightDataSeries: false,
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: [],
              fontSize: '12px',
              fontFamily: 'Open Sans',
              fontWeight: 400,
              cssClass: 'apexcharts-yaxis-label',
            },
            formatter: (value) => { return formatter(this.locale).format(value) },
          },
        },
      },
    }
  },
  mounted () {
    const locale = localStorage.getItem('locale')
    if (locale) {
      this.locale = locale
      this.updateChart(false)
    }
  },
  methods: {
    updateChart: function (sendEventToGa = true) {
      if (sendEventToGa) {
        this.$ga.event({
          eventCategory: 'demo',
          eventAction: 'slide',
          eventLabel: 'chartSlide',
        })
      }
      this.series = getSeries(this.initialAmount, this.monthlyDeposit, this.investmentTerm, this.locale)
    },
    formatCurrency: function (value) {
      return formatter(this.locale).format(value)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.ss-demo
  background-color: $ss-bg-color-white
.ss-demo-section
  font-family: $ss-font-family-special
  font-size: 3rem
  font-weight: 700
  input
    width: 8rem
.b-form-input
  &::-webkit-slider-thumb
    background-color: $ss-font-color-sprout
  &::-moz-range-thumb
    background-color: $ss-font-color-sprout
  &::-ms-thumb
    background-color: $ss-font-color-sprout
.ss-demo-range::-webkit-slider-thumb
  background: $ss-font-color-sprout
.ss-demo-range::-moz-range-thumb
  background: $ss-font-color-sprout
.ss-demo-range::-ms-thumb
  background: $ss-font-color-sprout
small
  font-size: 0.8rem
</style>
