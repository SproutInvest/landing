<template>
  <div class="container">
    <img
      src="../assets/logo.png"
      height="60"
      width="150"
      alt="Sprout_Logo"
    >
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
        label="Email address:"
        label-for="input-1"
        description="No compartiremos sus datos con terceros"
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
        label="Nombre (s):"
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
        label="Fecha de Nacimiento:"
        label-for="input-3"
      >
        <b-form-datepicker
          id="input-3"
          v-model="form.dob"
          class="mb-2"
        />
      </b-form-group>
      <b-form-group label="¿A qué te dedicas?">
        <b-form-select
          v-model="form.job"
          :options="jobOptions"
          class="mb-3"
          disabled-field="notEnabled"
        />
      </b-form-group>
      <b-form-group label="¿Cuál es tu último grado de Estudios?">
        <b-form-select
          v-model="form.education"
          :options="educationOptions"
          class="mb-3"
          disabled-field="notEnabled"
        />
      </b-form-group>
      <b-form-group label="¿Tienes una Cuenta Bancaria en México?">
        <b-form-radio-group
          v-model="form.bankAccount"
          :options="yesNo"
          required
          class="mb-3"
          disabled-field="notEnabled"
        />
      </b-form-group>
      <b-form-group label="¿Cual es el principal objetivo de tu inversión?">
        <b-form-radio-group
          v-model="form.objective"
          :options="objectiveOptions"
          class="mb-3"
          disabled-field="notEnabled"
          stacked
        />
      </b-form-group>
      <b-form-group label="¿Cuanto tiempo te gustaría mantener tus inversiones?">
        <b-form-radio-group
          v-model="form.horizon"
          :options="horizonOptions"
          class="mb-3"
          disabled-field="notEnabled"
          stacked
        />
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="¿Qué ingreso mensual necesitas de tu portafolio actualmente?"
        label-for="input-3"
        description="*Si no necesitas ingresos de tu portafolio pon 0"
      >
        <b-form-input
          id="input-3"
          v-model="form.investIncome"
          placeholder=""
        />
      </b-form-group>
      <b-form-group
        label="¿Que ganancia te gustaría recibir de tu inversión?"
        description="Recuerda que, entre mayor sea tu ganancia potencial o tu rentabilidad, mayor el riesgo"
      >
        <b-form-radio-group
          v-model="form.return"
          :options="returnOptions"
          class="mb-3"
          disabled-field="notEnabled"
          stacked
        />
      </b-form-group>
      <b-form-group label="¿Con qué situación te Identificas Mejor?">
        <b-form-radio-group
          v-model="form.riskReturn"
          :options="riskReturnOptions"
          buttons
          button-variant="outline-primary"
          size="sm"
          name="radio-btn-outline"
        />
      </b-form-group>
      <b-form-group label="Si tu portafolio de Inversión perdiera 10% en un mes, que harías?">
        <b-form-radio-group
          v-model="form.loss"
          :options="lossOptions"
          class="mb-3"
          disabled-field="notEnabled"
          stacked
        />
      </b-form-group>
      <b-form-group label="¿Actualmente tienes un Negocio Propio o has tratado de emprender un negocio?">
        <b-form-radio-group
          v-model="form.ownBusiness"
          :options="yesNo"
          class="mb-3"
          disabled-field="notEnabled"
        />
      </b-form-group>
      <b-form-group label="¿Que percibes más riesgoso, tener un negocio propio o trabajar para alguien más y quedarte sin trabajo?">
        <b-form-radio-group
          v-model="form.risk"
          :options="riskOptions"
          class="mb-3"
          disabled-field="notEnabled"
          stacked
        />
      </b-form-group>
      <b-form-group label="¿Si te quedaras sin tu fuente de ingresos, cuánto tiempo podrías mantener tu estilo de vida?">
        <b-form-radio-group
          v-model="form.lifestyle"
          :options="lifestyleOptions"
          class="mb-3"
          disabled-field="notEnabled"
          stacked
        />
      </b-form-group>
      <b-form-group label="¿Tienes pensado usar tu dinero invertido para comprar algo? (Enganche de una Casa, Coche, un regalo, un viaje)?">
        <b-form-radio-group
          v-model="form.purchase"
          :options="purchaseOptions"
          class="mb-3"
          disabled-field="notEnabled"
        />
      </b-form-group>
      <b-button
        type="submit"
        variant="primary"
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
</template>

<i18n>
{
  "en": {
    "title": "Investor Profile",
    "subHeader1":"Platícanos un poco sobre tí y tus necesidades como inversionista. Sabemos que algunas preguntas pueden ser de carácter sensible, personales o privadas, no obstante son necesarias para que hagamos nuestro trabajo lo mejor posible y te hagamos un plan de inversión a tu medida.",
    "subHeader2":"También te prometemos que toda la información se maneja con las más estrictas medidas de seguridad y que tu información es confidencial con nosotros.",
    "fullName": "Full Name"
  },
  "es": {
    "title": "Investor Profile",
    "subHeader1":"Platícanos un poco sobre tí y tus necesidades como inversionista. Sabemos que algunas preguntas pueden ser de carácter sensible, personales o privadas, no obstante son necesarias para que hagamos nuestro trabajo lo mejor posible y te hagamos un plan de inversión a tu medida.",
    "subHeader2":"También te prometemos que toda la información se maneja con las más estrictas medidas de seguridad y que tu información es confidencial con nosotros.",
    "fullName": "Full Name"
  }
}
</i18n>

<script>
export default {
  name: 'RiskProfile',
  components: {},
  data() {
    return {
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
      },
      jobOptions:[
        { value: null, text: '-- Please select an option --' },
        { value: 'Estudiante', text: 'Soy Estudiante' },
        { value: 'Profesionista', text: 'Soy Profesionista' },
        { value: 'Empresario', text: 'Soy Empresario' },
        { value: 'Freelancer', text: 'Soy Freelancer'},
        { value: 'Other', text: 'Other'},
      ],
      educationOptions:[
        { value: null, text: '-- Please select an option --' },
        { value: 'Escuela Primaria', text: 'Escuela Primaria' },
        { value: 'Escuela Secundaria', text: 'Escuela Secundaria' },
        { value: 'Escuela Preparatoria o Bachillerato', text: 'Escuela Preparatoria o Bachillerato' },
        { value: 'Licenciatura', text: 'Licenciatura'},
        { value: 'Posgrado o Especialidad', text: 'Posgrado o Especialidad'},
        { value: 'Maestría', text: 'Maestría'},
        { value: 'Doctorado', text: 'Doctorado'},
        { value: 'Other', text: 'Other'},
      ],
      yesNo: [
        { value: 'Yes', text: 'Sí' },
        { value: 'No', text: 'No' },
      ],
      objectiveOptions:[
        { value: 'takeAdvantage', text: 'Quiero aprovechar las oportunidades de inversión' },
        { value: 'achieveGoals', text: 'Quiero ahorrar para cumplir metas de corto y mediano plazo (Comprar un coche o una casa)' },
        { value: 'retirement', text: 'Quiero ahorrar para estar mejor preparad@ para el retiro' },
        { value: 'inflation', text: 'Quiero proteger mi Dinero de la Inflación y Recibir Ingresos Adicionales'},
        { value: 'protect', text: 'Quiero Proteger el valor de mi dinero sobre todo lo demás'},
      ],
      horizonOptions:[
        { value: 'less6months', text: 'Menos de 6 meses' },
        { value: '6months1year', text: 'Entre 6 mes y un año' },
        { value: '1to5years', text: 'Entre 1 y 5 años' },
        { value: '5to10years', text: 'Entre 5 y 10 años'},
        { value: 'more10years', text: 'Más de 10 años'},
      ],
      returnOptions:[
        { value: 'less3.5', text: 'Menos de 3.5% anual' },
        { value: '3.5to4.5', text: 'de 3.5% a 4.5% anual' },
        { value: '4.5to5.5', text: 'de 4.5% a 5.5% anual' },
        { value: '5.5to7.0', text: 'de 5.5% a 7.0% anual'},
        { value: 'more7', text: 'Mayor a 7.0% anual'},
      ],
      riskReturnOptions:[
        { value: 'less3.5', text: 'Posibilidad de Ganar +4% y Perder -0%' },
        { value: '3.5to4.5', text: 'Posibilidad de Ganar +7% y Perder -3%' },
        { value: '4.5to5.5', text: 'Posibilidad de Ganar +15% y Perder -8%' },
      ],
      lossOptions:[
        { value: 'sellAll', text: 'Vendo todo' },
        { value: 'sellLoss', text: 'Vendo lo que más perdió' },
        { value: 'hold', text: 'Mantengo mi Posición' },
        { value: 'buy', text: 'Compro más' },
      ],
      riskOptions:[
        { value: 'own', text: 'Definitivamente tener un Negocio Propio' },
        { value: 'maybeOwn', text: 'Tal vez tener un Negocio Propio' },
        { value: 'neutral', text: 'No sé' },
        { value: 'maybeWork', text: 'Tal Vez Trabajar para alguien más' },
        { value: 'work', text: 'Definitivamente trabajar para alguien más' },
      ],
      lifestyleOptions:[
        { value: 'less1month', text: 'Menos de 1 mes' },
        { value: '1to3month', text: 'Entre 1 mes y 3 meses' },
        { value: '3to6month', text: 'Entre 3 meses y 6 meses' },
        { value: '6to12month', text: 'Entre 6 meses y 1 año' },
        { value: 'more12month', text: 'Más de 1 año' },
      ],
      purchaseOptions:[
        { value: 'yes', text: 'Sí' },
        { value: 'no', text: 'No' },
        { value: 'maybe', text: 'Tal vez' },
      ],
      show: true,
    }
  },
  mounted() {
    this.$ga.page('/risk_profile')
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
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>

<style lang="sass">
h1
  font-size: 2.25rem
  text-align: center
h3
  font-size: 1rem
.form-control
  width: 20%
</style>
