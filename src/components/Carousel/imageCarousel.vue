<script>
export default {
  props: {
    src: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <b-carousel
      :id=id
      v-model="slide"
      :interval="3000"
      background="#ffffff"
      controls
      img-height="auto"
      img-width="auto"
      indicators
      style="text-shadow: 1px 1px 2px #333; border-radius: 16px; overflow: hidden;"
  >
    <b-carousel-slide>
      <template #img>
        <img
            :src=src.trip1
            alt="image slot"
            class="d-block img-fluid w-100"
            height="480"
            width="1024"
        >
      </template>
    </b-carousel-slide>
    <b-carousel-slide>
      <template #img>
        <img
            :src=src.trip4
            alt="image slot"
            class="d-block img-fluid w-100"
            height="480"
            width="1024"
        >
      </template>
    </b-carousel-slide>
    <b-carousel-slide>
      <template #img>
        <img
            :src=src.trip2
            alt="image slot"
            class="d-block img-fluid w-100"
            height="480"
            width="1024"
        >
      </template>
    </b-carousel-slide>
  </b-carousel>

</template>

<style scoped>

</style>