<template>
  <div v-if="content">
    <!-- <pre>{{ pageContent }}</pre> -->
    <section
      v-if="content"
      :style="`background-image: url(${content.heroImage.url});  box-shadow: inset 0 0 0 1000px rgba(254, 130, 66, 0.3);`"
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
          >{{ content.heroTitle }}</span
        >
      </div>
    </section>
    <section>
      <article
        class="
          w-full
          py-4
          lg:py-10
          px-5
          md:w-3/4
          mx-auto
          prose prose-md
          lg:prose-2xl
          font-open-sans
        "
        v-html="content.main.html"
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
      pagesEs: 'getPagesEs',
      pagesEn: 'getPagesEn',
      pageContent: 'getPageContent'
    }),
    content() {
      return this.pageContent(this.homeSlug, this.currentLanguage)
    },
    homeSlug() {
      return this.currentLanguage === 'es' ? 'inicio' : 'home'
    }
    // pageContent() {
    //   if (this.currentLanguage === 'es') {
    //     return this.pagesEs.find((page) => page.slug === 'inicio')
    //   } else {
    //     return this.pagesEn.find((page) => page.slug === 'home')
    //   }
    // }
  }
}
</script>

<style lang="sass"></style>
