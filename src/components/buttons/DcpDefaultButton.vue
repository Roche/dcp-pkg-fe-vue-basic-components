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
})
</script>
<template>
  <v-btn variant="elevated" type="button" :disabled="disabled" :size="size" :color="color">
    <slot></slot>
  </v-btn>
</template>
