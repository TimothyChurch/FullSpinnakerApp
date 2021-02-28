<template>
  <section>
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
  </section>
</template>

<script>
  export default {

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
