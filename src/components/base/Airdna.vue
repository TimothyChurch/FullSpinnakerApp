<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="500"
  >
    <template v-slot:activator="{ on, attrs }">
      <base-btn
        v-bind="attrs"
        v-on="on"
      >
        How Could Your Property Do?
      </base-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="text-h5">Rentalizer Summary</span>
      </v-card-title>
      <v-card-subtitle>
        <span>Powered by AirDNA</span>
      </v-card-subtitle>

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
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="blue darken-1"
          text
          @click="dialog = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'BaseAirdna',

    data: () => ({
      dialog: false,
    }),

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
