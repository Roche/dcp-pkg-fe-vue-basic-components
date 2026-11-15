<template>
    <button :class="buttonClass" :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'DcpButton',
    props: {
        variant: {
            type: String as PropType<'primary' | 'secondary'>,
            default: 'primary',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        buttonClass() {
            return ['dcp-button', this.variant, { disabled: this.disabled }];
        },
    },
});
</script>