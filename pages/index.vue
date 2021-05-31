<template>
  <div>
    <section class="w-full h-64 bg-primary-light">
      <NuxtLink to="/en">En</NuxtLink>
      <NuxtLink to="/es">Es</NuxtLink>
    </section>
    <section>
      <button
        class="
          focus:outline-none
          h-full
          w-full
          flex flex-col
          justify-center
          items-center
        "
        @click="changeToEn()"
      >
        <p class="text-3xl lg:4xl mt-3">English</p>
      </button>
      <button
        class="
          focus:outline-none
          h-full
          w-full
          flex flex-col
          justify-center
          items-center
        "
        @click="changeToEs()"
      >
        <p class="text-3xl lg:4xl mt-3">Spanish</p>
      </button>
      <article v-if="currentLanguage === 'En'">
        pagesEn
        <pre>
          {{ pagesEn }}
        </pre>
      </article>
      <article v-if="currentLanguage === 'Es'">
        pagesEs
        <pre>
          {{ pagesEs }}
        </pre>
      </article>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      currentLanguage: 'getLanguage',
      pagesEn: 'getPagesEn',
      pagesEs: 'getPagesEs'
    }),
    pagesLang() {
      return this.currentLanguage === 'es' ? this.pagesEs : this.pagesEn
    }
  },
  mounted() {},
  methods: {
    // cookieClickedAccept: function() {
    //   this.$ga.enable();
    //   alert("Tracking enabled");
    // },
    // cookieClickedDecline: function() {
    //   this.$ga.disable();
    //   alert("Tracking disabled");
    // },
    ...mapActions(['changeToEs', 'changeToEn'])
    // show() {
    //   this.$modal.show('selectLang')
    // },
    // hide() {
    //   this.$modal.hide('selectLang')
    // },
    // hideNavMenu() {
    //   this.mobileNavMenu = false
    // }
  }
}
</script>

<style></style>
