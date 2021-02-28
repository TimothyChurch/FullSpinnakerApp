<template>
  <v-footer
    id="home-footer"
    color="black"
    dark
    min-height="72"
    fixed
  >
    <v-container>
      <v-row
        justify="center"
      >
        <!-- <v-col
          cols="12"
          md="6"
        >
          <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">
            <template v-for="(s, i) in social">
              <a
                :key="s"
                class="white--text pa-1 pa-md-0"
                href="#"
                v-text="s"
              />

              <v-responsive
                v-if="i < social.length - 1"
                :key="`divider-${s}`"
                class="mx-4 shrink hidden-sm-and-down"
                max-height="24"
              >
                <v-divider
                  vertical
                />
              </v-responsive>
            </template>
          </div>
        </v-col> -->

        <v-col
          class="text-center text-md-center"
          cols="12"
          md="6"
        >
          <a
            href="mailto:VacationRentalTim@gmail.com"
            class="white--text pa-1 pa-md-0"
          >
            VacationRentalTim@gmail.com
          </a>
          <v-divider
            vertical
            class="mx-4"
          />
          <a
            href="tel:4098774159"
            class="white--text pa-1 pa-md-0"
          >
            (409)877-4159
          </a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'HomeFooter',

    data: () => ({
      social: [
        'Facebook',
        'Airbnb',
      ],
    }),
  }
</script>

<style lang="sass">
  #home-footer a
    text-decoration: none
</style>
