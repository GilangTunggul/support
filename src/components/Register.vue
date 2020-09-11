<template>
    <v-parallax
    dark
    height="600"
    src="@/components/Image/gambar.png"
  >
    <v-card width="400" class="mx-auto mt-5" color="light-green lighten-4">
      <v-card-title>
        <v-col cols="12" sm="3">
            <v-btn text icon color="black" to="login">
              <v-icon to="login">mdi-arrow-left</v-icon>
            </v-btn>
          </v-col>
        <h2 class="display" width="200px" >Register </h2>
      </v-card-title>
      <v-card-text>
      <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      >
        <v-text-field
          v-model="form.name"
          :counter="15"
          :rules="nameRules"
          prepend-icon="mdi-account-cicle"
          hint="At least 5 characters"
          label="Name"
          required
          filled
          />
          <v-text-field
          v-model="form.email"
          :rules="emailRules"
          prepend-icon="mdi-account-cicle"
          label="Email"
          required
          filled

          />
          <v-text-field
          v-model="form.phonenumber"
          :counter="12"
          :rules="phoneRules"
          prepend-icon="mdi-account-cicle"
          label="Phone Number"
          required
          filled
          />
          <v-select
          v-model="form.gender"
          :items="gender"
          :rules="[v => !!v || 'Pilih Jenis Kelamin']"
          prepend-icon="mdi-account-cicle"
          label="Gender"
          filled
          required
          ></v-select>
          <v-text-field
            v-model="form.password"
            :append-icon="passwordd ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.emailMatch, rules.min]"
            :type="passwordd ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            name="input-10-2"
            label="Password"
            value="Pa"
            filled
            hint="At least 8 characters"
            @click:append="passwordd = !passwordd"
            />
<!--           <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
          ></v-checkbox> -->
    </v-form>
    </v-card-text>
    <v-card-actions class="text-center justify-center py-6">
      <v-btn 
      color="success"
      @click="register(snackbar = true)"
      >Done 
    </v-btn>
      <v-snackbar
      color="success"
      v-model="snackbar"
    >
      {{ text }}
      <v-btn
        success
        color="dark"
        text
        @click="snackbar = false"
      >
        Close
    </v-btn>
    </v-snackbar>
    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset
    </v-btn>
    </v-card-actions>
    </v-card>
</v-parallax>
</template>
<script>
import { register } from '@api';
export default {
  name: 'Register',
  components: {
  },
  data: () => ({
    form: {
      name: '',
      email: '',
      phonenumber: '',
      password: '',
      gender: '',
    },
    gender: [
      'Female',
      'Male',
    ],
    passwordd: false,
    snackbar: false,
    text: 'Register success',
    select: null,
    nameRules: [
    v => !!v || 'Name is required',
    v => (v && v.length <= 15) || 'Name must be less than 15 characters',
    v => v.length >= 5 || 'Min 5 characters'
      ],
    emailRules: [
    v => !!v || 'Email is required',
    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    phoneRules: [
    v => !!v || 'Phone is required',
    v => (v && v.length <= 12) || 'PhoneNumber must be less than 12 characters',
    ],
    rules: {
          required: v => !!v || 'Password is required',
          min: v => v.length >= 8 || 'Min 8 characters',
        },
  }),
  methods: {
  register() {
    let request = {
      "name" : this.form.name,
      "email" : this.form.email,
      "phonenumber" : this.form.phonenumber,
      "gender" : this.form.gender,
      "password" : this.form.password
    }  
    register(request)
      .then((response)=> {
          if(response.status == 200 ) {
            console.log(response.data)
            this.goToLogin()
          }
          else {
            // handle warning, dll
          }
        })
        .catch((e)=> {
          // handle error
          console.log(e)
        })
      },
      goToLogin(){
        this.$router.push({name : 'Login'});
      },
      reset () {
        this.$refs.form.reset()
      },
    }
  };
</script>