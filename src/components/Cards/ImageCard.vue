<script>
import DatePicker from "@/components/Buttons/DatePicker.vue";
import NoButton from "@/components/Buttons/NoButton.vue";
import YesButton from "@/components/Buttons/YesButton.vue";

export default {
  components: {YesButton, NoButton, DatePicker},
  props: {
    backgroundImage: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <div class="card border-0 shadow-sm rounded-5">
    <div class="card-body p-2 p-md-3 d-flex flex-column text-right gap-md-3 position-relative">
      <div>
        <div
            :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
            class="component-image">
        </div>
        <div class="d-flex align-items-center justify-content-between px-2 py-2 bg-light mt-3 rounded-pill">
          <div class="d-flex align-items-center">
            <DatePicker/>
            <span class="ml-2">{{ date }}</span>
          </div>
          <h5 class="mb-0 h5 mr-2">
            Was made in
          </h5>
        </div>
        <slot></slot>
        <div class="mt-4 text-center">
          <h5>Is it Jenerbahn?</h5>
          <div class="d-flex justify-content-between align-items-center detection-question-buttons">
            <NoButton class="w-100">No</NoButton>
            <YesButton class="w-100">Yes</YesButton>
          </div>
          If it is not your location, <span class="text-underline">add the location manually</span>.
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.component-image {
  width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  height: 500px;
  border-radius: 20px;
}

.card-body {
  gap: 24px;
}

.detection-question-buttons {
  gap: 12px;
}

.text-underline {
  text-decoration: underline !important;
  color: #07A0C3 !important;
}
</style>