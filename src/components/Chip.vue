<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue';

export default defineComponent({
    name: 'DcpChip',
    props: {
        isEditable: {
            type: Boolean,
            default: false,
        },
        isRemovable: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:content', 'remove', 'click'],
    setup(props, { emit, slots }) {
        const chipInput = ref<HTMLInputElement | null>(null);
        const chipContent = ref<string>(''); // To store chip content

        // On mount, check if there is content from the default slot
        onMounted(() => {
            const slotContent = slots.default ? slots.default() : [];
            if (slotContent.length > 0 && slotContent[0].type === 'text') {
                chipContent.value = String(slotContent[0].children);
            }
        });

        // Watch for changes in the default slot content (if any)
        watch(
            () => slots.default ? slots.default() : [], // Safely access the default slot
            (newSlotContent) => {
                if (newSlotContent && newSlotContent.length > 0 && newSlotContent[0].type === 'text') {
                    chipContent.value = String(newSlotContent[0].children);
                }
            }
        );

        const focusInput = () => {
            if (props.isEditable && chipInput.value) {
                chipInput.value.focus();
            }
        };

        const onInput = (event: Event) => {
            const target = event.target as HTMLInputElement;
            emit('update:content', target.value);
        };

        const onBlur = () => {
            // Optional: Emit an event if necessary when editing finishes
        };

        const removeChip = (event: MouseEvent) => {
            event.stopPropagation(); // Prevent triggering parent click handlers
            emit('remove');
        };

        const handleClick = (event: MouseEvent) => {
            emit('click', event);
        };

        return {
            chipInput,
            chipContent,
            focusInput,
            onInput,
            onBlur,
            removeChip,
            handleClick,
        };
    },
});
</script>

<template>
    <div class="dcp-chip" :class="{ editable: isEditable, removable: isRemovable }" @click="handleClick">
        <!-- Editable or static content -->
        <div v-if="!isEditable" class="chip-content">
            <slot></slot>
        </div>
        <input v-else class="chip-edit" type="text" :value="chipContent" @input="onInput" @blur="onBlur"
            ref="chipInput" />

        <!-- Close button -->
        <button v-if="isRemovable" class="chip-close" aria-label="Remove chip" @click="removeChip">
            ×
        </button>
    </div>
</template>