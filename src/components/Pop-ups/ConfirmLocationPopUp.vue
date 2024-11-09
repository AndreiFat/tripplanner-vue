<script>

import {defineComponent} from "vue";
import PopUpTemplate from "@/components/Pop-ups/PopUpTemplate.vue";
import NoButton from "@/components/Buttons/NoButton.vue";
import YesButton from "@/components/Buttons/YesButton.vue";

export default defineComponent({
  components: {YesButton, NoButton, PopUpTemplate}
})
</script>

<template>
  <PopUpTemplate btn-name="Confirm Location">
    <div class="text-center">
      <h3 class="h4 font-weight-bold">Is the image you selected associated with the point you chose on the map?</h3>
      <p class="h7 text-muted">This action will add the image to your ride as this specific point.</p>
      <NoButton>No</NoButton>
      <YesButton>Yes</YesButton>
    </div>
  </PopUpTemplate>
</template>

<style>
</style>