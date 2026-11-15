<template>
    <div class="dcp-modal" :class="modalClasses" @click="handleBackgroundClick" v-show="isActive">
        <div class="dcp-modal__dialog" :style="modalStyles" @click.stop>
            <div class="dcp-modal__header" v-if="$slots.header">
                <slot name="header"></slot>
            </div>

            <div class="dcp-modal__content">
                <slot>
                    <slot name="content"></slot>
                </slot>
            </div>

            <div class="dcp-modal__footer" v-if="$slots.footer">
                <slot name="footer"></slot>
            </div>

            <button class="dcp-modal__close" @click="close" v-if="showClose">×</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    isActive?: boolean;
    showClose?: boolean;
    backgroundClose?: boolean;
    size?: 'small' | 'medium' | 'large' | 'xlarge' | number;
}>(), {
    isActive: false,
    showClose: false,
    backgroundClose: true,
    size: 'medium'
});

const emit = defineEmits<(event: 'update:isActive', value: boolean) => void>();

const modalClasses = computed(() => ({
    'dcp-modal--active': props.isActive,
    [`dcp-modal--${props.size}`]: typeof props.size === 'string'
}));

const modalStyles = computed(() => {
    if (typeof props.size === 'number') {
        return {
            width: `${props.size}px`,
            maxWidth: `${props.size}px`
        };
    }
    return {};
});

const close = () => {
    emit('update:isActive', false);
};

const handleBackgroundClick = () => {
    if (props.backgroundClose) {
        close();
    }
};
</script>