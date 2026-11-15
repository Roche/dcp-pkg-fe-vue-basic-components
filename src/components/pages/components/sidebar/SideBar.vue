<template>
    <v-layout>
        <v-navigation-drawer v-model="drawerOpen" :location="location" temporary :width="width" :style="drawerStyles"
            @transitionend="handleTransitionEnd">
            <SideBarHeader @close="close">
                {{ title }}
            </SideBarHeader>

            <template v-if="sidebarComponent">
                <component :is="sidebarComponent" v-bind="sidebarProps" />
            </template>

            <template v-else>
                <slot></slot>
            </template>

        </v-navigation-drawer>
    </v-layout>
</template>

<script lang="ts" setup>
import { PropType, ref, watchEffect, onMounted, onBeforeUnmount, computed } from 'vue';
import SideBarHeader from './SideBarHeader.vue';

const emit = defineEmits(['update:modelValue', 'close']);

// Computed property for dynamic styles
const drawerStyles = computed(() => {
    const styles: Record<string, string> = {};
    if (props.isResizing) {
        styles.transition = 'none !important'; // Disable transition during resizing
    }
    // Add more styles here if needed in the future
    return styles;
});

// Props
const props = defineProps({
    modelValue: Boolean, // Allows v-model binding
    title: String,
    openOnMounted: {
        type: Boolean,
        default: false
    },
    location: {
        type: String as PropType<'left' | 'right'>,
        default: 'right',
    },
    width: {
        type: Number,
        default: 300,
    },
    sidebarComponent: {
        type: Object as PropType<import('vue').DefineComponent<any, any, any>>,
        required: false,
    },
    sidebarProps: {
        type: Object as PropType<Record<string, any>>,
        default: () => ({}),
    },
    isResizing: {
        type: Boolean,
        default: false,
    },
});

// State for drawer
const drawerOpen = ref(false);

// Sync with v-model
watchEffect(() => {
    drawerOpen.value = props.modelValue;
});

onBeforeUnmount(() => {
    drawerOpen.value = false;
    emit('close')
});

// Auto-open when mounted via route
onMounted(() => {
    if (props.openOnMounted) {
        setTimeout(() => {
            drawerOpen.value = true;
        }, 100);
    }
});

// Close handler
const close = () => {
    drawerOpen.value = false;
    emit('update:modelValue', false);
    emit('close');
};

// Ensure sidebar closes only after transition
const handleTransitionEnd = () => {
    if (!drawerOpen.value) {
        emit('close');
    }
};
</script>