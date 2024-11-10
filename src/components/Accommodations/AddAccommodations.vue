<script setup>

import ImageBanner from "@/components/ImageBanner/ImageBanner.vue";
import AppNavbar from "@/components/Template/AppNavbar.vue";
import AppFooter from "@/components/Template/AppFooter.vue";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
</script>

<template>
  <div class="position-relative overflow-hidden">
    <AppNavbar/>
    <div>
      <img alt="" class="background-image" src="@/assets/images/illustrations/circles-background.png">
    </div>
    <div class="accommodations">
      <ImageBanner :backgroundImage="require('@/assets/images/add-accommodation-banner.jpg')"
                   paragraph="In this part, please upload images for all the accommodations where you stayed, along with the check-in and check-out dates for each. If you prefer not to provide the exact accommodation details, you can just enter the city name"
                   size="100%" title="Showcase Your Journey: Where Memories Were Made Along the Way">
        <PrimaryButton>Add Your Accommodations</PrimaryButton>
      </ImageBanner>
    </div>
    <AppFooter/>
  </div>
</template>

<style scoped>
.accommodations {
  height: calc(100dvh - 360px) !important;
}

@media (max-width: 575.98px) {
  .accommodations {
    height: calc(100dvh - 80px) !important;
  }
}
</style>