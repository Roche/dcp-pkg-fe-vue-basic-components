<template>
    <div class="dcp-card">
        <!-- Header Slot -->
        <div v-if="$slots.header" class="dcp-card-header">
            <slot name="header"></slot>
        </div>

        <!-- Body Slot -->
        <div class="dcp-card-body">
            <slot></slot>
        </div>

        <!-- Footer Slot -->
        <div v-if="$slots.footer" class="dcp-card-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>