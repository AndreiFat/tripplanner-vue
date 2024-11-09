<script>
export default {
  props: {
    backgroundImage: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    paragraph: {
      type: String,
      required: true
    },
    stepNumber: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <b-col class="mt-3 mt-md-0" col lg="6">
    <div class="card border-0 shadow-sm p-md-3 rounded-5">
      <div class="card-body d-flex flex-column text-right gap-md-3 position-relative">
        <div
            class="step-number-badge position-absolute h4 rounded-circle d-flex justify-content-center align-items-center"
            style="">
          {{ stepNumber }}
        </div>
        <img :alt="title" :src="backgroundImage"
             class="image-how-it-works"/>
        <h4 class="fw-semibold mb-0 h4">
          {{ title }}
        </h4>
        <p class="mb-0 text-muted paragraph-font h7">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </b-col>
</template>

<style scoped>
.card-body {
  gap: 1rem;
}

.paragraph-font {
  font-weight: 300;
  line-height: normal;
}
</style>