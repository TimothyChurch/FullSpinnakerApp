<template>
  <section
    id="hero"
    class="hero"
  >
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
          <base-subheading
            weight="regular"
            title="VACATION RENTAL MANAGEMENT AT A FLAT FEE"
          />

          <base-heading
            size="text-h2"
            title="A Simpler Way to Manage"
            weight="medium"
          />

          <base-body>
            Are you paying 15%, 18%, or even 30% for vacation rental management? <br> Dealing with companies that their bottom line is more important than yours? <br><br>
            With our management, you pay a flat fee for the same services provided by other companies. By streamlining our process and using professional companies instead of in-housing everything, we keep our overhead low and pass on those savings to you!
          </base-body>

          <div
            justify="center"
          >
            <base-airdna />

            <span class="font-weight-bold ml-6 mr-4 my-4">or</span>

            <base-contact />
          </div>
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

.hero {
  padding: 0px, 10px;
}

</style>
