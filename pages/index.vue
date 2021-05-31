<template>
  <div>
    <section class="w-full h-64 bg-primary-light"></section>
    <section>
      <article>
        <pre>
          {{ pages }}
        </pre>
      </article>
    </section>
  </div>
</template>

<script>
// import { gql } from 'graphql-request'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      pages: 'getPages'
    })
  }
}
</script>

<style></style>
