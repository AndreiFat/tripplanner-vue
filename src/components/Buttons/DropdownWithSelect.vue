<template>
  <b-dropdown id="dropdown-counter" :text=placeholder
              class="bg-white w-100 dropdown-button"
              toggle-class="d-flex justify-content-end align-items-center py-2 border-primary dropdown-button rounded-2"
              variant="outline-secondary">
    <b-row class="d-flex justify-content-end align-items-center px-3">
      <b-col v-for="(item, index) in items" :key="index" :md="colSize" :sm="colSize" :xs="colSize"
             class="my-2 px-2 text-right">
        <span>{{ item.label }}</span>
        <b-input-group class="" size="sm">
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
      </b-col>
    </b-row>
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
  },
  props: {
    placeholder: {
      type: String,
      required: true
    },
    colSize: {
      type: Number,
      default: 12
    }
  },
};
</script>

<style>
#dropdown-counter {
  height: 50px;
  width: 100%;
}


.show > .btn-outline-secondary.dropdown-toggle, .btn-outline-secondary:hover, #dropdown-counter .dropdown-button:active {
  background-color: white !important;
  color: #1e1e1e;
}
</style>
