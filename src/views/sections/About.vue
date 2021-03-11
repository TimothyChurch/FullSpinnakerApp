<template>
  <section
    id="about"
    class="about"
  >
    <v-container class="d-flex align-center fill-height px-4 py-12">
      <v-row>
        <v-col cols="6">
          <v-img
            :src="require('@/assets/sailboat.jpg')"
          />
        </v-col>
        <v-col cols="6">
          <base-heading
            size="text-h2"
            title="Why Full Spinnaker?"
            weight="medium"
          />
          <base-body>
            There is a moment when you are sailing that you decide to fly the spinnaker. With the wind at your back, the massive sail unfurls and seems to effortlessly fill with air. Lifting you up and pulling you along, the full spinnaker helps your boat to seemingly fly accross the water! It is an amazing feeling!<br><br>This is what we want our owners to feel with our management. Our job is to do everythign we can to make sure your vacation rental performs at peak performance. We want you to be able to recline, relax, and let us help your vacation rental to fly!
          </base-body>
          <base-contact />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  export default {
    name: 'About',

    provide: {
      theme: { isDark: false },
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
.about {
  padding: 0 0 72px 0;
}
</style>
