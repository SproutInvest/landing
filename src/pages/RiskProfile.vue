<template>
  <div>
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
            :label="$t('enterFirstName')"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.firstName"
              required
              :placeholder="$t('firstNameHolder')"
            />
          </b-form-group>
          <b-form-group
            id="input-group-2"
            class="ss-text"
            :label="$t('enterLastName')"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.lastName"
              required
              :placeholder="$t('lastNameHolder')"
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
          <div>
            <h3 class="mb-2">
              {{ $t('agreeDisagreeSet1Label') }}
            </h3>
            <h4 class="mb-2">
              {{ $t('agreeDisagreeSet1Description') }}
            </h4>
            <b-container class="agree-disagree-set-1 mb-5">
              <b-row class="text-center">
                <b-col cols="6" />
                <b-col cols="1">
                  1
                </b-col>
                <b-col cols="1">
                  2
                </b-col>
                <b-col cols="1">
                  3
                </b-col>
                <b-col cols="1">
                  4
                </b-col>
                <b-col cols="1">
                  5
                </b-col>
                <b-col cols="1" />
              </b-row>
              <b-row class="text-center">
                <b-col cols="6">
                  {{ $t('agreeDisagree11Label') }}
                </b-col>
                <b-col cols="5">
                  <b-form-rating
                    v-model="form.agreeDisagree11"
                    icon-empty="circle"
                    icon-full="circle-fill"
                  />
                </b-col>
                <b-col cols="1">
                  {{ form.agreeDisagree11 }}
                </b-col>
              </b-row>
              <b-row class="text-center">
                <b-col cols="6">
                  {{ $t('agreeDisagree12Label') }}
                </b-col>
                <b-col cols="5">
                  <b-form-rating
                    v-model="form.agreeDisagree12"
                    icon-empty="circle"
                    icon-full="circle-fill"
                  />
                </b-col>
                <b-col cols="1">
                  {{ form.agreeDisagree12 }}
                </b-col>
              </b-row>
            </b-container>
          </div>
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
            <h3 class="mb-2">
              {{ $t('agreeDisagreeSet2Label') }}
            </h3>
            <h4 class="mb-2">
              {{ $t('agreeDisagreeSet2Description') }}
            </h4>
            <b-container class="agree-disagree-set-2 mb-5">
              <b-row class="text-center mb-2">
                <b-col cols="6" />
                <b-col cols="1">
                  1
                </b-col>
                <b-col cols="1">
                  2
                </b-col>
                <b-col cols="1">
                  3
                </b-col>
                <b-col cols="1">
                  4
                </b-col>
                <b-col cols="1">
                  5
                </b-col>
                <b-col cols="1" />
              </b-row>
              <b-row class="text-center mb-2">
                <b-col cols="6">
                  {{ $t('agreeDisagree21Label') }}
                </b-col>
                <b-col cols="5">
                  <b-form-rating
                    v-model="form.agreeDisagree21"
                    icon-empty="circle"
                    icon-full="circle-fill"
                  />
                </b-col>
                <b-col cols="1">
                  {{ form.agreeDisagree21 }}
                </b-col>
              </b-row>
              <b-row class="text-center mb-2">
                <b-col cols="6">
                  {{ $t('agreeDisagree22Label') }}
                </b-col>
                <b-col cols="5">
                  <b-form-rating
                    v-model="form.agreeDisagree22"
                    icon-empty="circle"
                    icon-full="circle-fill"
                  />
                </b-col>
                <b-col cols="1">
                  {{ form.agreeDisagree22 }}
                </b-col>
              </b-row>
              <b-row class="text-center mb-2">
                <b-col cols="6">
                  {{ $t('agreeDisagree23Label') }}
                </b-col>
                <b-col cols="5">
                  <b-form-rating
                    v-model="form.agreeDisagree23"
                    icon-empty="circle"
                    icon-full="circle-fill"
                  />
                </b-col>
                <b-col cols="1">
                  {{ form.agreeDisagree23 }}
                </b-col>
              </b-row>
              <b-row class="text-center mb-2">
                <b-col cols="6">
                  {{ $t('agreeDisagree24Label') }}
                </b-col>
                <b-col cols="5">
                  <b-form-rating
                    v-model="form.agreeDisagree24"
                    icon-empty="circle"
                    icon-full="circle-fill"
                  />
                </b-col>
                <b-col cols="1">
                  {{ form.agreeDisagree24 }}
                </b-col>
              </b-row>
              <b-row class="text-center mb-2">
                <b-col cols="6">
                  {{ $t('agreeDisagree25Label') }}
                </b-col>
                <b-col cols="5">
                  <b-form-rating
                    v-model="form.agreeDisagree25"
                    icon-empty="circle"
                    icon-full="circle-fill"
                  />
                </b-col>
                <b-col cols="1">
                  {{ form.agreeDisagree25 }}
                </b-col>
              </b-row>
              <b-row class="text-center mb-2">
                <b-col cols="6">
                  {{ $t('agreeDisagree26Label') }}
                </b-col>
                <b-col cols="5">
                  <b-form-rating
                    v-model="form.agreeDisagree26"
                    icon-empty="circle"
                    icon-full="circle-fill"
                  />
                </b-col>
                <b-col cols="1">
                  {{ form.agreeDisagree26 }}
                </b-col>
              </b-row>
              <b-row class="text-center mb-2">
                <b-col cols="6">
                  {{ $t('agreeDisagree27Label') }}
                </b-col>
                <b-col cols="5">
                  <b-form-rating
                    v-model="form.agreeDisagree27"
                    icon-empty="circle"
                    icon-full="circle-fill"
                  />
                </b-col>
                <b-col cols="1">
                  {{ form.agreeDisagree27 }}
                </b-col>
              </b-row>
              <b-row class="text-center mb-2">
                <b-col cols="6">
                  {{ $t('agreeDisagree28Label') }}
                </b-col>
                <b-col cols="5">
                  <b-form-rating
                    v-model="form.agreeDisagree28"
                    icon-empty="circle"
                    icon-full="circle-fill"
                  />
                </b-col>
                <b-col cols="1">
                  {{ form.agreeDisagree28 }}
                </b-col>
              </b-row>
              <b-row class="text-center mb-2">
                <b-col cols="6">
                  {{ $t('agreeDisagree29Label') }}
                </b-col>
                <b-col cols="5">
                  <b-form-rating
                    v-model="form.agreeDisagree29"
                    icon-empty="circle"
                    icon-full="circle-fill"
                  />
                </b-col>
                <b-col cols="1">
                  {{ form.agreeDisagree29 }}
                </b-col>
              </b-row>
              <b-row class="text-center mb-2">
                <b-col cols="6">
                  {{ $t('agreeDisagree210Label') }}
                </b-col>
                <b-col cols="5">
                  <b-form-rating
                    v-model="form.agreeDisagree210"
                    icon-empty="circle"
                    icon-full="circle-fill"
                  />
                </b-col>
                <b-col cols="1">
                  {{ form.agreeDisagree210 }}
                </b-col>
              </b-row>
            </b-container>
          </div>
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
              @click="togglePremium"
            >
              {{ $t('buttonPremium') }}
            </b-button>
          </div>
          <div v-show="showPremium">
            <b-form-group :label="$t('housingLabel')">
              <b-form-radio-group
                v-model="form.housing"
                :options="housingOptions"
                class="mb-3"
                :required="showPremium"
                disabled-field="notEnabled"
              />
            </b-form-group>
            <b-form-group :label="$t('mortgageLabel')">
              <b-form-input
                v-model="form.mortgage"
                :required="showPremium"
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
                :required="showPremium"
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
                :required="showPremium"
                placeholder="25000"
              />
            </b-form-group>
            <b-form-group :label="$t('companySharesLabel')">
              <b-form-radio-group
                v-model="form.companyShares"
                :options="yesNoOther"
                class="mb-3"
                :required="showPremium"
                disabled-field="notEnabled"
              />
            </b-form-group>
            <b-form-group
              :label="$t('incomeLabel')"
              :description="$t('incomeDescription')"
            >
              <b-form-input
                v-model="form.income"
                :required="showPremium"
                placeholder="25000"
              />
            </b-form-group>
            <b-form-group :label="$t('debtLabel')">
              <b-form-radio-group
                v-model="form.debt"
                :options="yesNo"
                class="mb-3"
                :required="showPremium"
                disabled-field="notEnabled"
              />
            </b-form-group>
            <b-form-group
              :label="$t('debtPaymentLabel')"
              :description="$t('debtPaymentDescription')"
            >
              <b-form-input
                v-model="form.debtPayment"
                :required="showPremium"
                placeholder="0"
              />
            </b-form-group>
            <b-form-group :label="$t('sourceLabel')">
              <b-form-radio-group
                v-model="form.source"
                :options="sourceOptions"
                class="mb-3"
                :required="showPremium"
                stacked
                disabled-field="notEnabled"
              />
            </b-form-group>
            <b-form-group
              :label="$t('dependentsLabel')"
              :description="$t('dependentsDescription')"
            >
              <b-form-input
                v-model="form.dependents"
                :required="showPremium"
                placeholder="0"
              />
            </b-form-group>
            <b-form-group
              :label="$t('dependentsAgeLabel')"
              :description="$t('dependentsAgeDescription')"
            >
              <b-form-input
                v-model="form.dependentsAge"
                :required="showPremium"
                placeholder="0"
              />
            </b-form-group>
            <b-form-group :label="$t('insuranceLabel')">
              <b-form-radio-group
                v-model="form.insurance"
                :options="yesNo"
                class="mb-3"
                :required="showPremium"
                disabled-field="notEnabled"
              />
            </b-form-group>
            <b-form-group :label="$t('medicalLabel')">
              <b-form-radio-group
                v-model="form.medical"
                :options="yesNo"
                class="mb-3"
                :required="showPremium"
                disabled-field="notEnabled"
              />
            </b-form-group>
          </div>
          <b-button
            v-show="!submitted"
            type="submit"
            variant="primary"
            class="mr-2"
          >
            Submit
          </b-button>
          <b-button
            v-show="!submitted"
            type="reset"
            variant="danger"
          >
            Reset
          </b-button>
        </b-form>
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
    "title": "Investor Profile",
    "subHeader1": "Tell us a little about yourself and your needs as an investor. We understand that some questions may be sensitive, personal or private, however they are necessary for us to create an investment plan tailored to you.",
    "subHeader2": "All information is used by us to create your personlized plan and it is secure with us.",
    "headerPremium": "Premium Investors",
    "subheaderPremium1": "The following section is dedicated to investors who want to know their overall financial status from any point of view. Wealth is measured not only in monetary terms but also in the potential to generate these resources. For example, with these results you might know when it's important to take out life insurance and how much it depends on several factors.",
    "subheaderPremium2": "If you are not interested in participating in these additional questions you can proceed to submit your form",
    "fullName": "Full Name",
    "enterEmail": "Enter Email ID *",
    "emailDescription": "We will not share your data with third parties",
    "enterFirstName": "First Name: *",
    "firstNameHolder": "First Name",
    "enterLastName": "Last Name: *",
    "lastNameHolder": "Last Name",
    "enterDob": "Date of Birth:",
    "jobLabel": "What do you do for a living?",
    "educationLabel": "What is the highest level of education completed by you?",
    "bankAccountLabel": "Do you have a Bank Account in Mexico? *",
    "objectiveLabel": "What is the main objective of your investment?",
    "horizonLabel": "How long would you like to keep your investments?",
    "investIncomeLabel": "What monthly income do you currently need from your portfolio?",
    "investIncomeDescription": "If you don't need any regular income from your portfolio, enter 0",
    "returnLabel": "What profit would you like to receive from your investment?",
    "returnDescription": "Remember that the higher your potential profit or profitability, the greater the risk",
    "riskReturnLabel": "What situation do you identify better with?",
    "lossLabel": "If your Investment portfolio lost 10% in a month, what would you do?",
    "ownBusinessLabel": "Do you currently have your own business or have you tried to start a business?",
    "riskLabel": "What do you perceive to be more risky, having your own business or working for someone else with a possibility of losing your job?",
    "agreeDisagreeSet1Label": "How do you identify with the following statements on a scale of 1 to 5",
    "agreeDisagreeSet1Description": "Select '1' if you 'completely disagree' and '5' if you completely agree",
    "agreeDisagree11Label": "I prefer a secure income even if the potential Gain is lower",
    "agreeDisagree12Label": "I can't lose Money even if I sacrifice some profit",
    "lifestyleLabel": "If you were to lose your source of income, how long could you maintain your lifestyle?",
    "purchaseLabel": "Do you plan to use your invested money to buy something? (Down payment for a House, Car, Vacation)?",
    "agreeDisagreeSet2Label": "How do you identify with the following statements on a scale of 1 to 5",
    "agreeDisagreeSet2Description": "Select '1' if you 'completely disagree' and '5' if you completely agree",
    "agreeDisagree21Label": "I consider myself to be an introverted person",
    "agreeDisagree22Label": "I'd rather stay home and read a book than party",
    "agreeDisagree23Label": "I feel comfortable betting money",
    "agreeDisagree24Label": "When I go shopping I like to analyze all the options before buying something",
    "agreeDisagree25Label": "When I get money I didn't expect, I'll use it to buy myself something or go on vacation",
    "agreeDisagree26Label": "If in a coin toss the result is the same 50 times, then I would be 100% sure that the next one would also be the same",
    "agreeDisagree27Label": "I'd like to invest in Bitcoin if it starts to rise in value",
    "agreeDisagree28Label": "I consider myself to be an anxious person",
    "agreeDisagree29Label": "I'm a very disciplined person",
    "agreeDisagree210Label": "I consider myself to be a creative person",
    "buttonPremium": "Continue with questionnaire for Premium Investors",
    "housingLabel": "What's your housing situation? *",
    "mortgageLabel": "If you're currently paying off a mortgage, about how much do you need to pay? (If you do not have to, then answer '0') *",
    "mortgageDateLabel": "If you are currently paying a mortgage, on what date did you buy it?",
    "mortgageYearsLabel": "How long is the duration (in years) of your mortgage? (If you don't have a mortgage answer '0') *",
    "investmentLabel": "Do you currently have Savings or Investments? *",
    "investmentAmountLabel": "Could you indicate the approximate amount of your Savings or Investment (MXN) *?",
    "investmentAmountDescription": "Enter the approximate amount of your savings in Mexican pesos. If you're just going to start as an investor, enter 0",
    "companySharesLabel": "Do you have shares or investments related to the Company where you work? *",
    "incomeLabel": "What is your Approximate Monthly Income? *",
    "incomeDescription": "Enter the approximate amount of your monthly income (e.g. 25000).",
    "debtLabel": "At the moment, do you have any debt other than a Mortgage? (e.g. car in lease or credit, credit card, etc.) *",
    "debtPaymentLabel": "Could you give us a rough estimate of how much you need to pay off your debts? *",
    "debtPaymentDescription": "Enter the approximate amount of your debt (e.g. 250000) if you don't have debts currently please enter 0",
    "sourceLabel": "In case you have any savings or investments currently, how did you generate these investments? *",
    "dependentsLabel": "How many dependents do you have? *",
    "dependentsDescription": "Children, Spouse, Family, or someone else who depends 100% on your income",
    "dependentsAgeLabel": "How old is your youngest dependent? *",
    "dependentsAgeDescription": "If you don't have any dependents, enter 0.",
    "insuranceLabel": "Do You Have Life Insurance? *",
    "medicalLabel": "Do you have a major medical expense insurance? *",
    "great": "Great! You'll be hearing from us very soon."
  },
  "es": {
    "title": "Perfil de Inversionista",
    "subHeader1":"Platícanos un poco sobre tí y tus necesidades como inversionista. Sabemos que algunas preguntas pueden ser de carácter sensible, personales o privadas, no obstante son necesarias para que hagamos nuestro trabajo lo mejor posible y te hagamos un plan de inversión a tu medida.",
    "subHeader2":"También te prometemos que toda la información se maneja con las más estrictas medidas de seguridad y que tu información es confidencial con nosotros.",
    "headerPremium": "Premium Investors",
    "subheaderPremium1": "La siguiente sección está dedicada a inversionistas que desean conocer su situación patrimonial de cualquier punto de vista. El patrimonio no solo se mide en recursos monetarios sino también en el potencial de generar estos recursos. Por ejemplo, con estos resultados podrías saber cuando es importante contratar un seguro de vida y por qué monto dependiendo en varios factores.",
    "subheaderPremium2": "Si no está interesado en participar en estas preguntas adicionales, puede proceder a enviar tu formulario",
    "fullName": "Full Name",
    "enterEmail": "Email ID *",
    "emailDescription": "No compartiremos sus datos con terceros",
    "enterFirstName": "Nombre (s): *",
    "firstNameHolder": "Nombre",
    "enterLastName": "Apellidos: *",
    "lastNameHolder": "Apellidos",
    "enterDob": "Fecha de Nacimiento:",
    "jobLabel": "¿A qué te dedicas?",
    "educationLabel": "¿Cuál es tu último grado de Estudios?",
    "bankAccountLabel": "¿Tienes una Cuenta Bancaria en México? *",
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
    "agreeDisagreeSet1Label": "¿Cómo te identificas con las siguientes afirmaciones en una escala de 1 a 5?",
    "agreeDisagreeSet1Description": "Elige 1 si estas completamente en desacuerdo y 5 si estas completamente de acuerdo",
    "agreeDisagree11Label": "'Prefiero un ingreso seguro aunque la Ganancia Potencial sea Menor'",
    "agreeDisagree12Label": "'No puedo perder Dinero aunque sacrifique algo de ganancia'",
    "lifestyleLabel": "¿Si te quedaras sin tu fuente de ingresos, cuánto tiempo podrías mantener tu estilo de vida?",
    "purchaseLabel":"¿Tienes pensado usar tu dinero invertido para comprar algo? (Enganche de una Casa, Coche, un regalo, un viaje)?",
    "agreeDisagreeSet2Label": "Que tanto te identificas con las siguientes afirmaciones en una escala de 1 a 5?",
    "agreeDisagreeSet2Description": "Elige 1 si estas completamente en desacuerdo y 5 si estas completamente de acuerdo",
    "agreeDisagree21Label": "Me considero como una persona Introvertida",
    "agreeDisagree22Label": "Prefiero quedarme en casa a leer un Libro a salir de fiesta",
    "agreeDisagree23Label": "Me siento cómodo apostando dinero",
    "agreeDisagree24Label": "Cuando voy de compras me gusta analizar todas las opciones antes de comprar algo",
    "agreeDisagree25Label": "Cuando recibo dinero que no esperaba lo uso para comprarme algo o irme de vacaciones",
    "agreeDisagree26Label": "Si en un volado salen 50 veces el mismo resultado, es 100% seguro que el próximo será igual",
    "agreeDisagree27Label": "Me gustaría invertir en Bitcoin si empieza a subir de valor",
    "agreeDisagree28Label": "Me considero como una persona ansiosa",
    "agreeDisagree29Label": "Soy una persona muy disciplinada",
    "agreeDisagree210Label": "Me considero como una persona creativa",
    "buttonPremium": "¿Continuar con el cuestionario de Premium Investors?",
    "housingLabel": "¿Cual es tu situación habitacional? *",
    "mortgageLabel": "¿Si actualmente estás pagando una hipoteca, aproximadamente cuanto te hace falta pagar? (Si no tienes contesta '0') *",
    "mortgageDateLabel": "¿Si actualmente estás pagando una hipoteca, en que fecha la contrataste? ",
    "mortgageYearsLabel": "¿A qué plazo en años contrataste tu hipoteca? (*Si no tienes hipoteca contesta '0') *",
    "investmentLabel": "Tienes Ahorros o Inversiones actualmente? *",
    "investmentAmountLabel": "Podrías Indicar el monto aproximado de tu Ahorro o Inversión (MXN) *?",
    "investmentAmountDescription": "Ingresa el monto aproximado de tus ahorros en pesos mexicanos (25000). Si apenas vas a empezar como inversionista ingresa 0",
    "companySharesLabel": "¿Tienes acciones o inversiones relacionadas a la Empresa en donde trabajas? *",
    "incomeLabel": "¿Cuál es tu Ingreso Mensual Aproximado? *",
    "incomeDescription": "Ingresa el monto aproximado de tus ingresos mensuales (Ej. 25000).",
    "debtLabel": "¿Por el momento, Tienes alguna deuda que no sea una Hipoteca? (Ej. coche en arrendamiento o a crédito, tarjeta de crédito, etc) *",
    "debtPaymentLabel": "¿Nos podrías dar un aproximado de cuanto te falta pagar de tus deudas? *",
    "debtPaymentDescription": "Ingresa el monto aproximado de tu deuda (Ej. 250000) si no tienes deudas actualmente escribe 0",
    "sourceLabel": "¿En caso de que tengas ahorros o inversiones actualmente, como generaste estos recursos? *",
    "dependentsLabel": "¿Cuántos dependientes tienes? *",
    "dependentsDescription": "Hij@s, Pareja, familiar, o alguien más que dependa 100% de tus ingresos",
    "dependentsAgeLabel": "¿Cuantos años tiene tu dependiente más joven? *",
    "dependentsAgeDescription": "Si no tienes dependientes contesta 0.",
    "insuranceLabel": "¿Cuentas con Seguro de Vida? *",
    "medicalLabel": "¿Cuentas con un Seguro de Gastos Médicos Mayores? *",
    "great": "¡Excelente! Tendrás noticias de Sprout muy pronto"
  }
}
</i18n>

<script>
import axios from 'axios'

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
      locale: null,
      showPremium: false,
      form: {
        email: '',
        firstName: '',
        lastName: '',
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
        agreeDisagree11: '',
        agreeDisagree12: '',
        lifestyle: '',
        purchase: '',
        agreeDisagree21: '',
        agreeDisagree22: '',
        agreeDisagree23: '',
        agreeDisagree24: '',
        agreeDisagree25: '',
        agreeDisagree26: '',
        agreeDisagree27: '',
        agreeDisagree28: '',
        agreeDisagree29: '',
        agreeDisagree210: '',
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
        dependents: '',
        dependentsAge: '',
        insurance: '',
        medical: '',
      },
      jobOptions: [],
      educationOptions: [],
      yesNo: [],
      objectiveOptions: [],
      horizonOptions: [],
      returnOptions: [],
      riskReturnOptions: [],
      lossOptions: [],
      riskOptions: [],
      lifestyleOptions: [],
      purchaseOptions: [],
      housingOptions: [],
      yesNoOther: [],
      sourceOptions: [],
      show: true,
      submitted: false,
    }
  },
  mounted () {
    this.$ga.page('/risk_profile')
    this.localeInterval = setInterval(function () {
      const locale = localStorage.getItem('locale') || this.$i18n.locale
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
    uploadData(data) {
      const locale = localStorage.getItem('locale') || this.$i18n.locale
      const url = 'https://sproutinvest-api.herokuapp.com/risk_profile/'
      axios
        .post(url, {
          email: data.email,
          first_name: data.firstName,
          last_name: data.lastName,
          locale: locale.toUpperCase(),
          risk_profile: JSON.stringify(data),
        })
    },
    onSubmit(evt) {
      evt.preventDefault()
      this.uploadData(this.form)
      this.submitted = true
    },
    togglePremium() {
      this.showPremium = !this.showPremium
      this.submitted = false
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.firstName = ''
      this.form.lastName = ''
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
      this.form.agreeDisagree11 = '',
      this.form.agreeDisagree12 = '',
      this.form.lifestyle = '',
      this.form.purchase = '',
      this.form.agreeDisagree21 = '',
      this.form.agreeDisagree22 = '',
      this.form.agreeDisagree23 = '',
      this.form.agreeDisagree24 = '',
      this.form.agreeDisagree25 = '',
      this.form.agreeDisagree26 = '',
      this.form.agreeDisagree27 = '',
      this.form.agreeDisagree28 = '',
      this.form.agreeDisagree29 = '',
      this.form.agreeDisagree210 = '',
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
      this.form.dependents = '',
      this.form.dependentsAge = '',
      this.form.insurance = '',
      this.form.medical = '',
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
h4
  font-size: 0.8rem
  font-weight: normal
.ss-select
  width: 75%
.ss-text
  width: 75%
.ss-submitted-text
  font-size: 1.5rem
  font-weight: bold
  border-top-right-radius: 0.25rem
  border-bottom-right-radius: 0.25rem
  border-top-left-radius: 0.25rem
  border-bottom-left-radius: 0.25rem
  background: $ss-bg-color
  color: $ss-font-color-black
  height: calc(3.375rem + 2px)
  padding: 0.9375rem 0.9375rem
  width: 100%
  text-align: center
</style>
