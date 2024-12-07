<template>
  <b-dropdown id="dropdown" class="bg-white dropdown-button w-100"
              text="Select"
              toggle-class="d-flex justify-content-end align-items-center py-2 border-primary dropdown-button rounded-2"
              variant="outline-secondary">
    <div class="p-3 text-right" style="width: 100%!important;">
      <div class="px-4 py-2 item">Item 1</div>
      <div class="px-4 py-2 item">Item 2</div>
    </div>
  </b-dropdown>
</template>

<script>
import {BDropdown} from 'bootstrap-vue';

export default {
  components: {BDropdown},

};
</script>

<style>
#dropdown {
  height: 46px;
}

.dropdown-menu {
  width: 100%;
  border-radius: 12px;
  border: 0;
  box-shadow: 2px 2px 10px rgba(50, 50, 50, 0.15);
}

.item:hover {
  cursor: pointer;
  background-color: #f6f6f6;
  border-radius: 10px;
}

.show > .btn-outline-secondary.dropdown-toggle, .btn-outline-secondary:hover, #dropdown .dropdown-button:active {
  background-color: white !important;
  color: #1e1e1e;
}
</style>
