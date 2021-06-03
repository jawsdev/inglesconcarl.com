<template>
  <div
    class="w-full h-screen bg-white flex flex-col justify-between items-center"
  >
    <header
      class="
        w-full
        h-16
        lg:h-36
        bg-primary
        flex
        justify-around
        items-center
        top-0
        z-30
        fixed
        lg:static
      "
    >
      <NuxtLink :to="`/${currentLanguage.toLowerCase()}/`">
        <img
          v-if="currentLanguage === 'es'"
          class="h-10 lg:h-16"
          src="~@/assets/logo_es.svg"
          alt
        />
        <img v-else class="h-10 lg:h-16" src="~@/assets/logo_en.svg" alt />
      </NuxtLink>
      <div class="flex lg:h-full w-2/5 lg:w-3/4 flex-col justify-between">
        <div
          class="
            flex flex-row
            h-full
            justify-end
            lg:relative
            items-center
            lg:items-start
          "
        >
          <NuxtLink
            class="text-white flex flex-row justify-center items-center"
            :to="`/${changeLanugage}/`"
            ><span class="hidden lg:block text-sm font-semibold">
              {{ prettyLanguage }}
            </span>
            <font-awesome-icon
              class="pl-2 pr-2 lg:pr-0"
              :icon="['fas', 'language']"
              size="3x"
            />
          </NuxtLink>
        </div>
        <nav class="w-full bg-primary text-white hidden lg:block">
          <div class="container mx-auto flex justify-end">
            <ul class="flex">
              <li
                v-for="page in pagesLang"
                :key="page.id"
                class="hoverable hover:bg-gray-100 hover:text-primary"
              >
                <NuxtLink
                  class="
                    relative
                    block
                    py-2
                    px-4
                    lg:p-6
                    text-xs
                    lg:text-base
                    font-bold
                    hover:bg-gray-100
                    hover:text-primary
                  "
                  :to="`/${currentLanguage}/${page.slug}`"
                >
                  {{ page.title }}
                </NuxtLink>
                <div
                  v-if="page.enableHeroTitleHover"
                  class="p-6 mega-menu h-64 mb-16 sm:mb-0 bg-gray-100 z-50"
                >
                  <div
                    class="
                      mx-auto
                      w-full
                      h-full
                      flex flex-wrap
                      justify-center
                      items-center
                    "
                  >
                    <div class="w-auto text-primary text-center">
                      <h2 class="font-bold text-4xl">
                        {{ page.heroTitle }}
                      </h2>
                      <p v-if="page.heroSubtitle" class="text-gray-600 text-xl">
                        {{ page.heroSubtitle }}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="hoverable hover:bg-gray-100 hover:text-primary">
                <NuxtLink
                  class="
                    relative
                    block
                    py-2
                    px-4
                    lg:p-6
                    text-xs
                    lg:text-base
                    font-bold
                    hover:bg-gray-100
                    hover:text-primary
                  "
                  :to="`/${currentLanguage}/contact`"
                >
                  {{ contactText }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <main class="w-full flex flex-grow flex-col justify-start mt-16 lg:mt-0">
      <Nuxt />
    </main>
    <footer class="w-full border-t bg-white lg:bg-primary pb-1 mt-10">
      <div
        class="
          hidden
          w-full
          h-16
          container
          mx-auto
          lg:flex
          flex-row
          justify-center
          items-center
          py-3
          lg:p-0
          text-primary
          lg:text-white
          mb-16
          lg:mb-0
        "
      >
        <NuxtLink :to="`/${currentLanguage}/privacy-policy`"
          ><span v-if="currentLanguage === 'es'">Privacy Policy</span>
          <span v-else>Privacy Policy</span>
        </NuxtLink>
        <div class="pl-2">&copy; {{ new Date().getFullYear() }} Carl Luke</div>
      </div>
    </footer>
    <div
      class="
        fixed
        bottom-0
        w-full
        h-16
        bg-primary
        lg:hidden
        flex flex-row
        justify-center
        z-30
      "
    >
      <div class="w-auto flex flex-row justify-center items-center text-white">
        <button
          class="
            focus:outline-none
            h-full
            w-full
            flex flex-col
            justify-center
            items-center
          "
          @click="mobileNavMenu = !mobileNavMenu"
        >
          <font-awesome-icon
            v-if="!mobileNavMenu"
            :key="new Date().getTime()"
            class="mx-2"
            :icon="['fas', 'bars']"
            size="3x"
          />

          <font-awesome-icon
            v-if="mobileNavMenu"
            :key="new Date().getTime()"
            class="mx-2"
            :icon="['fas', 'times']"
            size="3x"
          />
        </button>
      </div>
    </div>
    <CookieControl />
    <transition name="fade" mode="out-in">
      <div
        v-if="mobileNavMenu"
        class="
          h-full
          w-screen
          bg-primary-dark bg-opacity-75
          fixed
          bottom-0
          left-0
          pb-16
        "
      >
        <div
          id="mobilenav"
          class="h-full w-full flex flex-col justify-end items-center"
        >
          <ul class="flex flex-col w-full my-4">
            <li
              class="
                mx-auto
                my-4
                w-5/6
                px-3
                text-primary
                bg-white
                py-4
                text-2xl text-center
              "
            >
              <NuxtLink
                :to="`/${currentLanguage}/`"
                @click.native="hideNavMenu()"
              >
                <span v-if="currentLanguage == 'es'">Incinio</span>
                <span v-else-if="currentLanguage == 'en'">Home</span>
              </NuxtLink>
            </li>
            <li
              v-for="page in pagesLang"
              :key="page.id"
              class="
                mx-auto
                my-4
                w-5/6
                px-3
                text-primary
                bg-white
                py-4
                text-2xl text-center
              "
            >
              <NuxtLink
                :to="`/${currentLanguage}/${page.slug}`"
                @click.native="hideNavMenu()"
              >
                {{ page.title }}
              </NuxtLink>
            </li>
            <li
              class="
                mx-auto
                my-4
                w-5/6
                px-3
                text-primary
                bg-white
                py-4
                text-2xl text-center
              "
            >
              <NuxtLink
                :to="`/${currentLanguage}/contact`"
                @click.native="hideNavMenu()"
              >
                {{ contactText }}
              </NuxtLink>
            </li>
          </ul>
          <div
            class="
              w-full
              container
              mx-auto
              flex flex-row
              justify-center
              items-center
              pb-3
              text-white
            "
          >
            <NuxtLink :to="`/${currentLanguage}/privacy-policy`"
              ><span v-if="currentLanguage === 'es'">Privacy Policy</span>
              <span v-else>Privacy Policy</span>
            </NuxtLink>
            <div class="pl-2">
              &copy; {{ new Date().getFullYear() }} Carl Luke
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      mobileNavMenu: false,
      currentRoute: this.$route.params.slug,
      dev: process.env.NODE_ENV !== 'production'
    }
  },
  computed: {
    ...mapGetters({
      currentLanguage: 'getLanguage',
      pagesEn: 'getPagesEn',
      pagesEs: 'getPagesEs'
    }),
    pagesLang() {
      return this.currentLanguage === 'es'
        ? this.pagesEs.filter((pages) => pages.displayInMenu === true)
        : this.pagesEn.filter((pages) => pages.displayInMenu === true)
    },
    changeLanugage() {
      return this.currentLanguage === 'es' ? 'en' : 'es'
    },
    prettyLanguage() {
      return this.currentLanguage === 'es' ? 'Español' : 'English'
    },
    contactText() {
      return this.currentLanguage === 'es' ? 'Contacto' : 'Contact'
    }
  },
  methods: {
    hideNavMenu() {
      this.mobileNavMenu = false
    }
  }
}
</script>

<style lang="sass">
h1, h2, h3, h4, h5
  @apply font-lora

.mega-menu
  display: none
  left: 0
  position: absolute
  text-align: left
  width: 100%

.hoverable
  position: static

.hoverable:hover .mega-menu
  display: block

.toggle-input
  display: none

.toggle-input:not(checked) ~ .mega-menu
  display: none

.toggle-input:checked ~ .mega-menu
  display: block

.toggle-input:checked + label
  color: white
  background: #2c5282
  @apply bg-blue-800

.toggle-input:checked ~ label:after
  content: '\25B2'
  font-size: 10px
  padding-left: 6px
  position: relative
  top: -1px

.fade-enter-active,
.fade-leave-active
  transition-duration: 0.3s
  transition-property: opacity
  transition-timing-function: ease

.fade-enter,
.fade-leave-active
  opacity: 0
</style>
