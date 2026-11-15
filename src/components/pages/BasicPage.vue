<template>
  <div class="dc-content flex flex-col">
    <header class="dc-content_header">
      <slot name="pageHeader"></slot>
    </header>

    <slot name="nonPaperContent"></slot>

    <div :class="paperClass" :style="{ background: background }">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  p: {
    type: Number,
    default: 4
  },
  rounded: {
    type: Number,
    default: 5
  },
  hasFooter: {
    type: Boolean,
    default: false
  },
  background: {
    type: String,
    required: false
  },
  noGrow: {
    type: Boolean,
    default: false
  }
})

const paperClass = computed(() => {
  return [
    'paper-content',
    `p-${props.p}`,
    `rounded-${props.rounded}`,
    props.noGrow ? '' : 'flex-grow',
    props.hasFooter ? 'mb-6' : ''
  ].filter(Boolean);
})
</script>
