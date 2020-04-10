<template>
  <div
    id="buy"
    class="ss-buy"
  >
    <div class="container">
      <div class="row align-items-center justify-content-between py-5 py-md-10">
        <div
          v-for="option in options"
          :key="option.id"
          class="col-12 col-lg-4 text-center"
        >
          <div class="ss-buy-box">
            <img
              class="ss-buy-image"
              :src="option.image"
            >
            <h3 class="ss-buy-title">
              {{ option.title }}
            </h3>
            <p class="ss-buy-description">
              {{ option.description }}
            </p>
            <p class="ss-buy-price">
              Price: {{ option.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Buy',
  components: {},
  props: {},
  data: function () {
    return {
      options: [
        {
          id: 1,
          image: require('../assets/sapling.png'),
          title: 'Sapling',
          description: 'This is the description of a basic plan',
          price: 'Free',
        },
        {
          id: 2,
          image: require('../assets/leaf.png'),
          title: 'Plant',
          description: 'This is the description of an intermediate plan plan',
          price: '$20 / month',
        },
        {
          id: 3,
          image: require('../assets/tree.png'),
          title: 'Tree',
          description: 'This is the description of the most expensive plan',
          price: '$50 / month',
        },
      ],
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
  margin: 1rem
  min-height: 3rem
.ss-buy-price
  font-family: $ss-font-family-special
  font-weight: 600
  font-size: 1rem
  margin: 1rem
</style>
