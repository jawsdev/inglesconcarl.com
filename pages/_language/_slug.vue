<template>
  <div v-if="content">
    <section
      v-if="content"
      :style="`background-image: url(${content.heroImage.url});  box-shadow: inset 0 0 0 1000px rgba(254, 130, 66, 0.5);`"
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
      <SocialHead
        v-if="content.seaDescription && content.seoImage"
        :title="content.title"
        :description="content.seoDescription"
        :image="content.seoImage.url"
      />
      <div class="w-full lg:w-3/4 flex flex-row items-center justify-center">
        <p
          class="
            text-2xl
            md:text-3xl
            lg:text-6xl
            w-auto
            text-white
            subpixel-antialiased
            font-medium
            hero-title
            text-center
            font-lora
            px-3
          "
        >
          {{ content.heroTitle }}
        </p>
      </div>
    </section>
    <section>
      <article
        class="
          w-full
          content-start
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
  head() {
    return {}
  },
  computed: {
    ...mapGetters({
      currentLanguage: 'getLanguage',
      pageContent: 'getPageContent'
    }),
    content() {
      return this.pageContent(this.currentRoute, this.currentLanguage)
    },
    getTitle() {
      return this.currentLanguage === 'es' && this.content.title
        ? `Inglés con Carl - ${this.content.title}`
        : `English with Carl - ${this.content.title}`
    }
  }
}
</script>

<style lang="sass">
h3
  @apply font-lora
</style>
