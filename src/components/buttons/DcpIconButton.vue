<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <v-btn :icon="icon" :color="color" :rounded="rounded" :variant="variant" :size="size" :disabled="disabled"></v-btn>
</template>
