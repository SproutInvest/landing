<template>
  <div
    id="about"
    class="ss-about"
  >
    <div class="container">
      <div class="row align-items-center justify-content-between py-5 py-md-10">
        <div class="col-12 col-lg-6 text-center text-lg-left">
          <h3 class="mb-5">
            Learn the 101 of your money
          </h3>
          <p>With Sprout, you will be able to understand all about your finances and how they work.</p>
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
            <li>Clear overview of all finances</li>
            <li>All of your accounts in one place</li>
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
            <li>Set custom spending limits</li>
            <li>Get realtime budget alerts</li>
            <li>Devise a clear spending plan</li>
          </ul>
        </div>
        <div class="col-12 col-lg-6 text-center text-lg-left">
          <h3 class="mb-5">
            Define financial goals
          </h3>
          <p>Milestones cannot be achieved if they are not first set. Let us help you with that!</p>
        </div>
      </div>
      <div class="row align-items-center justify-content-between py-5 py-md-10">
        <div class="col-12 col-lg-6 text-center text-lg-left">
          <h3 class="mb-5">
            Track your money
          </h3>
          <p>And watch it grow, earn much more compared to traditional banks with our team of experts and our smart algorithms.</p>
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
            <li>Cancel wasteful accounts</li>
            <li>Schedule payments on the go</li>
            <li>Manage your debt</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
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
