<script>

import {defineComponent} from "vue";
import PopUpTemplate from "@/components/Pop-ups/PopUpTemplate.vue";

export default defineComponent({
  components: {PopUpTemplate}
})
</script>

<template>
  <PopUpTemplate btn-name="Process Information">
    <div class="text-center">
      <i class="fa-solid fa-plane-departure fa-3x text-primary mb-3"></i>
      <h3 class="h4 font-weight-bold">We are analyzing the images sent by you</h3>
      <p class="h7 text-muted">This may take 5 seconds</p>
      <i class="fa-solid fa-spinner fa-2x fa-spin-pulse text-orange"></i>
    </div>
  </PopUpTemplate>
</template>

<style>
</style>