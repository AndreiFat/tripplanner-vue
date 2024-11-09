<script>

import {defineComponent} from "vue";
import PopUpTemplate from "@/components/Pop-ups/PopUpTemplate.vue";

export default defineComponent({
  components: {PopUpTemplate}
})
</script>

<template>
  <PopUpTemplate btn-name="Upload Images">
    <div class="text-center">
      <h3 class="h4 font-weight-bold">Uploading images</h3>
      <span class="btn btn-primary px-3 py-2 rounded-pill">1 of 10</span>
    </div>
  </PopUpTemplate>
</template>

<style>
</style>