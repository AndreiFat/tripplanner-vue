<script setup>

</script>

<template>
  <div class="container-fluid bg-light-blue py-5 position-relative overflow-hidden">
    <div
        class="position-absolute"
        style="top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 0"
    >
      <img :src="require('@/assets/images/how-it-works/airlines-draw.svg')" alt="">
    </div>
    <div class="container">
      <h2 class="fw-bold text-center pt-3 pt-md-5">How it works?</h2>
      <b-row class="row my-3 my-md-5">
        <b-col align-self="stretch" class="col-lg-4 mb-lg-0 order-3 order-lg-1 mb-3">
          <div class="card border-0 shadow-sm p-2 p-md-3 rounded-5 h-100">
            <div class="card-body d-flex flex-column text-end position-relative ">
              <div
                  class="step-number-badge position-absolute h4 rounded-circle d-flex justify-content-center align-items-center"
                  style="">
                3
              </div>
              <img :src="require('@/assets/images/how-it-works/step3.svg')" alt="step 3"
                   class="image-how-it-works mb-3">
              <h4 class="fw-semibold text-right h4">
                Enjoy the trip <br>and share families
              </h4>
              <p class="h6 mb-0 text-muted text-right">
                Enjoy unforgettable trips and connect with other families through home exchanges!
              </p>
            </div>
          </div>
        </b-col>
        <b-col align-self="stretch" class="col-lg-4 mb-lg-0 order-2 order-lg-2 mb-3">
          <div class="card border-0 shadow-sm p-2 p-md-3 rounded-5 h-100">
            <div class="card-body d-flex flex-column text-end gap-md-3 position-relative">
              <div
                  class="step-number-badge position-absolute h4 rounded-circle d-flex justify-content-center align-items-center"
                  style="">
                2
              </div>
              <img :src="require('@/assets/images/how-it-works/step2.svg')" alt="step 2"
                   class="image-how-it-works mb-3">
              <h4 class="fw-semibold text-right h4">
                Add or remove existing activities to the trip
              </h4>
              <p class="h6 mb-0 text-muted text-right">
                Enjoy unforgettable trips and connect with other families through home exchanges!
              </p>
            </div>
          </div>
        </b-col>
        <b-col align-self="stretch" class="col-lg-4 mb-lg-0 order-1 order-lg-3  mb-3">
          <div class="card border-0 shadow-sm p-md-3 p-2 rounded-5 h-100">
            <div class="card-body d-flex flex-column text-end gap-md-3 position-relative">
              <div
                  class="step-number-badge position-absolute h4 rounded-circle d-flex justify-content-center align-items-center"
                  style="">
                1
              </div>
              <img :src="require('@/assets/images/how-it-works/step1.svg')" alt="step 1"
                   class="image-how-it-works mb-3">
              <h4 class="fw-semibold text-right h4">
                Choose a shared trip <br>as a base
              </h4>
              <p class="h6 mb-0 text-muted text-right">
                Start your incredible journey by selecting a shared trip as your base!
              </p>
            </div>
          </div>
        </b-col>
      </b-row>
      <div class="d-flex justify-content-center pb-3 pb-md-5 position-relative" style="z-index: 2!important;">
        <button class="btn btn-primary px-5 py-3 rounded-pill fw-semibold h5 z-2">
          View Travel Itineraries
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-how-it-works {
  height: 150px !important;
}
</style>