<template>
    <div class="sidebar-drawer_header p-3 d-flex align-content-center justify-content-between">
        <slot></slot>
        <v-icon class="pointer close-help-button" :icon="'mdi-close'" @click="$emit('close')"></v-icon>
    </div>
</template>

<script setup lang="ts">
defineProps({
    closeButton: {
        type: Boolean,
        default: true
    }
})

defineEmits(['close']);
</script>
