<template>
  <div>
    <transition name="zoom-fade" mode="out-in" appear>
      <h4>Login</h4>
    </transition>
    <p class="text-muted mb-4">Sign in to continue to ചാറ്റ് മുറി.</p>
    <transition name="zoom-fade" mode="out-in" appear>
      <div class="new-card p-4">
        <vs-alert closable v-model="error" :color="color">
          <template #title> {{ errorMessage }} </template>
        </vs-alert>
        <div class="pt-4">
          <input-vs type="text" v-model="data.email" label-placeholder="EMail">
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
        <div class="center pl-4">
          <vs-checkbox v-model="data.remember"> Remember Me ? </vs-checkbox>
        </div>
        <vs-button
          ref="login"
          block
          active
          :disabled="loginDisabled"
          @click="login"
          >Login</vs-button
        >
      </div>
    </transition>
    <div class="mt-5 text-center">
      <p>
        Don't have an account ?
        <router-link
          :to="{ name: 'register' }"
          class="font-weight-medium text-primary"
        >
          Signup now
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
        email: "",
        password: "",
        remember: false,
      },
      errors: {},
      disabled: false,
      error: false,
      errorMessage: "",
      color: "danger",
    };
  },
  computed: {
    loginDisabled() {
      return this.disabled;
    },
  },
  methods: {
    login() {
      this.errors = {};
      this.disabled = true;
      this.error = false;
      const loading = this.$vs.loading({
        target: this.$refs.login,
        scale: "0.6",
        background: "primary",
        opacity: 1,
        color: "#fff",
      });
      axios
        .post("login", this.data)
        .then((res) => {
          this.disabled = false;
          loading.close();
          this.$swal({
            title: res.data.message,
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            icon: "success",
          });
          this.$store.dispatch("login", res.data);
          this.$router.push({name:'home'})
        })
        .catch((err) => {
          console.log(err);
          loading.close();
          this.disabled = false;
          if (err.response.status == 422) {
            this.errors = err.response.data.errors;
          }
          this.error = true;
          this.color = "danger";
          this.errorMessage = err.response.data.message;
        });
    },
  },
};
</script>

