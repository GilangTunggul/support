<template>
  <div>
    <v-form @submit="onSubmit" @reset="onReset" v-if="show">
      <v-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <v-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></v-form-input>
      </v-form-group>

      <v-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <v-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></v-form-input>
      </v-form-group>

      <v-form-group id="input-group-3" label="Gender:" label-for="input-3">
        <v-form-select
          id="input-3"
          v-model="form.gender"
          :options="genders"
          required
        ></v-form-select>
      </v-form-group>

      <v-form-group id="input-group-4">
        <v-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <v-form-checkbox value="me">Check me out</v-form-checkbox>
          <v-form-checkbox value="that">Check that out</v-form-checkbox>
        </v-form-checkbox-group>
      </v-form-group>

      <v-button type="submit" variant="primary">Submit</v-button>
      <v-button type="reset" variant="danger">Reset</v-button>
    </v-form>
    <v-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </v-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          gender: null,
          checked: []
        },
        genders: [{ text: 'Select One', value: null }, 'Male', 'Female'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        this.form.email = ''
        this.form.name = ''
        this.form.gender = null
        this.form.checked = []
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>