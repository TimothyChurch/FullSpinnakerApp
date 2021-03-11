<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
  >
    <template v-slot:activator="{ on, attrs }">
      <base-btn
        v-bind="attrs"
        v-on="on"
      >
        Contact Us
      </base-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="text-h5">Contact Info</span>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="sendEmail">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  name="first"
                  label="First name*"
                  required
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  name="last"
                  label="Last name*"
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  name="email"
                  label="Email*"
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  name="phone"
                  label="Phone Number*"
                  required
                />
              </v-col>
              <v-col
                cols="12"
                sm="12"
              >
                <v-text-field
                  name="address"
                  label="Property Address"
                  required
                />
              </v-col>
              <v-col
                cols="12"
                sm="12"
              >
                <v-textarea
                  name="message"
                  label="Message"
                  auto-grow
                />
              </v-col>
            </v-row>
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
            <v-btn
              color="blue darken-1"
              text
              type="submit"
              @click="dialog = false"
            >
              Send
            </v-btn>
          </v-card-actions>
        </v-form>
        <small>*indicates required field</small>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>

  import emailjs from 'emailjs-com'

  export default {
    name: 'BaseContact',

    data: () => ({
      dialog: false,
    }),

    methods: {
      sendEmail: (e) => {
        console.log(e)
        emailjs.sendForm('service_10rijbi', 'template_7v6m6u2', e.target, 'user_tGEMOdZt1LfdUng45o3DK')
          .then((result) => {
            console.log('Success!', result.status, result.text, e.target)
          }, (error) => {
            console.log('Failed...', error)
          })
      },
    },
  }
</script>

<style>

</style>
