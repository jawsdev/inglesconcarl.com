<template>
  <div>
    <section
      class="
        w-full
        h-40
        lg:h-64
        contact-hero-image
        bg-cover
        flex
        justify-center
        items-center
        bg-center
      "
    >
      <div class="w-full lg:w-3/4 flex flex-row items-center justify-center">
        <p
          class="
            text-2xl
            md:text-6xl
            lg:text-6xl
            w-auto
            text-white
            subpixel-antialiased
            font-medium font-lora
          "
        >
          {{ contactText }}
        </p>
      </div>
    </section>
    <client-only>
      <section class="w-11/12 lg:w-1/2 my-6 mx-auto flex flex-row flex-wrap">
        <div class="w-1/4 text-center">
          <font-awesome-icon
            class="fa-whatsapp text-whatsapp"
            :icon="['fab', 'whatsapp']"
            size="3x"
          />
        </div>
        <div class="w-3/4">
          <p class="text-base lg:text-lg text-gray-700">
            <span v-if="currentLanguage == 'es'"
              >Puedes contactarme sin demora en WhatsApp:</span
            >
            <span v-else-if="currentLanguage == 'en'"
              >You can contact me without delay on WhatsApp:</span
            >
          </p>
          <a
            class="text-whatsapp text-lg lg:text-2xl"
            href="https://wa.me/34644941801"
          >
            <img class="h-6 pt-1" src="@/assets/phone.svg" alt />
          </a>
        </div>
        <div class="w-1/4 text-center py-6">
          <font-awesome-icon
            class="text-primary"
            :icon="['fas', 'envelope']"
            size="2x"
          />
        </div>
        <div class="w-3/4 py-6">
          <p class="w-full text-base lg:text-lg text-gray-700 text-left">
            <span v-if="currentLanguage == 'es'"
              >Puedes enviar un correo electrónico directamente:</span
            >
            <span v-else-if="currentLanguage == 'en'"
              >You can send an email directly:</span
            >
          </p>
          <a class="text-primary">
            <img class="h-6 pt-1" src="@/assets/email.svg" alt />
          </a>
        </div>
      </section>

      <section v-if="emailSent" class="w-11/12 lg:w-1/2 my-10 mx-auto">
        <div
          class="
            bg-green-100
            border border-green-400
            text-green-700
            px-4
            py-3
            rounded
            relative
            text-center
          "
          role="alert"
        >
          <strong class="font-bold">
            <span v-if="currentLanguage == 'es'">¡Email enviado!</span>
            <span v-else-if="currentLanguage == 'en'">Email sent!</span>
          </strong>
          <p class="text-gray-700 text-sm md:text-base">
            <span v-if="currentLanguage == 'es'"
              >¡Gracias por su consulta! Estaré en contacto pronto.</span
            >
            <span v-else-if="currentLanguage == 'en'"
              >Thanks for your enquiry! I'll be in touch soon.</span
            >
          </p>
        </div>
      </section>
      <section v-if="incompleteCaptcha" class="w-11/12 lg:w-1/2 my-6 mx-auto">
        <div
          class="
            bg-red-100
            border border-red-400
            text-red-700
            px-4
            py-3
            rounded
            relative
            text-center
          "
          role="alert"
        >
          <p>
            <span v-if="currentLanguage == 'es'">¡Prueba que eres humano!</span>
            <span v-else-if="currentLanguage == 'en'"
              >Please complete the human test!</span
            >
          </p>
        </div>
      </section>
      <section v-if="emailError" class="w-11/12 lg:w-1/2 my-6 mx-auto">
        <div
          class="
            bg-red-100
            border border-red-400
            text-red-700
            px-4
            py-3
            rounded
            relative
            text-center
          "
          role="alert"
        >
          <strong class="font-bold mr-2">
            <span v-if="currentLanguage == 'es'">¡Algo ha salido mal!</span>
            <span v-else-if="currentLanguage == 'en'"
              >Something has gone wrong!</span
            >
          </strong>
          <p>
            <span v-if="currentLanguage == 'es'"
              >Por favor, refresque e intente de nuevo.</span
            >
            <span v-else-if="currentLanguage == 'en'"
              >Please refresh and try again.</span
            >
          </p>
        </div>
      </section>
      <section
        class="
          w-11/12
          lg:w-3/4
          flex flex-col
          items-center
          justify-center
          mx-auto
          my-6
        "
      >
        <p class="w-auto mb-4 text-base text-gray-700">
          <span v-if="currentLanguage == 'es'">
            Si lo prefiere, puede rellenar el siguiente formulario de contacto y
            lo recibiré de inmediatamente.
          </span>
          <span v-else-if="currentLanguage == 'en'">
            If you prefer, you can fill out the contact form below and I’ll
            receive it right away.
          </span>
        </p>
        <form
          class="
            w-full
            mx-auto
            max-w-3xl
            bg-white
            shadow
            p-8
            text-gray-700
            contact-form
          "
          @submit.prevent="onSubmit"
        >
          <!-- name field -->
          <div class="flex flex-wrap mb-6">
            <div class="w-full appearance-none label-floating">
              <input
                class="
                  tracking-wide
                  py-2
                  px-4
                  mb-3
                  leading-relaxed
                  appearance-none
                  block
                  w-full
                  bg-gray-200
                  border border-gray-200
                  rounded
                  focus:outline-none
                  focus:bg-white
                  focus:border-gray-500
                "
                name="user_name"
                type="text"
                placeholder="Your name"
                required
              />
              <label
                for="name"
                class="
                  absolute
                  tracking-wide
                  py-2
                  px-4
                  mb-4
                  opacity-0
                  leading-tight
                  block
                  top-0
                  left-0
                  cursor-text
                "
                >Your name</label
              >
            </div>
          </div>
          <!-- email field -->
          <div class="flex flex-wrap mb-6">
            <div class="w-full appearance-none label-floating">
              <input
                class="
                  tracking-wide
                  py-2
                  px-4
                  mb-3
                  leading-relaxed
                  appearance-none
                  block
                  w-full
                  bg-gray-200
                  border border-gray-200
                  rounded
                  focus:outline-none
                  focus:bg-white
                  focus:border-gray-500
                "
                name="user_email"
                type="email"
                placeholder="Your email"
                required
              />
              <label
                for="name"
                class="
                  absolute
                  tracking-wide
                  py-2
                  px-4
                  mb-4
                  opacity-0
                  leading-tight
                  block
                  top-0
                  left-0
                  cursor-text
                "
                >Your email</label
              >
            </div>
          </div>
          <!-- Message field -->
          <div class="flex flex-wrap mb-6">
            <div class="w-full appearance-none label-floating">
              <textarea
                class="
                  autoexpand
                  tracking-wide
                  py-2
                  px-4
                  mb-3
                  leading-relaxed
                  appearance-none
                  block
                  w-full
                  bg-gray-200
                  border border-gray-200
                  rounded
                  focus:outline-none
                  focus:bg-white
                  focus:border-gray-500
                "
                name="message"
                type="text"
                placeholder="Message..."
              ></textarea>
              <label
                for="message"
                class="
                  absolute
                  tracking-wide
                  py-2
                  px-4
                  mb-4
                  opacity-0
                  leading-tight
                  block
                  top-0
                  left-0
                  cursor-text
                "
                >Message...</label
              >
            </div>
          </div>
          <div class="my-6 captcha">
            <recaptcha />
          </div>
          <button
            class="
              w-full
              shadow
              bg-primary
              hover:bg-orange-500
              focus:shadow-outline
              focus:outline-none
              text-white
              font-bold
              py-2
              px-4
              rounded
            "
            type="submit"
            :disabled="sendDisabled == true"
            :class="{ 'bg-gray-400': sendDisabled }"
          >
            Send
            <span v-if="loading">
              <font-awesome-icon :icon="['fas', 'spinner']" size="lg" spin />
            </span>
          </button>
        </form>
      </section>
    </client-only>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'
export default {
  data() {
    return {
      currentLanguage: this.$route.params.language,
      emailSent: false,
      emailError: false,
      loading: false,
      sendDisabled: false,
      showForm: false,
      incompleteCaptcha: false
    }
  },
  computed: {
    contactText() {
      return this.currentLanguage === 'es' ? 'Contacto' : 'Contact'
    }
  },
  methods: {
    showEmailSent() {
      this.$modal.show('email-confirmation-modal')
    },
    hideEmailSent() {
      this.$modal.hide('email-confirmation-modal')
    },
    async onSubmit(e) {
      try {
        const token = await this.$recaptcha.getResponse()
        // console.log('ReCaptcha token:', token)

        // send token to server alongside your form dat
        this.sendEmail(e, token)
        // at the end you need to reset recaptcha
        await this.$recaptcha.reset()
      } catch (error) {
        // console.log('Captcha incomplete', error)
        this.incompleteCaptcha = true
      }
    },
    sendEmail(e, token) {
      // console.log('e', e.target)
      this.loading = true
      this.sendDisabled = true
      emailjs
        .sendForm(
          'smtp_server',
          'template_681LSE82',
          e.target,
          'user_2NjKS1ME9pstAgGdGjtQ2'
        )
        .then((response) => {
          // console.log('response: ', response)
          if (response.status === 200) {
            // console.log('Email sent!')
            this.emailSent = true
            this.emailError = false
            this.showForm = false
            this.incompleteCaptcha = false
            this.loading = false
            this.sendDisabled = false
          }
        })
        .catch((error) => {
          console.log('error: ', error)
          this.emailError = true
        })
    }
  }
}
</script>

<style lang="sass" scoped>
.contact-hero-image
  background-image: url("~@/assets/contact.jpg")
  box-shadow: inset 0 0 0 1000px rgba(254, 130, 66, 0.3)
</style>
