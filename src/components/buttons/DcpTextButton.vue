<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: 'default'
  },
  color: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <v-btn :color="color" :size="size" :disabled="disabled" variant="text">
    <slot></slot>
  </v-btn>
</template>
