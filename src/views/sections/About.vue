<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/sailboat.jpg')"
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
          <base-heading
            size="text-h2"
            title="Why Full Spinnaker?"
            weight="medium"
          />

          <base-body>
            There is a moment when you are sailing that you decide to fly the spinnaker. With the wind at your back, the massive sail unfurls and seems to effortlessly fill with air. Lifting you up and pulling you along, the full spinnaker helps your boat to seemingly fly accross the water! It is an amazing feeling!<br><br>This is what we want our owners to feel with our management. Our job is to do everythign we can to make sure your vacation rental performs at peak performance. We want you to be able to recline, relax, and let us help your vacation rental to fly!
          </base-body>

          <base-heading
            size="text-h2"
            title="Contact Us"
            weight="medium"
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
