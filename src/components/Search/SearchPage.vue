<script>

import {defineComponent} from "vue";
import AppNavbar from "@/components/Template/AppNavbar.vue";
import AppFooter from "@/components/Template/AppFooter.vue";
import ImageBanner from "@/components/ImageBanner/ImageBanner.vue";
import DropdownFilter from "@/components/Buttons/DropdownFilter.vue";
import ResultOfSearchCard from "@/components/Cards/ResultOfSearchCard.vue";
import HowItWorks from "@/components/HowItWorks/HowItWorks.vue";
import DropdownWithSelect from "@/components/Buttons/DropdownWithSelect.vue";

export default defineComponent({
  components: {
    DropdownWithSelect, HowItWorks, ResultOfSearchCard, DropdownFilter, ImageBanner, AppFooter, AppNavbar
  },
  data() {
    return {
      isCollapsed: false, // Tracks the state of the collapse
    };
  },
  methods: {
    toggleArrow() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
})


</script>

<template>
  <div class="position-relative overflow-hidden">
    <AppNavbar/>
    <div>
      <img alt="" class="background-image" src="@/assets/images/illustrations/circles-background.png">
    </div>
    <div class="accommodations">
      <ImageBanner :backgroundImage="require('@/assets/images/search/top-welcome.jpg')"
                   paragraph=""
                   size="100%" title="Search for a trip">
        <div class="d-flex align-items-center flex-column mt-4">
          <div class="input-icon d-flex align-items-center">
            <i class="fa-solid fa-plane pb-2 h3 pr-2"></i>
            <input aria-describedby="basic-addon1" aria-label="search"
                   class="form-control text-right py-4 h5 rounded-pill border-0 bg-white shadow w-100"
                   placeholder="Where are you flying to?"
                   type="text">
          </div>
          <div class="d-flex input-icon justify-content-end">
            <b-form-group
                id="label-details"
                class="text-right justify-content-right d-flex align-items-center mb-0"
                label="Also suitable for people with disabilities"
                label-for="checkbox-1">

              <b-form-checkbox
                  id="checkbox-1"
                  class="checkbox-right ml-2 checkbox-custom mb-2"
                  name="checkbox-1"
                  size="lg"
                  unchecked-value="not_accepted"
                  value="accepted">
              </b-form-checkbox>
            </b-form-group>
          </div>
        </div>
      </ImageBanner>
      <!--      results-->
      <div class="container pt-md-3 pb-md-3">
        <div class="d-md-flex justify-content-end align-items-center d-none pb-2">
            <span class="h5 mr-2 mr-md-3">
                The results for "$set location" are
            </span>
          <span class="btn-primary btn rounded-pill py-2 px-3 h6">3 of 12,441</span>
        </div>
        <div class="d-block d-md-none mb-2">
          <p class="h5 d-block text-center mr-2 mr-md-3">
            The results for "$set location" are
          </p>
          <p class="mb-0 text-center">
            <span class="btn-primary btn rounded-pill py-2 px-3 h6">3 of 12,441</span>
          </p>
        </div>
      </div>
      <!--      filters-->
      <div class="container">
        <div class="card border-0 shadow-sm p-md-2 rounded-5 mb-3">
          <div class="card-body d-flex flex-column text-right position-relative">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="mb-0 mr-3">Adjust the answers according to your preferences</h5>
              <b-button
                  v-b-toggle.collapse-1
                  class="text-decoration-none d-flex align-items-center"
                  variant="link"
                  @click="toggleArrow"
              >
                <span :class="['arrow', { rotated: isCollapsed }]"></span>

              </b-button>
            </div>
            <b-collapse id="collapse-1" class="mt-3" @hide="isCollapsed = false" @show="isCollapsed = true">
              <b-row class="mt-2">
                <b-col col lg="6" md="12" sm="12" xs="12">
                  <b-row class="">
                    <b-col class="pr-md-0" md="4" sm="12" xs="12">
                      <b-form-group
                          id="input-group-1"
                          class="text-right w-100 mr-2"
                          label="End date"
                          label-for="input-1"
                      >
                        <b-form-datepicker
                            id="example-datepicker"
                            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                            class="form-control border-primary rounded-2 text-right py-1 d-flex align-items-center"
                            placeholder="Check-out"
                            style="direction: rtl;"
                        ></b-form-datepicker>
                      </b-form-group>
                    </b-col>
                    <b-col class="pr-md-0" md="4" sm="12" xs="12">
                      <b-form-group
                          id="input-group-1"
                          class="text-right w-100 mr-2"
                          label="Start date"
                          label-for="input-1"
                      >
                        <b-form-datepicker
                            id="example-datepicker"
                            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                            class="form-control border-primary rounded-2 text-right py-1 d-flex align-items-center"
                            placeholder="Check-out"
                            style="direction: rtl;"
                        ></b-form-datepicker>
                      </b-form-group>
                    </b-col>
                    <b-col md="4" sm="12" xs="12">
                      <b-form-group
                          id="label-age"
                          class="text-right w-100"
                          label="Age of participants"
                          label-for="age">
                        <DropdownWithSelect placeholder="Select Age"></DropdownWithSelect>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col class="" lg="6" md="12" sm="12" xs="12">
                  <b-row>
                    <b-col class="pr-md-0" md="6" sm="12" xs="12">
                      <b-form-group
                          id="label-age"
                          class="text-right w-100 mr-2"
                          label="Season"
                          label-for="age">
                        <DropdownFilter></DropdownFilter>
                      </b-form-group>
                    </b-col>
                    <b-col md="6" sm="12" xs="12">
                      <b-form-group
                          id="label-age"
                          class="text-right w-100"
                          label="Special Periods"
                          label-for="age">
                        <DropdownFilter></DropdownFilter>
                      </b-form-group>
                    </b-col>
                  </b-row>

                </b-col>
              </b-row>
              <div class="d-flex align-items-center justify-content-end">
                <button
                    class="btn btn-secondary mr-2 mr-md-3 w-100 custom-width px-md-5 py-3 rounded-pill fw-semibold h5 mb-0 z-2">
                  Reset Filters
                </button>
                <button class="btn btn-primary px-md-5 w-100 custom-width py-3 rounded-pill fw-semibold h5 mb-0 z-2">
                  Apply Filters
                </button>
              </div>
            </b-collapse>
          </div>
        </div>

        <!--        results-->
        <div class="mb-5">
          <ResultOfSearchCard
              id="1"
              description="What fun to write and share the experience we had :) Salzburg and Falchau region, a couple with two children aged 10 and 13"
              end-date="July 28" location="Austria"
              period="2 Weeks" start-date="July 18" title="Amazing family trip in Austria!"></ResultOfSearchCard>
          <ResultOfSearchCard
              id="2"
              description="Our Austria in 8 days... We landed in Vienna and collected our car (the car park is in the opposite parking lot, not inside the field, it took us a while to find) Austria, a dream come true. All the same green, the streams and lakes everywhere and the coolness, there is nothing better than this pleasant coolness. For a moment you can forget about this nightmare called Corona. Even if it's just for a few days. (By the way, they are very organized here in this matter)."
              end-date="July 28" location="Austria"
              period="2 Weeks" start-date="July 18" title="Austria - Vienna and Salzburg 8 days"></ResultOfSearchCard>
          <ResultOfSearchCard
              id="3"
              description="What fun to write and share the experience we had :) Salzburg and Falchau region, a couple with two children aged 10 and 13"
              end-date="July 28" location="Austria"
              period="2 Weeks" start-date="July 18" title="Salzburg and Vienna"></ResultOfSearchCard>
        </div>
      </div>
    </div>
    <div id="no-trips-found" class="container mb-5">
      <div class="card border-0 shadow-sm rounded-5 p-2 p-md-4 p-lg-5">
        <div class="card-body d-flex justify-content-center flex-column align-items-center">
          <img :src="require('@/assets/images/search/no-trips-found.svg')" alt="" class="img-fluid" height="200">
          <p class="mb-0 fs-5 text-muted text-center mt-3">
            Sorry, we currently don’t have shared rides to this location, please help use to have more
            shared
            trip and
            add the trip to the website at tour return.
          </p>
        </div>
      </div>
    </div>
    <HowItWorks></HowItWorks>
    <AppFooter/>
  </div>
</template>

<style scoped>
.form-control {
  height: 50px !important;
}

.input-icon {
  position: relative;
  width: 60%;
}

.input-icon input {
  padding-right: 4em;
  padding-left: 4em;
}

.input-icon .fa-plane {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(45deg, #34D0B6, #07A0C3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.arrow {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  transform: rotate(45deg); /* Initial arrow pointing down */
  transition: transform 0.3s ease; /* Smooth rotation animation */
}

.arrow.rotated {
  transform: rotate(-135deg); /* Arrow pointing up */
}

@media (max-width: 1000px) {
  .input-icon {
    position: relative;
    width: 100%;
  }
}

@media (min-width: 768px) {
  .custom-width {
    width: auto !important;
  }
}
</style>