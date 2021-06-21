<template>
  <div>
    <transition name="zoom-fade" mode="out-in" appear>
      <h4>Register</h4>
    </transition>
    <p class="text-muted mb-4">Sign up to continue to ചാറ്റ് മുറി.</p>

    <transition name="zoom-fade" mode="out-in" appear>
      <div class="new-card p-4">
        <vs-alert closable v-model="error" :color="color">
          <template #title> {{ errorMessage }} </template>
        </vs-alert>
        <div class="pt-4">
          <input-vs type="text" v-model="data.name" labelPlaceholder="Name">
            <div slot="icon"><i class="bx bx-user"></i></div>
            <div slot="error" v-if="errors.hasOwnProperty('name')">
              {{ errors.name[0] }}
            </div>
          </input-vs>
        </div>
        <div class="pt-4">
          <input-vs type="text" v-model="data.email" labelPlaceholder="EMail">
            <div slot="icon"><i class="bx bx-mail-send"></i></div>
            <div slot="error" v-if="errors.hasOwnProperty('email')">
              {{ errors.email[0] }}
            </div>
          </input-vs>
        </div>
        <div class="pt-4">
          <input-vs
            type="password"
            v-model="data.password"
            labelPlaceholder="Password"
          >
            <div slot="icon"><i class="bx bx-lock"></i></div>
            <div slot="error" v-if="errors.hasOwnProperty('password')">
              {{ errors.password[0] }}
            </div>
          </input-vs>
        </div>
        <div class="mt-4">
          <input-vs
            type="password"
            v-model="data.password_confirmation"
            labelPlaceholder="Confirm Password"
          >
            <div slot="icon"><i class="bx bx-lock"></i></div>
            <div slot="error" v-if="errors.hasOwnProperty('password_confirmation')">
              {{ errors.password_confirmation[0] }}
            </div>
          </input-vs>
        </div>
        <vs-button class="mt-4"
          ref="register"
          @click="register"
          block
          active
          :disabled="registerDisabled"
          >Register</vs-button
        >
      </div>
    </transition>
    <div class="mt-5 text-center">
      <p>
        Do you have an account ?
        <router-link
          :to="{ name: 'login' }"
          class="font-weight-medium text-primary"
        >
          Signin now
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import InputVs from "../components/InputVs";
export default {
  components: { InputVs },
  data() {
    return {
      data: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: {},
      disabled: false,
      error: false,
      errorMessage: "",
      color: "danger",
    };
  },
  computed: {
    registerDisabled() {
      return this.disabled;
    },
  },
  methods: {
    register() {
      this.disabled = true;
      this.errors = {};
      this.error = false;
      const loading = this.$vs.loading({
        target: this.$refs.register,
        scale: "0.6",
        background: "primary",
        opacity: 1,
        color: "#fff",
      });
      axios
        .post("register", this.data)
        .then((res) => {
          this.disabled = false;
          loading.close();
        })
        .catch((err) => {
          loading.close();
          this.disabled = false;
          this.error = true;
          this.color = "danger";
          this.errorMessage = err.response.data.message;
          if (err.response.status == 422) {
            this.errors = err.response.data.errors;
          }
        });
    },
  },
};
</script>


