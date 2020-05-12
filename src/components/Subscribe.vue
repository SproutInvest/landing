<template>
  <div>
    <div
      v-show="!submitted && showOptions"
      class="ss-input-group input-group mb-1"
    >
      <input
        v-model="name"
        type="text"
        class="form-control px-3"
        :placeholder="$t('fullName')"
        aria-label="Name"
      >
      <div class="input-group-append">
        <select v-model="plan">
          <option
            selected
            value="saver"
          >
            Saver
          </option>
          <option value="smart_saver">
            Smart Saver
          </option>
          <option value="investor">
            Investor
          </option>
        </select>
      </div>
    </div>
    <div
      v-show="!submitted"
      class="ss-input-group input-group mb-1"
    >
      <input
        v-model="email"
        type="email"
        class="form-control px-3"
        placeholder="your@mail.com"
        aria-label="Subscribe"
      >
      <div
        class="input-group-append"
      >
        <button
          class="btn"
          type="submit"
          @click="subscribeEmail"
        >
          <span v-show="!submitting">{{ $t('subscribe') }}</span>
          <font-awesome-icon
            v-show="submitting"
            icon="spinner"
          />
        </button>
      </div>
    </div>
    <div
      v-show="submitted"
      class="ss-submitted-text"
    >
      {{ $t('great') }}
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "fullName": "Full Name",
    "age": "Age",
    "subscribe": "Subscribe",
    "great": "Great! You'll be hearing from us very soon."
  },
  "es": {
    "fullName": "Nombre Completo",
    "age": "Años",
    "subscribe": "Suscribir",
    "great": "¡Excelente! Tendrás noticias de Sprout muy pronto"
  }
}
</i18n>

<script>
import axios from 'axios'

export default {
  name: 'Subscribe',
  props: {
    showOptions: {
      type: Boolean,
      default: false,
    },
  },
  data: function() {
    return {
      email: null,
      name: null,
      plan: 'saver',
      submitted: false,
      submitting: false,
    }
  },
  methods: {
    subscribeEmail: function () {
      if (!this.email) {
        return
      }
      const locale = localStorage.getItem('locale')
      const url = 'https://hna2ztnutb.execute-api.us-east-2.amazonaws.com/default'
      this.submitting = true
      axios
        .post(url, {
          email: `${ this.email } - ${ this.name } - ${ this.plan } - ${ locale }`,
        })
        .then(() => {
          this.submitting = false
          this.submitted = true
        })
        .catch(() => {
          this.submitting = false
          this.submitted = true
        })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.ss-input-group
  .form-control
    border-top-right-radius: 0
    border-bottom-right-radius: 0
    border-top-left-radius: 0.25rem
    border-bottom-left-radius: 0.25rem
    border-color: transparent
    background: rgba(255, 255, 255, 0.3)
    color: $ss-font-color-white
    position: relative
    flex: 1 1 auto
    width: 1%
    margin-bottom: 0.2rem
    display: block
    height: calc(3.375rem + 2px)
    padding: 0.9375rem 0.9375rem
      padding-right: 0.9375rem
      padding-left: 0.9375rem
    font-size: 1rem
    font-weight: 400
    line-height: 1.5
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out
    &:focus 
      border: 1px solid #e5e5e5
      box-shadow: none
  .input-group-append
    margin-left: -1px
    display: flex
    margin-bottom: 0.2rem
    .btn
      color: $ss-font-color-black
      background-color: #ffffff
      border-color: #ffffff
      border-top-left-radius: 0
      border-bottom-left-radius: 0
      border-top-right-radius: 0.25rem !important
      border-bottom-right-radius: 0.25rem !important
      min-width: 10rem
    select
      width: 10rem
      border-width: 0
      border-top-left-radius: 0
      border-bottom-left-radius: 0
      border-top-right-radius: 0.25rem !important
      border-bottom-right-radius: 0.25rem !important
      background: rgba(255, 255, 255, 0.3)
.ss-submitted-text
  border-top-right-radius: 0.25rem
  border-bottom-right-radius: 0.25rem
  border-top-left-radius: 0.25rem
  border-bottom-left-radius: 0.25rem
  border: 1px solid #e5e5e5
  background: rgba(255, 255, 255, 0.1)
  color: $ss-font-color-white
  height: calc(3.375rem + 2px)
  padding: 0.9375rem 0.9375rem
  width: 100%
  text-align: center
</style>
