<template>
  <div>
    <!-- <pre>{{ pageContent }}</pre> -->
    <section
      :style="`background-image: url(${pageContent.heroImage.url});  box-shadow: inset 0 0 0 1000px rgba(254, 130, 66, 0.3);`"
      class="
        w-full
        h-40
        lg:h-64
        bg-cover
        flex
        justify-center
        items-center
        bg-center
      "
    >
      <div class="w-full lg:w-3/4 flex flex-row items-center justify-center">
        <span
          class="
            text-4xl
            lg:text-6xl
            w-auto
            text-white
            subpixel-antialiased
            font-medium font-lora
            box-content
          "
          >{{ pageContent.heroTitle }}</span
        >
      </div>
    </section>
    <section>
      <article
        class="w-full py-10 md:w-3/4 mx-auto proseprose prose-2xl"
        v-html="pageContent.main.html"
      ></article>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      currentRoute: this.$route.params.slug
    }
  },
  computed: {
    ...mapGetters({
      currentLanguage: 'getLanguage',
      pagesEn: 'getPagesEn',
      pagesEs: 'getPagesEs'
      // pageContent: 'getPageContent'
    }),
    pageContent() {
      if (this.currentLanguage === 'es') {
        return this.pagesEs.find((page) => page.slug === this.currentRoute)
      } else {
        return this.pagesEn.find((page) => page.slug === this.currentRoute)
      }
    }
  }
}
</script>

<style lang="sass" scoped></style>
