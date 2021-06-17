<template>
  <div class="row justify-content-center">
    <div class="col-10 col-lg-5 col-xl-5 col-md-6">
      <div class="text-center mb-4">
        <h4>Login</h4>
        <p class="text-muted mb-4">Sign in to continue to ചാറ്റ് മുറി.</p>
        <div class="new-card p-4">
          <div class="pt-4">
            <input-vs type="text" v-model="email" label-placeholder="EMail">
              <div slot="icon"><i class="bx bx-mail-send"></i></div>
            </input-vs>
          </div>
          <div class="pt-4">
            <input-vs
              type="password"
              v-model="password"
              labelPlaceholder="Password"
            >
              <div slot="icon"><i class="bx bx-lock"></i></div>
            </input-vs>
          </div>
          <div class="center pl-4">
            <vs-checkbox> Remember Me ? </vs-checkbox>
          </div>
          <vs-button block active>Login</vs-button>
        </div>
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
          <p>
            © 2021 ചാറ്റ് മുറി. Crafted with
            <i class="mdi mdi-heart text-danger"></i> by Ajosh Ajo
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputVs from "../components/InputVs";
export default {
  components: { InputVs },
  mounted() {
    console.log(this.email);
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style>
.new-card {
  background-color: rgba(var(--vs-background), 1);
  border-radius: 20px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  -webkit-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
}
</style>
