<template>
  <v-progress-circular v-bind:indeterminate="indeterminate" :size="size" class="text-primary" :model-value="value"
    :width="width">
    <template v-slot:default> {{ visibleValue }} </template>
  </v-progress-circular>
</template>

<script setup lang="ts">
const props = defineProps<{
  indeterminate: {
    type: Boolean,
    default: false
  },
  size: {
    type: Number,
    default: 32
  },
  width: {
    type: Number,
    default: 4
  },
  value: {
    type: String,
    default: ''
  },
  visibleValue: {
    type: String,
    default: ''
  }
}>();

</script>
