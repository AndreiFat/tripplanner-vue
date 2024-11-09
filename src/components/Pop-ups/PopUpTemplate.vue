<script>

export default {
  components: {},
  methods: {
    handleClose() {
      this.$bvModal.hide('modal-1'); // Close the modal programmatically
    }
  },
  props: {
    btnName: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  }
};
</script>

<template>
  <div>
    <div>
      <b-button v-b-modal.modal-1>{{ btnName }}</b-button>

      <!-- Modal -->
      <b-modal id="modal-1" class="border-0 shadow rounded-5" hide-footer>
        <!-- Custom Header with Close X -->
        <template #modal-header>
          <button aria-label="Close" class="close" type="button" @click="handleClose">
            <span aria-hidden="true">&times;</span>
          </button>
        </template>

        <!-- Modal Content -->
        <slot></slot>
      </b-modal>
    </div>
  </div>
</template>

<style>
#modal-1 .modal-header {
  border: none; /* Remove the default border */
}

#modal-1 .modal-content {
  background-color: #f8f9fa; /* Set the background color */
  padding: 12px; /* Adjust padding */
  border-radius: 32px; /* Make content edges rounded */
  border: none;
}
</style>