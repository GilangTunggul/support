<template>
  <v-parallax
    dark
    height="600"
    src="@/components/Image/gambar.png"
  >
  <v-hover v-slot:default="{ hover }">
    <v-card width="400" class="mx-auto mt-5" color="light-green lighten-4">
      <v-card-title class="text-center justify-center py-6">
        <h2
        class="display-2 font-weight-bold"
        align="center"
        justify="center"
         >Login</h2>
      </v-card-title>
    <v-card-text>
      <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      solo
     >
     <!--    <v-text-field
          v-model="name"
          :counter="15"
          :rules="nameRules"
          prepend-icon="mdi-account-cicle"
          hint="At least 5 characters"
          label="Name"
          required
          /> -->
        <v-text-field
          v-model="email"
          :rules="emailRules"
          prepend-icon="mdi-account-cicle"
          label="Email"
          required
          filled
          />
        <v-text-field
          v-model="password"
          :append-icon="passwordd ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="passwordd ? 'text' : 'password'"
          name="input-10-2"
          label="Password"
          hint="At least 8 characters"
          prepend-icon="mdi-lock"
          value="Pa"
          @click:append="passwordd = !passwordd"
          filled
          />
    </v-form>
    </v-card-text>
    <v-card-actions class="text-center justify-center py-6">
      <v-btn
      :enabled="!valid"
      color="info"
      class="mr-4"
      @click="login(validate=true)"

    >
      Login
    </v-btn>
      <v-btn color="success" to="register">Register</v-btn>
    </v-card-actions>
    </v-card>
  </v-hover>

    <v-snackbar
      v-model="snackbar"
      :vertical="vertical"
      color="red"
    >
      {{ text }}
      <v-btn
        color="black"
        text
        justify="center"
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>

  </v-parallax>
</template>
<script>
import { login } from '@api';
import { setCookie } from '@/helpers/cookie'
export default {
  name: 'Login',
  components: {
  },
  data: () => ({
    snackbar: false,
    text: 'Sorry But Password or Email Incorrect',
    vertical: true,
    passwordd: false,
    valid: true,
    // name: '',
    email: '',
    password: '',
    // nameRules: [
    // v => !!v || 'Name is required',
    // v => (v && v.length <= 15) || 'Name must be less than 15 characters',
    // v => v.length >= 5 || 'Min 5 characters'
    //   ],
    emailRules: [
    v => !!v || 'Email is required',
    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    rules: {
          required: value => !!value || 'Password is Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
        },
  }),
  methods : {
    login() {
      const  base = this;
      let request = {
        "email": this.email,
        "password": this.password
      };
      login(request )
        .then((response)=> {
            console.log(response);
          if(response.status == 200 ) {
            if (response.data) { 
              setCookie("token", response.data.token);
              this.$router.push({
              name: 'home'  
            })
            }
          }
          else {
          // handle warning, dll
          }
        })
        .catch(error => {
          console.log(error)
          base.snackbar= true;
      })
    },
    validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
    }
  };
</script>