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
    "option1title": "Sapling",
    "option1item1": "This is the description of a basic plan",
    "option1item2": "This is the description of a basic plan",
    "option1item3": "This is the description of a basic plan",
    "option1price": "Free",
    "option2title": "Plant",
    "option2item1": "This is the description of a basic plan",
    "option2item2": "This is the description of a basic plan",
    "option2item3": "This is the description of a basic plan",
    "option2price": "$20 / month",
    "option3title": "Tree",
    "option3item1": "This is the description of a basic plan",
    "option3item2": "This is the description of a basic plan",
    "option3item3": "This is the description of a basic plan",
    "option3price": "$50 / month"
  },
  "es": {
    "option1title": "Sapling",
    "option1item1": "This is the description of a basic plan",
    "option1item2": "This is the description of a basic plan",
    "option1item3": "This is the description of a basic plan",
    "option1price": "Free",
    "option2title": "Plant",
    "option2item1": "This is the description of a basic plan",
    "option2item2": "This is the description of a basic plan",
    "option2item3": "This is the description of a basic plan",
    "option2price": "$20 / month",
    "option3title": "Tree",
    "option3item1": "This is the description of a basic plan",
    "option3item2": "This is the description of a basic plan",
    "option3item3": "This is the description of a basic plan",
    "option3price": "$50 / month"
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
