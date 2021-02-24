<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/living.jpg')"
      class="white--text"
      gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
          max-width="700"
          width="100%"
        >
          <iframe
            id="airdna-rentalizer"
            class="airdna"
            src="https://rentalizer.airdna.co/widget/en?theme=spinnaker"
            width="500"
            height="400"
            border="0"
          />
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>

<style scoped>

.airdna {
    border: 0;
}

</style>
