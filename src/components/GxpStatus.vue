<template>
    <span :class="[
        'dcp-gxp-status',
        isGxp ? 'gxp' : 'non-gxp',
        sizeClass
    ]">
        {{ !isGxp ? 'Non' : '' }}GXP
    </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: 'DcpGxpStatus',
    props: {
        isGxp: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: null, // Default is null to indicate no specific size
        },
    },
    setup(props) {
        const sizeClass = computed(() =>
            props.size ? `dcp-gxp-status--${props.size}` : null
        );

        return { sizeClass };
    },
});
</script>