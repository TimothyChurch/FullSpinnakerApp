<template>
  <base-section id="theme-features">
    <base-section-heading title="Management Features">
      While there are services are constantly evolving to better serve our owners, here are a few key management features!
    </base-section-heading>
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="(feature, i) in features"
            :key="i"
            cols="12"
            md="6"
          >
            <base-info-card
              v-bind="feature"
              align="center"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut!
            </base-info-card>
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',

    data: () => ({
      features: [
        {
          title: 'Dynamic Pricing',
          icon: 'mdi-currency-usd',
          text: 'Taking into account everything from the day of the week, seasonality, and even local events, our pricing tools develop custom pricing for every day of the year!',
        },
        {
          title: 'Constant Market Analysis',
          icon: 'mdi-chart-bar-stacked',
          text: 'How your property stacks up against the competition is vital! Using online tools, we keep a finger on the pulse of your performance.',
        },
        {
          title: 'Customizable Vendors',
          icon: 'mdi-spray-bottle',
          text: 'While we do our best to utilize the great companies, we allow our owners the freedoms to choose their own cleaners and service technicians.',
        },
        {
          title: 'Owner Control',
          icon: 'mdi-account',
          text: 'Owners are offered a full range of influence when it comes to their listings. From being completely hands off to interacting with the guests, we allow owners the ability to choose.',
        },
        {
          title: 'Pre-purchase Consulting',
          icon: 'mdi-magnify',
          text: 'Are you still in the searching phase for your perfect vacation rental? We are happy to help you in finding the perfect property to fit your needs.',
        },
        {
          title: 'Local Support',
          icon: 'mdi-help-circle-outline',
          text: 'While most things can be done remotely, it is always good to have boots on the ground near the property to take care of any emergency.',
        },
      ],
    }),
  }
</script>
