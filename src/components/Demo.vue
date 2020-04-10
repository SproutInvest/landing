<template>
  <div class="ss-demo">
    <div class="container">
      <div class="row align-items-center justify-content-between py-5 py-md-10">
        <div class="col-12 col-lg-9 text-center text-lg-left">
          <div class="ss-demo-section py-5">
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
            <label>Initial Investment Amount</label>
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
            <label>Monthly Deposit Amount</label>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

const BANK_RATE = 0.02
const SPROUT_RATE = 0.09

function generateSeries(initialAmount = 10000, monthlyDeposit = 1000, rate) {
  let value = initialAmount
  const now = new Date()
  const year = now.getFullYear()
  let series = []
  for (let i = 0; i < 20; i++) {
    series.push([year + i, value])
    value = Math.floor(value * (1 + rate)) + 12 * monthlyDeposit
  }
  return series
}

function getSeries(amount, deposit) {
  return [
    {
      name: 'Savings Bank',
      data: generateSeries(amount, deposit, BANK_RATE),
    },
    {
      name: 'Sprout Investment',
      data: generateSeries(amount, deposit, SPROUT_RATE),
    },
  ]
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'MXN',
  maximumSignificantDigits: 3,
})

export default {
  name: 'Demo',
  components: {
    apexchart: VueApexCharts,
  },
  props: {},
  data: function() {
    return {
      initialAmount: 10000,
      monthlyDeposit: 1000,
      series: getSeries(this.initialAmount, this.monthlyDeposit),
      chartOptions: {
        chart: {
          type: 'area',
          height: 1000,
          stacked: false,
          events: {
          },
        },
        colors: ['#EFF0F3', '#40c7c0'],
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
            formatter: (value) => { return formatter.format(value) },
          },
        },
      },
    }
  },
  methods: {
    updateChart: function () {
      this.series = getSeries(this.initialAmount, this.monthlyDeposit)
    },
    formatCurrency: function (value) {
      return formatter.format(value)
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
</style>
