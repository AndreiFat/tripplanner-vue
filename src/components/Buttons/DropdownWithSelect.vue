<template>
  <b-dropdown id="dropdown-counter" class="bg-white w-100 dropdown-button"
              text="The age composition of the participants"
              toggle-class="d-flex justify-content-end align-items-center py-2 border-primary dropdown-button rounded-2"
              variant="outline-secondary">
    <div class="d-flex justify-content-end align-items-center">
      <div v-for="(item, index) in items" :key="index" class="p-2">
        <span>{{ item.label }}</span>
        <b-input-group class="mt-1" size="sm">
          <b-input-group-prepend>
            <b-button variant="outline-secondary" @click="decrement(index)">-</b-button>
          </b-input-group-prepend>
          <b-form-input
              v-model="item.value"
              class="text-center"
              min="0"
              readonly
              type="number"
          ></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-secondary" @click="increment(index)">+</b-button>
          </b-input-group-append>
        </b-input-group>
      </div>
    </div>
  </b-dropdown>
</template>

<script>
import {BButton, BDropdown, BFormInput, BInputGroup} from 'bootstrap-vue';

export default {
  components: {BDropdown, BInputGroup, BButton, BFormInput},
  data() {
    return {
      items: [
        {label: "Adults", value: 0},
        {label: "Teenagers", value: 0},
        {label: "Kids", value: 0}
      ]
    };
  },
  methods: {
    increment(index) {
      this.items[index].value++;
    },
    decrement(index) {
      if (this.items[index].value > 0) this.items[index].value--;
    }
  }
};
</script>

<style>
#dropdown-counter {
  height: 50px;
}

.show > .btn-outline-secondary.dropdown-toggle, .btn-outline-secondary:hover, #dropdown-counter .dropdown-button:active {
  background-color: white !important;
  color: #1e1e1e;
}
</style>
