<script>

import ImageCarousel from "@/components/Carousel/imageCarousel.vue";

export default {
  components: {ImageCarousel},
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    period: {
      type: String,
      required: true
    },
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      imagePaths: {
        trip1: require('@/assets/images/recommended-trips/trip1.png'),
        trip2: require('@/assets/images/recommended-trips/trip2.png'),
        trip3: require('@/assets/images/recommended-trips/trip3.png'),
        trip4: require('@/assets/images/recommended-trips/trip4.png'),
      },
    }
  },
  methods: {
    toggleContent() {
      const button = this.$refs.toggleButton; // Get the button element
      const cardContent = button.closest('.card-body').querySelector('.content');
      if (!cardContent) {
        console.error("Content element not found.");
        return;
      }

      // Toggle the class
      cardContent.classList.toggle('show-all-content');
      this.isExpanded = cardContent.classList.contains('show-all-content');

      // Update button text and styles
      button.textContent = this.isExpanded ? "Less" : "More Data";
      button.classList.add("color-primary"); // Ensure the class remains consistent
    }
  }
};
</script>

<template>
  <div class="card border-0 shadow-sm p-md-2 rounded-5 mb-3">
    <div class="card-body">
      <b-row class="justify-content-center align-items-center">
        <b-col class="text-right order-2 order-md-1" md="7" sm="12" xs="12">
          <h4 class="fw-bold mb-3">{{ title }}</h4>

          <div id="content" class="mb-0 fs-6 content text-end text-muted">
            {{ description }}
          </div>
          <p class="text-end mb-0">
            <button ref="toggleButton"
                    class="btn background-none p-0 m-0 color-primary"
                    @click=toggleContent()>More Data
            </button>
          </p>
          <div class="d-flex justify-content-end mt-3">
            <div
                class="bg-light-blue d-inline-flex px-3 py-2 rounded-pill align-items-center justify-content-center mr-2">
              <i class="fa-solid fa-calendar-days text-primary h5 mb-0 mr-2"></i> {{ period }}
            </div>
            <div class="bg-light-orange d-inline-flex px-3 py-2 rounded-pill align-items-center justify-content-center">
              <i class="fa-solid fa-map-pin text-orange h5 mb-0 mr-2"></i> {{ location }}
            </div>
          </div>
          <div class="d-flex align-items-center mb-md-0 mb-2 justify-content-between w-auto mt-3">
            <div class="d-lg-block d-none w-100 mr-3">
              <button class="btn btn-primary px-4 py-3 rounded-pill fw-semibold h5 w-100">
                Watch the trip
              </button>
            </div>
            <input :placeholder=startDate aria-describedby="basic-addon1"
                   aria-label="startDate"
                   class="form-control text-right h-100 py-3 w-100 h6 rounded-pill bg-white border-primary"
                   type="text">
            <i class="h5 fa-solid fa-arrow-right text-primary mx-2"></i>
            <input :placeholder=endDate aria-describedby="basic-addon1"
                   aria-label="endDate"
                   class="form-control text-right h-100 py-3 w-100 h6 rounded-pill bg-white border-primary"
                   type="text">
          </div>
          <div class="d-md-none d-inline">
            <button class="btn btn-primary w-100 px-5 py-3 rounded-pill fw-semibold fs-5">
              Watch the trip
            </button>
          </div>
        </b-col>
        <b-col class="mb-md-0 mb-3 order-1 order-md-2" md="5" sm="12" xs="12">
          <ImageCarousel :id=id :src=imagePaths></ImageCarousel>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style>
.content {
  max-height: calc(1.5em * 2); /* Collapsed height */
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  display: -webkit-box;
  word-wrap: break-word;
  opacity: 1; /* Make fully visible */
  transition: max-height 0.3s ease; /* Smooth expand/collapse */
}

.show-all-content {
  max-height: none; /* Expand fully */
  -webkit-line-clamp: initial;
  opacity: 1; /* Make fully visible */
}
</style>