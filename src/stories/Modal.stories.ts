import type { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";
import Modal from "@/components/Modal.vue";

const meta: Meta<typeof Modal> = {
    title: "Components/Modal",
    component: Modal,
    argTypes: {
        isActive: {
            control: { type: "boolean" },
        },
        showClose: {
            control: { type: "boolean" },
        },
        backgroundClose: {
            control: { type: "boolean" },
        },
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large", "xlarge"],
        },
    },
};
export default meta;

export const Default: StoryFn<typeof Modal> = (args) => ({
    components: { Modal },
    setup() {
        const isActive = ref(args.isActive ?? true);
        return { args, isActive };
    },
    template: `
        <Modal v-bind="args" v-model:isActive="isActive">
            <template #header><h3>Modal Title</h3></template>
            <p>This is the modal content.</p>
            <template #footer>
                <button @click="isActive = false">Close</button>
            </template>
        </Modal>
        <button @click="isActive = true">Open Modal</button>
    `,
});
Default.args = {
    isActive: true,
    showClose: true,
    backgroundClose: true,
    size: "medium",
};

export const NoCloseButton: StoryFn<typeof Modal> = (args) => ({
    components: { Modal },
    setup() {
        const isActive = ref(args.isActive ?? true);
        return { args, isActive };
    },
    template: `
        <Modal v-bind="args" v-model:isActive="isActive">
            <template #header><h3>No Close Button</h3></template>
            <p>This modal can only be closed by clicking the background or the footer button.</p>
            <template #footer>
                <button @click="isActive = false">Dismiss</button>
            </template>
        </Modal>
        <button @click="isActive = true">Open Modal</button>
    `,
});
NoCloseButton.args = {
    isActive: true,
    showClose: false,
    backgroundClose: true,
    size: "medium",
};

export const NoBackgroundClose: StoryFn<typeof Modal> = (args) => ({
    components: { Modal },
    setup() {
        const isActive = ref(args.isActive ?? true);
        return { args, isActive };
    },
    template: `
        <Modal v-bind="args" v-model:isActive="isActive">
            <template #header><h3>Persistent Modal</h3></template>
            <p>Clicking the background will not close this modal.</p>
            <template #footer>
                <button @click="isActive = false">Close</button>
            </template>
        </Modal>
        <button @click="isActive = true">Open Modal</button>
    `,
});
NoBackgroundClose.args = {
    isActive: true,
    showClose: true,
    backgroundClose: false,
    size: "medium",
};

export const Small: StoryFn<typeof Modal> = (args) => ({
    components: { Modal },
    setup() {
        const isActive = ref(args.isActive ?? true);
        return { args, isActive };
    },
    template: `
        <Modal v-bind="args" v-model:isActive="isActive">
            <template #header><h3>Small Modal</h3></template>
            <p>A small-sized modal.</p>
            <template #footer>
                <button @click="isActive = false">Close</button>
            </template>
        </Modal>
        <button @click="isActive = true">Open Modal</button>
    `,
});
Small.args = {
    isActive: true,
    showClose: true,
    backgroundClose: true,
    size: "small",
};

export const Large: StoryFn<typeof Modal> = (args) => ({
    components: { Modal },
    setup() {
        const isActive = ref(args.isActive ?? true);
        return { args, isActive };
    },
    template: `
        <Modal v-bind="args" v-model:isActive="isActive">
            <template #header><h3>Large Modal</h3></template>
            <p>A large-sized modal with more content space.</p>
            <template #footer>
                <button @click="isActive = false">Close</button>
            </template>
        </Modal>
        <button @click="isActive = true">Open Modal</button>
    `,
});
Large.args = {
    isActive: true,
    showClose: true,
    backgroundClose: true,
    size: "large",
};
