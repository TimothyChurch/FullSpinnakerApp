<template>
  <base-section>
    <base-section-heading title="Contact us">
      We'd love to hear from you and answer any questions you may have!
    </base-section-heading>
    <v-form
      class="contact-form"
      @submit.prevent="sendEmail"
    >
      <v-container>
        <v-row>
          <v-col
            cols="6"
            sm="6"
          >
            <v-text-field
              v-model="firstName"
              :rules="nameRules"
              label="First Name"
              name="first"
              required
            />
          </v-col>
          <v-col
            cols="6"
            sm="6"
          >
            <v-text-field
              v-model="lastName"
              :rules="nameRules"
              label="Last Name"
              name="last"
              required
            />
          </v-col>
          <v-col
            cols="6"
            sm="6"
          >
            <v-text-field
              v-model="phone"
              label="Phone Number"
              name="phone"
              required
            />
          </v-col>
          <v-col
            cols="6"
            sm="6"
          >
            <v-text-field
              v-model="email"
              label="Email"
              :rules="emailRules"
              name="email"
              required
            />
          </v-col>
          <v-col
            cols="12"
            sm="12"
          >
            <v-text-field
              v-model="address"
              name="address"
              label="Property Address"
            />
          </v-col>
          <v-col
            cols="12"
            sm="12"
          >
            <v-textarea
              v-model="message"
              label="Message"
              name="message"
              auto-grow
            />
          </v-col>
          <v-col>
            <base-btn
              type="submit"
              value="Send"
            >
              Submit
            </base-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </base-section>
</template>

<script>
  import emailjs from 'emailjs-com'

  export default {
    data: () => ({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
      message: '',
      return: {
        form: {
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: '',
        },
      },
      valid: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      numberRules: [
        v => !!v || 'Phone number is required',
        v => v.length <= 10 || 'Phone number must be 10 digits',
        v => v.length >= 10 || 'Phone number must be 10 digits',
      ],
    }),
    methods: {
      sendEmail: (e) => {
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
