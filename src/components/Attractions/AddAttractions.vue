<script>

import AppNavbar from "@/components/Template/AppNavbar.vue";
import ImageBanner from "@/components/ImageBanner/ImageBanner.vue";
import AddImageCard from "@/components/Cards/AddImageCard.vue";
import AppFooter from "@/components/Template/AppFooter.vue";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";

export default {
  name: 'AddAttractions',
  components: {PrimaryButton, AppFooter, AddImageCard, ImageBanner, AppNavbar}
}
</script>

<template>
  <div class="position-relative overflow-hidden">
    <AppNavbar/>
    <div>
      <img alt="" class="background-image" src="@/assets/images/illustrations/circles-background.png">
    </div>
    <ImageBanner :backgroundImage="require('@/assets/images/add-images-banner.jpg')"
                 paragraph="To add your ride details, we've organized the process into two clear steps"
                 size="240px" title="Create Your Journey"/>
    <b-container>
      <b-row class="">
        <AddImageCard :backgroundImage="require('@/assets/images/illustrations/accomodation-illustration.svg')"
                      class="order-2 order-md-1"
                      paragraph="Share photos of each place where you stayed during your trip. For each accommodation, include an image of the location along with the specific check-in and check-out dates."
                      step-number="2"
                      title="Add Accommodations"/>
        <AddImageCard :backgroundImage="require('@/assets/images/illustrations/attraction-illustration.svg')"
                      class="order-1 order-md-2"
                      paragraph="Share a unique photo for each attraction you visited. Use images taken with this phone that showcase your experience at each location."
                      step-number="1"
                      title="Add Attractions"/>
      </b-row>
      <div class="d-flex justify-content-center">
        <PrimaryButton class="">Add Your Attractions</PrimaryButton>
      </div>
    </b-container>
    <AppFooter/>
  </div>
</template>

<style scoped>

</style>