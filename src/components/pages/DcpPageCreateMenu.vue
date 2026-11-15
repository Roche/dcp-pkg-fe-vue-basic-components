<script setup lang="ts">
import {ref} from 'vue';

defineProps({
  buttonTooltip: {
    type: String,
    default: '',
  }
});

const showExtraButtons = ref(false);

function toggle() {
  showExtraButtons.value = !showExtraButtons.value;
}
</script>
<template>
  <div class="page-create-menu">
    <template v-if="showExtraButtons">
      <div class="page-create-menu_buttons">
        <slot></slot>
      </div>
    </template>

    <v-tooltip :disabled="buttonTooltip === ''"
               :text="buttonTooltip"
               location="top">
      <template v-slot:activator="{ props }">
        <v-btn
            v-bind="props"
            variant="flat"
            class="page-create-menu_button-show-extra"
            :color="showExtraButtons ? 'primary' : ''"
            @click="toggle()">
          +
        </v-btn>
      </template>
    </v-tooltip>


  </div>
</template>
