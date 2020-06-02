<template>
  <div class="ss-risk-profile">
    <div class="container pb-5 pt-5">
      <div>
        <h1 class="mb-2">
          {{ $t('title') }}
        </h1>
        <h3 class="mb-2">
          {{ $t('subHeader1') }}
        </h3>
        <h3 class="mb-2">
          {{ $t('subHeader2') }}
        </h3>
      </div>
      <b-form
        v-if="show"
        @submit="onSubmit"
        @reset="onReset"
      >
        <b-form-group
          id="input-group-1"
          class="ss-text"
          :label="$t('enterEmail')"
          label-for="input-1"
          :description="$t('emailDescription')"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="name@mail.com"
          />
        </b-form-group>
        <b-form-group
          id="input-group-2"
          class="ss-text"
          :label="$t('enterName')"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.name"
            required
            placeholder="Full name"
          />
        </b-form-group>
        <b-form-group
          id="input-group-3"
          class="ss-text"
          :label="$t('enterDob')"
          label-for="input-3"
        >
          <b-form-datepicker
            id="input-3"
            v-model="form.dob"
            show-decade-nav
            class="mb-2"
          />
        </b-form-group>
        <b-form-group 
          :label="$t('jobLabel')"
          class="ss-select"
        >
          <b-form-select
            v-model="form.job"
            :options="jobOptions"
            class="mb-3"
            disabled-field="notEnabled"
          />
        </b-form-group>
        <b-form-group
          :label="$t('educationLabel')"
          class="ss-select"
        >
          <b-form-select
            v-model="form.education"
            :options="educationOptions"
            class="mb-3"
            disabled-field="notEnabled"
          />
        </b-form-group>
        <b-form-group :label="$t('bankAccountLabel')">
          <b-form-radio-group
            v-model="form.bankAccount"
            :options="yesNo"
            required
            class="mb-3"
            disabled-field="notEnabled"
          />
        </b-form-group>
        <b-form-group :label="$t('objectiveLabel')">
          <b-form-radio-group
            v-model="form.objective"
            :options="objectiveOptions"
            class="mb-3"
            disabled-field="notEnabled"
            stacked
          />
        </b-form-group>
        <b-form-group :label="$t('horizonLabel')">
          <b-form-radio-group
            v-model="form.horizon"
            :options="horizonOptions"
            class="mb-3"
            disabled-field="notEnabled"
            stacked
          />
        </b-form-group>
        <b-form-group
          id="input-group-4"
          :label="$t('investIncomeLabel')"
          label-for="input-4"
          :description="$t('investIncomeDescription')"
        >
          <b-form-input
            id="input-4"
            v-model="form.investIncome"
            placeholder=""
          />
        </b-form-group>
        <b-form-group
          :label="$t('returnLabel')"
          :description="$t('returnDescription')"
        >
          <b-form-radio-group
            v-model="form.return"
            :options="returnOptions"
            class="mb-3"
            disabled-field="notEnabled"
            stacked
          />
        </b-form-group>
        <b-form-group :label="$t('riskReturnLabel')">
          <b-form-radio-group
            v-model="form.riskReturn"
            :options="riskReturnOptions"
            buttons
            button-variant="outline-primary"
            size="sm"
            name="radio-btn-outline"
          />
        </b-form-group>
        <b-form-group :label="$t('lossLabel')">
          <b-form-radio-group
            v-model="form.loss"
            :options="lossOptions"
            class="mb-3"
            disabled-field="notEnabled"
            stacked
          />
        </b-form-group>
        <b-form-group :label="$t('ownBusinessLabel')">
          <b-form-radio-group
            v-model="form.ownBusiness"
            :options="yesNo"
            class="mb-3"
            disabled-field="notEnabled"
          />
        </b-form-group>
        <b-form-group :label="$t('riskLabel')">
          <b-form-radio-group
            v-model="form.risk"
            :options="riskOptions"
            class="mb-3"
            disabled-field="notEnabled"
            stacked
          />
        </b-form-group>
        <b-form-group :label="$t('lifestyleLabel')">
          <b-form-radio-group
            v-model="form.lifestyle"
            :options="lifestyleOptions"
            class="mb-3"
            disabled-field="notEnabled"
            stacked
          />
        </b-form-group>
        <b-form-group :label="$t('purchaseLabel')">
          <b-form-radio-group
            v-model="form.purchase"
            :options="purchaseOptions"
            class="mb-3"
            disabled-field="notEnabled"
          />
        </b-form-group>
        <div>
          <h2 class="mb-2">
            {{ $t('headerPremium') }}
          </h2>
          <h3 class="mb-2">
            {{ $t('subheaderPremium1') }}
          </h3>
          <h3 class="mb-2">
            {{ $t('subheaderPremium2') }}
          </h3>
        </div>
        <div>
          <b-button
            type="button"
            variant="info"
            class="mr-2 mb-4"
          >
            {{ $t('buttonPremium') }}
          </b-button>
        </div>
        <b-form-group :label="$t('housingLabel')">
          <b-form-radio-group
            v-model="form.housing"
            :options="housingOptions"
            class="mb-3"
            required
            disabled-field="notEnabled"
          />
        </b-form-group>
        <b-form-group :label="$t('mortgageLabel')">
          <b-form-input
            v-model="form.mortgage"
            required
            placeholder="50000"
          />
        </b-form-group>
        <b-form-group
          class="ss-text"
          :label="$t('mortgageDateLabel')"
        >
          <b-form-datepicker
            v-model="form.mortgageDate"
            show-decade-nav
            class="mb-2"
          />
        </b-form-group>
        <b-form-group :label="$t('mortgageYearsLabel')">
          <b-form-input
            v-model="form.mortgageYears"
            required
            placeholder="10"
          />
        </b-form-group>
        <b-form-group :label="$t('investmentLabel')">
          <b-form-radio-group
            v-model="form.investment"
            :options="yesNoOther"
            class="mb-3"
            disabled-field="notEnabled"
          />
        </b-form-group>
        <b-form-group
          :label="$t('investmentAmountLabel')"
          :description="$t('investmentAmountDescription')"
        >
          <b-form-input
            v-model="form.investmentAmount"
            required
            placeholder="25000"
          />
        </b-form-group>
        <b-form-group :label="$t('companySharesLabel')">
          <b-form-radio-group
            v-model="form.companyShares"
            :options="yesNoOther"
            class="mb-3"
            required
            disabled-field="notEnabled"
          />
        </b-form-group>
        <b-form-group
          :label="$t('incomeLabel')"
          :description="$t('incomeDescription')"
        >
          <b-form-input
            v-model="form.income"
            required
            placeholder="25000"
          />
        </b-form-group>
        <b-form-group :label="$t('debtLabel')">
          <b-form-radio-group
            v-model="form.debt"
            :options="yesNo"
            class="mb-3"
            required
            disabled-field="notEnabled"
          />
        </b-form-group>
        <b-form-group
          :label="$t('debtPaymentLabel')"
          :description="$t('debtPaymentDescription')"
        >
          <b-form-input
            v-model="form.debtPayment"
            required
            placeholder="0"
          />
        </b-form-group>
        <b-form-group :label="$t('sourceLabel')">
          <b-form-radio-group
            v-model="form.source"
            :options="sourceOptions"
            class="mb-3"
            required
            stacked
            disabled-field="notEnabled"
          />
        </b-form-group>
        <b-button
          type="submit"
          variant="primary"
          class="mr-2"
        >
          Submit
        </b-button>
        <b-button
          type="reset"
          variant="danger"
        >
          Reset
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "title": "Investor Profile",
    "subHeader1": "Tell us a little about yourself and your needs as an investor. We understand that some questions may be sensitive, personal or private, however they are necessary for us to create an investment plan tailored to you.",
    "subHeader2": "All information is used by us to create your personlized plan and it is secure with us.",
    "headerPremium": "Premium Investors",
    "subheaderPremium1": "La siguiente sección está dedicada a inversionistas que desean conocer su situación patrimonial de cualquier punto de vista. El patrimonio no solo se mide en recursos monetarios sino también en el potencial de generar estos recursos. Por ejemplo, con estos resultados podrías saber cuando es importante contratar un seguro de vida y por qué monto dependiendo en varios factores.",
    "subheaderPremium2": "Actualmente estamos ofreciendo este servicio premium sin costo por ser clientes fundadores. si no estás interesado puedes proceder a enviar tu formulario.",
    "fullName": "Full Name",
    "enterEmail": "Enter Email ID",
    "emailDescription": "We will not share your data with third parties",
    "enterName": "Full Name:",
    "enterDob": "Date of Birth:",
    "jobLabel": "What do you do for a living?",
    "educationLabel": "What is the highest level of education completed by you?",
    "bankAccountLabel": "Do you have a Bank Account in Mexico?",
    "objectiveLabel": "What is the main objective of your investment?",
    "horizonLabel": "How long would you like to keep your investments?",
    "investIncomeLabel": "What monthly income do you currently need from your portfolio?",
    "investIncomeDescription": "*If you don't need any regular income from your portfolio, enter 0",
    "returnLabel": "What profit would you like to receive from your investment?",
    "returnDescription": "Remember that the higher your potential profit or profitability, the greater the risk",
    "riskReturnLabel": "What situation do you identify better with?",
    "lossLabel": "If your Investment portfolio lost 10% in a month, what would you do?",
    "ownBusinessLabel": "Do you currently have your own business or have you tried to start a business?",
    "riskLabel": "What do you perceive to be more risky, having your own business or working for someone else with a possibility of losing your job?",
    "lifestyleLabel": "If you were to lose your source of income, how long could you maintain your lifestyle?",
    "purchaseLabel": "Do you plan to use your invested money to buy something? (Down payment for a House, Car, Vacation)?",
    "buttonPremium": "Continue with questionnaire for Premium Investors",
    "housingLabel": "What's your housing situation?",
    "mortgageLabel": "If you're currently paying off a mortgage, about how much do you need to pay? (*If you do not have to, then answer '0')",
    "mortgageDateLabel": "If you are currently paying a mortgage, on what date did you buy it?",
    "mortgageYearsLabel": "How long is the duration (in years) of your mortgage? (*If you don't have a mortgage answer '0')",
    "investmentLabel": "Do you currently have Savings or Investments?",
    "investmentAmountLabel": "Could you indicate the approximate amount of your Savings or Investment (MXN)?",
    "investmentAmountDescription": "Enter the approximate amount of your savings in Mexican pesos. If you're just going to start as an investor, enter 0",
    "companySharesLabel": "Do you have shares or investments related to the Company where you work?",
    "incomeLabel": "What is your Approximate Monthly Income?",
    "incomeDescription": "Enter the approximate amount of your monthly income (e.g. 25000).",
    "debtLabel": "At the moment, do you have any debt other than a Mortgage? (e.g. car in lease or credit, credit card, etc.)",
    "debtPaymentLabel": "Could you give us a rough estimate of how much you need to pay off your debts?",
    "debtPaymentDescription": "Enter the approximate amount of your debt (e.g. 250000) if you don't have debts currently please enter 0",
    "sourceLabel": "In case you have any savings or investments currently, how did you generate these investments?"
  },
  "es": {
    "title": "Investor Profile",
    "subHeader1":"Platícanos un poco sobre tí y tus necesidades como inversionista. Sabemos que algunas preguntas pueden ser de carácter sensible, personales o privadas, no obstante son necesarias para que hagamos nuestro trabajo lo mejor posible y te hagamos un plan de inversión a tu medida.",
    "subHeader2":"También te prometemos que toda la información se maneja con las más estrictas medidas de seguridad y que tu información es confidencial con nosotros.",
    "headerPremium": "Premium Investors",
    "subheaderPremium1": "La siguiente sección está dedicada a inversionistas que desean conocer su situación patrimonial de cualquier punto de vista. El patrimonio no solo se mide en recursos monetarios sino también en el potencial de generar estos recursos. Por ejemplo, con estos resultados podrías saber cuando es importante contratar un seguro de vida y por qué monto dependiendo en varios factores.",
    "subheaderPremium2": "Actualmente estamos ofreciendo este servicio premium sin costo por ser clientes fundadores. si no estás interesado puedes proceder a enviar tu formulario.",
    "fullName": "Full Name",
    "enterEmail": "Email ID",
    "emailDescription": "No compartiremos sus datos con terceros",
    "enterName": "Nombre (s):",
    "enterDob": "Fecha de Nacimiento:",
    "jobLabel": "¿A qué te dedicas?",
    "educationLabel": "¿Cuál es tu último grado de Estudios?",
    "bankAccountLabel": "¿Tienes una Cuenta Bancaria en México?",
    "objectiveLabel": "¿Cual es el principal objetivo de tu inversión?",
    "horizonLabel": "¿Cuanto tiempo te gustaría mantener tus inversiones?",
    "investIncomeLabel": "¿Qué ingreso mensual necesitas de tu portafolio actualmente?",
    "investIncomeDescription": "*Si no necesitas ingresos de tu portafolio pon 0",
    "returnLabel": "¿Que ganancia te gustaría recibir de tu inversión?",
    "returnDescription": "Recuerda que, entre mayor sea tu ganancia potencial o tu rentabilidad, mayor el riesgo",
    "riskReturnLabel": "¿Con qué situación te Identificas Mejor?",
    "lossLabel": "Si tu portafolio de Inversión perdiera 10% en un mes, que harías?",
    "ownBusinessLabel": "¿Actualmente tienes un Negocio Propio o has tratado de emprender un negocio?",
    "riskLabel": "¿Que percibes más riesgoso, tener un negocio propio o trabajar para alguien más y quedarte sin trabajo?",
    "lifestyleLabel": "¿Si te quedaras sin tu fuente de ingresos, cuánto tiempo podrías mantener tu estilo de vida?",
    "purchaseLabel":"¿Tienes pensado usar tu dinero invertido para comprar algo? (Enganche de una Casa, Coche, un regalo, un viaje)?",
    "buttonPremium": "¿Continuar con el cuestionario de Premium Investors?",
    "housingLabel": "¿Cual es tu situación habitacional??",
    "mortgageLabel": "¿Si actualmente estás pagando una hipoteca, aproximadamente cuanto te hace falta pagar? (*Si no tienes contesta '0')",
    "mortgageDateLabel": "¿Si actualmente estás pagando una hipoteca, en que fecha la contrataste?",
    "mortgageYearsLabel": "¿A qué plazo en años contrataste tu hipoteca? (*Si no tienes hipoteca contesta '0')",
    "investmentLabel": "Tienes Ahorros o Inversiones actualmente?",
    "investmentAmountLabel": "Podrías Indicar el monto aproximado de tu Ahorro o Inversión (MXN)?",
    "investmentAmountDescription": "Ingresa el monto aproximado de tus ahorros en pesos mexicanos (25000). Si apenas vas a empezar como inversionista ingresa 0",
    "companySharesLabel": "¿Tienes acciones o inversiones relacionadas a la Empresa en donde trabajas?",
    "incomeLabel": "¿Cuál es tu Ingreso Mensual Aproximado?",
    "incomeDescription": "Ingresa el monto aproximado de tus ingresos mensuales (Ej. 25000).",
    "debtLabel": "¿Por el momento, Tienes alguna deuda que no sea una Hipoteca? (Ej. coche en arrendamiento o a crédito, tarjeta de crédito, etc)",
    "debtPaymentLabel": "¿Nos podrías dar un aproximado de cuanto te falta pagar de tus deudas?",
    "debtPaymentDescription": "Ingresa el monto aproximado de tu deuda (Ej. 250000) si no tienes deudas actualmente escribe 0",
    "sourceLabel": "¿En caso de que tengas ahorros o inversiones actualmente, como generaste estos recursos?"
  }
}
</i18n>

<script>
const jobLanguageOptions= require('./riskProfileOptions.json')['jobLanguageOptions']
const educationLanguageOptions= require('./riskProfileOptions.json')['educationLanguageOptions']
const yesNoLanguage= require('./riskProfileOptions.json')['yesNoLanguage']
const objectiveLanguageOptions= require('./riskProfileOptions.json')['objectiveLanguageOptions']
const horizonLanguageOptions= require('./riskProfileOptions.json')['horizonLanguageOptions']
const returnLanguageOptions= require('./riskProfileOptions.json')['returnLanguageOptions']
const riskReturnLanguageOptions= require('./riskProfileOptions.json')['riskReturnLanguageOptions']
const lossLanguageOptions= require('./riskProfileOptions.json')['lossLanguageOptions']
const riskLanguageOptions= require('./riskProfileOptions.json')['riskLanguageOptions']
const lifestyleLanguageOptions= require('./riskProfileOptions.json')['lifestyleLanguageOptions']
const purchaseLanguageOptions= require('./riskProfileOptions.json')['purchaseLanguageOptions']
const housingLanguageOptions= require('./riskProfileOptions.json')['housingLanguageOptions']
const yesNoOtherLanguage= require('./riskProfileOptions.json')['yesNoOtherLanguage']
const sourceLanguageOptions= require('./riskProfileOptions.json')['sourceLanguageOptions']
export default {
  name: 'RiskProfile',
  components: {},
  data: function() {
    return {
      locale: 'en',
      form: {
        email: '',
        name: '',
        dob: '',
        job: null,
        education: null,
        bankAccount: '',
        objective: '',
        horizon: '',
        investIncome: '',
        return: '',
        riskReturn: '',
        loss: '',
        ownBusiness: '',
        risk: '',
        lifestyle: '',
        purchase: '',
        housing: '',
        mortgage: '',
        mortgageDate: '',
        mortgageYears: '',
        investment: '',
        investmentAmount: '',
        companyShares: '',
        income: '',
        debt: '',
        debtPayment: '',
        source: '',
      },
      jobOptions: jobLanguageOptions[this.locale],
      educationOptions: educationLanguageOptions[this.locale],
      yesNo: yesNoLanguage[this.locale],
      objectiveOptions: objectiveLanguageOptions[this.locale],
      horizonOptions: horizonLanguageOptions[this.locale],
      returnOptions: returnLanguageOptions[this.locale],
      riskReturnOptions: riskReturnLanguageOptions[this.locale],
      lossOptions:lossLanguageOptions[this.locale],
      riskOptions: riskLanguageOptions[this.locale],
      lifestyleOptions: lifestyleLanguageOptions[this.locale],
      purchaseOptions: purchaseLanguageOptions[this.locale],
      housingOptions: housingLanguageOptions[this.locale],
      yesNoOther: yesNoOtherLanguage[this.locale],
      sourceOptions: sourceLanguageOptions[this.locale],
      show: true,
    }
  },
  mounted () {
    this.$ga.page('/risk_profile')
    this.localeInterval = setInterval(function () {
      const locale = localStorage.getItem('locale')
      if (locale !== this.locale) {
        this.locale = locale
        this.jobOptions = jobLanguageOptions[locale]
        this.educationOptions = educationLanguageOptions[locale]
        this.yesNo = yesNoLanguage[locale]
        this.objectiveOptions = objectiveLanguageOptions[locale]
        this.horizonOptions = horizonLanguageOptions[locale]
        this.returnOptions = returnLanguageOptions[locale]
        this.riskReturnOptions = riskReturnLanguageOptions[locale]
        this.lossOptions = lossLanguageOptions[locale]
        this.riskOptions = riskLanguageOptions[locale]
        this.lifestyleOptions = lifestyleLanguageOptions[locale]
        this.purchaseOptions = purchaseLanguageOptions[locale]
        this.housingOptions = housingLanguageOptions[locale]
        this.yesNoOther = yesNoOtherLanguage[locale]
        this.sourceOptions = sourceLanguageOptions[locale]
      }
    }.bind(this), 1000)
  },
  beforeDestroy() {
    clearInterval(this.localeInterval)
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.dob = ''
      this.form.job = null
      this.form.education = null
      this.form.bankAccount= '',
      this.form.objective = '',
      this.form.horizon = '',
      this.form.investIncome = '',
      this.form.return = '',
      this.form.riskReturn = '',
      this.form.loss = '',
      this.form.ownBusiness = '',
      this.form.risk = '',
      this.form.lifestyle = '',
      this.form.purchase = '',
      this.form.housing = '',
      this.form.mortgage = '',
      this.form.mortgageDate = '',
      this.form.mortgageYears = '',
      this.form.investment = '',
      this.form.investmentAmount = '',
      this.form.companyShares = '',
      this.form.income = '',
      this.form.debt = '',
      this.form.debtPayment = '',
      this.form.source = '',
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>

<style lang="sass" scoped>
.ss-risk-profile
  background-color: $ss-bg-color
.container
  max-width: 800px !important
  background-color: $ss-bg-color-lighter
h1
  font-size: 2.25rem
  text-align: center
h2
  font-size: 1.2rem
h3
  font-size: 1rem
.ss-select
  width: 75%
.ss-text
  width: 75%
</style>
