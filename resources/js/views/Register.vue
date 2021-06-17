<template>
  <div class="row justify-content-center">
    <div class="col-10 col-lg-5 col-xl-5 col-md-6">
      <div class="text-center mb-4">
        <transition-group name="zoom-fade" mode="out-in" appear>
          <h4>Register</h4>
          <p class="text-muted mb-4">Sign up to continue to ചാറ്റ് മുറി.</p>
        </transition-group>
        <transition name="zoom-fade" mode="out-in" appear>
          <div class="new-card p-4">
            <div class="pt-4">
              <input-vs type="text" labelPlaceholder="User Name">
                <div slot="icon"><i class="bx bx-user"></i></div>
              </input-vs>
            </div>
            <div class="pt-4">
              <input-vs type="password" labelPlaceholder="Password">
                <div slot="icon"><i class="bx bx-lock"></i></div>
              </input-vs>
            </div>
            <div class="pt-4">
              <input-vs type="password" labelPlaceholder="Confirm Password">
                <div slot="icon"><i class="bx bx-lock"></i></div>
              </input-vs>
            </div>
            <div class="center pl-4 pl-md-6">
              <vs-checkbox> Remember Me ? </vs-checkbox>
            </div>
            <vs-button block active>Register</vs-button>
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
