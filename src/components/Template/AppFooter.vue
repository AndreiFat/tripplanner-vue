<script>

import {defineComponent} from "vue";
import LinkFooter from "@/components/Buttons/LinkFooter.vue";

export default defineComponent({
  components: {LinkFooter}
})
</script>

<template>
  <footer class="bg-footer container-fluid py-4 text-white">
    <div class="container">
      <div class="row mb-4">
        <div class="col d-flex">
          <a href="/">
            <img alt="" class="footer-image" height="48px" src="@/assets/Logo-footer.svg">
          </a>
          <a class="btn btn-white bg-white ml-auto d-flex align-items-center justify-content-center rounded-3"
             href="#top"
             style="height: 40px; width: 40px;"><i class="fa-xl fa-solid fa-arrow-up color-primary"></i></a>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <div class="row">
            <div class="col-4">
              <p class=" h5 fw-bold">Pages</p>
              <div class="opacity-75">
                <p class="h6">
                  <LinkFooter href="/">Home</LinkFooter>
                </p>
                <p class="h6">
                  <LinkFooter href="/">About</LinkFooter>
                </p>
                <p class="mb-0 h6">
                  <LinkFooter href="/">Contact</LinkFooter>
                </p>
              </div>
            </div>
            <div class="col-4">
              <p class=" h5 fw-bold">Other</p>
              <div class="opacity-75">
                <p class=" h6">
                  <LinkFooter href="/">Terms</LinkFooter>
                </p>
                <p class=" h6">
                  <LinkFooter href="/">Search Trips</LinkFooter>
                </p>
              </div>
            </div>
            <div class="col-4">
              <p class=" h5 fw-bold">Social Media</p>
              <div class="opacity-75">
                <p class=" h6">
                  <LinkFooter href="/"><i class="fa-md-xl fa-lg fa-brands fa-facebook mr-1"></i> Facebook</LinkFooter>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center opacity-50 mb-0 h7">
        © 2024 Tripplanner - All rights reserved
      </p>
    </div>
  </footer>
</template>

<style scoped>
.h6 {
  font-weight: 300;
}

.opacity-50 {
  opacity: .5;
}
</style>