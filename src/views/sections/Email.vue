<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="firstName"
            :rules="nameRules"
            label="First Name"
            required
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="lastName"
            :rules="nameRules"
            label="Last Name"
            required
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="email"
            label="Email"
            :rules="emailRules"
            required
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            label="Address"
            prepend-icon="mdi-map-market"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
  }
</script>

<style>

</style>
