<script setup lang="ts">
import { PropType, ref } from 'vue';
import DcpDefaultButton from "@/components/buttons/DcpDefaultButton.vue";

export interface SwitchButton {
  label: string;
  click: Function;
  active: Function;
  disabled?: Function
}

defineProps({
  buttons: {
    type: Array as PropType<SwitchButton[]>,
    required: true
  }
});

const showExtraButtons = ref(false);

</script>
<template>
  <div class="flex row dcp-page-switcher">
    <DcpDefaultButton v-for="button of buttons" @click="button.click()"
      :disabled="(button.disabled && button.disabled()) || false" :color="button.active() ? 'primary' : 'default'"
      :key="button.label">
      {{ button.label }}
    </DcpDefaultButton>
  </div>
</template>
