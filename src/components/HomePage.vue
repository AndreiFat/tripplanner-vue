<script setup>

import AddImagesPopUp from "@/components/Pop-ups/AddImagesPopUp.vue";
import ConfirmLocationPopUp from "@/components/Pop-ups/ConfirmLocationPopUp.vue";
import UploadImagesPopUp from "@/components/Pop-ups/UploadImagesPopUp.vue";
import ProcessInformationPopUp from "@/components/Pop-ups/ProcessInformationPopUp.vue";
</script>

<template>
  <div>
    <div>
      <AddImagesPopUp></AddImagesPopUp>
    </div>
    <div>
      <ConfirmLocationPopUp></ConfirmLocationPopUp>
    </div>
    <div>
      <ProcessInformationPopUp></ProcessInformationPopUp>
    </div>
    <div>
      <UploadImagesPopUp></UploadImagesPopUp>
    </div>
  </div>
</template>

<style scoped>

</style>