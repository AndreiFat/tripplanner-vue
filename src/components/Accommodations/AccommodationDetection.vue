<script setup>

import AppNavbar from "@/components/Template/AppNavbar.vue";
import AppFooter from "@/components/Template/AppFooter.vue";
import WarningButtons from "@/components/Buttons/WarningButtons.vue";
import ImageCard from "@/components/Cards/ImageCard.vue";
import LocationLabelButton from "@/components/Buttons/LocationLabelButton.vue";
import SecondaryButton from "@/components/Buttons/SecondaryButton.vue";
</script>

<template>
  <div class="position-relative overflow-hidden">
    <AppNavbar/>
    <div>
      <img alt="" class="background-image" src="@/assets/images/illustrations/circles-background.png">
    </div>
    <b-container class="top-section">
      <div class="d-flex justify-content-between align-items-center pb-2 border-bottom">
        <div>
          <span class="btn btn-primary px-3 py-2 rounded-pill">1 of 10</span>
        </div>
        <h2 class="mb-0 h2">
          Adding Attraction
        </h2>
      </div>
      <b-row class="mt-2 mt-md-4">
        <b-col class="mb-4 mb-md-0" col md="5">
          <div class="d-flex justify-content-end align-items-center">
            <h4 class="mr-3 h4">Automatic detection</h4>
            <div
                class="h4 rounded-circle d-flex justify-content-center align-items-center section-bullet">
              <i class="fa-solid fa-magnifying-glass-location"></i>
            </div>
          </div>
          <ImageCard :backgroundImage="require('@/assets/images/detected-image.jpeg')"
                     date="14:47:01 2024:10:11">
            <div class="mt-4">
              <h5 class="text-center h5 mr-2">
                What is the check-in and check-out date?
              </h5>
              <div class="d-flex justify-content-between align-items-center gap-2">
                <b-form-datepicker
                    id="example-datepicker"
                    v-model="value"
                    :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                    class="form-control border-primary rounded-2"
                    placeholder="Check-out"
                    style="direction: rtl;"
                ></b-form-datepicker>
                <i class="fa-solid fa-arrow-left fa-lg color-primary"></i>
                <b-form-datepicker
                    id="example-datepicker"
                    v-model="value"
                    :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                    class="form-control border-primary rounded-2"
                    placeholder="Check-in"
                    style="direction: rtl;"
                ></b-form-datepicker>
              </div>
            </div>
          </ImageCard>
        </b-col>

        <b-col col md="7">
          <div class="d-flex justify-content-end align-items-center">
            <h4 class="mr-3 h4">Manual addition</h4>
            <div
                class="h4 rounded-circle d-flex justify-content-center align-items-center section-bullet">
              <i class="fa-regular fa-hand-point-up"></i>
            </div>

          </div>
          <div class="text-right flex-column d-flex gap-2">
            <p class="text-muted mb-0">
              Click on the point on the map that is related to the photo taken
            </p>
            <div class="d-flex justify-content-center align-items-center p-3 bg-white rounded-5 shadow-sm">
              <div style="width: 100%; position: relative;">
                <iframe frameborder="0" height="353" marginheight="0" marginwidth="0"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=100%25&amp;height=353&amp;hl=en&amp;q=Montreal+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        width="100%">
                  <a href="https://www.gps.ie/">gps systems</a></iframe>
                <div
                    class="position-absolute rounded-circle d-flex justify-content-center align-items-center primary circle shadow-lg"
                    style="top:200px; left:300px;">
                  <i class="fa-solid fa-xl fa-location-dot"></i>
                </div>
              </div>
            </div>
            <div>
              <p class="text-muted mb-0">
                Please select a name from the list or enter it manually.
              </p>
              <div class="input-group mb-0 my-md-3">
                <input aria-describedby="basic-addon1" aria-label="search"
                       class="form-control text-right py-4 px-3 fs-5 rounded-pill border-0 bg-white shadow-sm"
                       placeholder="Where are you flying to?"
                       type="text">
              </div>
              <div class="input-group justify-content-end align-items-center d-flex">
                <LocationLabelButton>Jennerbahn</LocationLabelButton>
                <LocationLabelButton>Campingplatz Grafenlehen</LocationLabelButton>
                <LocationLabelButton>Gaststätte Echostüberl</LocationLabelButton>
                <LocationLabelButton>Malerwinkel</LocationLabelButton>
                <LocationLabelButton>Camping & Pension Mühlleiten</LocationLabelButton>
                <LocationLabelButton>Pizzeria Lago</LocationLabelButton>
              </div>
              <div class="justify-content-end align-items-center d-flex flex-column flex-lg-row gap-2 mt-3">
                <SecondaryButton class="btn-mobile order-2 order-md-1">Skip and continue</SecondaryButton>
                <WarningButtons class="btn-mobile order-1 order-md-2">Add and insert the name later
                </WarningButtons>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <AppFooter/>
  </div>
</template>

<style scoped>
.top-section {
  margin-top: 96px;
  padding-bottom: 24px;
}

.section-bullet {
  background-color: rgba(7, 160, 195, 0.2);
  color: #07A0C3;
  height: 42px;
  width: 42px;
  top: 16px;
  right: 16px;
  font-weight: 900;
}

.h4 {
  font-weight: 700;
}

.h2 {
  font-weight: 800;
}

.circle {
  height: 42px;
  width: 42px;
}

.gap-2 {
  gap: 16px;
}

.btn-mobile {
  width: auto;
}

@media (max-width: 575.98px) {
  .btn-mobile {
    width: 100%;
  }

  .gap-2 {
    gap: 6px;
  }
}
</style>