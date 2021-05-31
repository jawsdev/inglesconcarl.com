<template>
  <div>
    router param {{ $route.params.language }}
    <div>currentLanguage: {{ currentLanguage }}</div>
    <div>currentSlug: {{ $route.params.slug }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      currentLanguage: 'getLanguage'
    })
  }
}
</script>

<style lang="sass" scoped></style>
