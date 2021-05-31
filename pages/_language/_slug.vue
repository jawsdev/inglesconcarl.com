<template>
  <div>
    <pre>
          {{ getPageData }}
    </pre>
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
      pagesEs: 'getPagesEs',
      pageContent: 'getPageContent'
    }),
    getPageData() {
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
