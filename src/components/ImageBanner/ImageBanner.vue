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
    size: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <b-container :style="{height:size}" class="bg-welcome">
    <div
        :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
        class="w-100 h-100 shadow-sm rounded-5 p-3 p-md-5 text-center d-flex align-items-center justify-content-center component-image">
      <div class="info-text">
        <h1 class="font-title h1">
          {{ title }}
        </h1>
        <p class="mb-0 font-text-paragraph h6">
          {{ paragraph }}
        </p>
        <slot></slot>
      </div>
    </div>
  </b-container>
</template>

<style scoped>
.font-text-paragraph {
  opacity: 90%;
  font-weight: 300;
  line-height: normal;
}

.font-title {
  font-weight: 800;
}

.bg-welcome {
  margin-top: 96px;
  padding-bottom: 24px;
}

.component-image {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}

.component-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(21, 21, 21, 0.3), rgba(12, 12, 12, 0.7));
  z-index: 0; /* Place the overlay below content but above the image */
  border-radius: 32px;
}

/* Content over the image and overlay */
.info-text {
  position: relative;
  z-index: 2 !important; /* Content above the overlay */
  text-align: center;
  color: #ffffff !important;
}

@media (max-width: 575.98px) {
  .bg-welcome {
    margin-top: 80px;
    padding-bottom: 24px;
  }
}
</style>