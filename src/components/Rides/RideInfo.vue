<script>

import ImageBanner from "@/components/ImageBanner/ImageBanner.vue";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
import AppNavbar from "@/components/Template/AppNavbar.vue";
import AppFooter from "@/components/Template/AppFooter.vue";
import DropdownWithSelect from "@/components/Buttons/DropdownWithSelect.vue";

export default {
  components: {DropdownWithSelect, AppFooter, PrimaryButton, ImageBanner, AppNavbar},
}
</script>

<template>
  <div class="position-relative overflow-hidden">
    <AppNavbar/>
    <div>
      <img alt="" class="background-image" src="@/assets/images/illustrations/circles-background.png">
    </div>
    <ImageBanner :backgroundImage="require('@/assets/images/ride-info-banner.jpg')"
                 paragraph="A closer look at each stop—destinations, stays, and memorable highlights from the journey"
                 size="240px" title="The details of the trip"/>
    <b-container>
      <b-row class="justify-content-center">
        <b-col col md="6">
          <b-form>
            <b-form-group
                id="input-group-1"
                class="text-right"
                label="Start and end date"
                label-for="input-1"
            >
              <b-form-datepicker
                  id="example-datepicker"
                  :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                  class="form-control border-primary rounded-2 text-right py-1"
                  placeholder="Check-out"
                  style="direction: rtl;"
              ></b-form-datepicker>
            </b-form-group>

            <b-form-group
                id="label-title"
                class="text-right"
                label="Link to shared photo album"
                label-for="title">
              <b-form-input
                  id="title"
                  class="form-control border-primary rounded-2 text-right py-4"
                  placeholder="Title of the trip"
                  required
                  type="text"

              ></b-form-input>
            </b-form-group>

            <b-form-group
                id="label-albumLink"
                class="text-right"
                label="Photo album link"
                label-for="albumLink">
              <b-form-input
                  id="albumLink"
                  class="form-control border-primary rounded-2 text-right py-4"
                  placeholder="Link to shared photo album"
                  required
                  type="text"
              ></b-form-input>
            </b-form-group>
            <b-form-group
                id="label-age"
                class="text-right"
                label="Age of participants"
                label-for="age">
              <DropdownWithSelect placeholder="The age composition of the participants"></DropdownWithSelect>
            </b-form-group>


            <b-form-group
                id="label-details"
                class="text-right"
                label="General Details"
                label-for="albumLink">
              <b-form-textarea
                  id="textarea"
                  class="border-primary rounded-2 p-3"
                  max-rows="6"
                  placeholder="General details about the trip"
                  rows="4"
                  style="direction: rtl;"
              ></b-form-textarea>
            </b-form-group>
            <b-form-group
                id="label-details"
                class="text-right justify-content-end d-flex align-items-center"
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
          </b-form>
          <PrimaryButton class="w-100 mb-5">Save and add accommodations</PrimaryButton>
        </b-col>
      </b-row>
    </b-container>
    <AppFooter/>
  </div>
</template>

<style scoped>
.custom-height {
  height: 50px; /* Adjust to desired height */
  line-height: 1.5; /* Ensures proper text alignment */
}

#checkbox-1 {
  display: flex;
  align-items: center;
}

</style>