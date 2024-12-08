<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },
  },
};
</script>

<template>
  <b-link :href=href class="text-decoration-none text-white footer-link">
    <slot></slot>
  </b-link>
</template>

<style scoped>
.footer-link {
  padding: 1px 1px 1px 1px;
}

.footer-link:hover {
  color: rgba(255, 255, 255, 0.85) !important;
  cursor: pointer;
  border-bottom: 1px solid;
  border-bottom-color: rgba(255, 255, 255, 0.2);
}
</style>