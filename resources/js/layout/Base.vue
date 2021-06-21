<template>
  <div class="my-5 pt-sm-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10 col-lg-5 col-xl-5 col-md-6">
          <div class="text-center mb-4">
            <transition name="slide-fade" mode="out-in">
              <router-view />
            </transition>

            <div class="mt-5 text-center">
              <p class="copyright-footer">
                © 2021 ചാറ്റ് മുറി. Crafted with
                <i class="mdi mdi-heart text-danger"></i> by Ajosh Ajo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.copyright-footer {
  transition: all 0.25s ease;
  -webkit-transition: all 0.25s ease;
}
</style>



