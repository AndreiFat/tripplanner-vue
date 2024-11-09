<script>

import {defineComponent} from "vue";
import WarningButtons from "@/components/Buttons/WarningButtons.vue";
import PopUpTemplate from "@/components/Pop-ups/PopUpTemplate.vue";

export default defineComponent({
  components: {PopUpTemplate, WarningButtons}
})
</script>

<template>
  <PopUpTemplate btn-name="Add Image Pop-up">
    <div class="text-center">
      <h3 class="h3 font-weight-bold">The information will be lost</h3>
      <p class="h7 text-muted">Please log in</p>
      <WarningButtons><i class="fa-solid fa-xl fa-circle-user"></i> Login</WarningButtons>
    </div>
  </PopUpTemplate>
</template>

<style>
</style>