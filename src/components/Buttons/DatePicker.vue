<script>
export default {
  data() {
    return {
      showCalendar: false, // controls visibility of the calendar
      selectedDate: null // holds the selected date
    };
  },
};
</script>

<template>
  <div>
    <b-button id="calendar-button" class="rounded-circle calendar-button" variant="none">
      <i class="fa-solid fa-calendar-days"></i>
    </b-button>

    <!-- Popover with calendar -->
    <b-popover placement="bottom" target="calendar-button" triggers="click">
      <template #default>
        <b-calendar
            v-model="selectedDate"
            class="calendar-popover"
        ></b-calendar>
      </template>
    </b-popover>
  </div>
</template>

<style scoped>
.calendar-popover {
  width: 250px; /* Adjust width as needed */
}

.calendar-button {
  background-color: rgba(7, 160, 195, 0.2);
  color: #07A0C3;
}
</style>