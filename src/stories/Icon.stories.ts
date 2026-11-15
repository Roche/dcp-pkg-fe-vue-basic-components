import type { Meta, StoryFn } from "@storybook/vue3";
import DcpIconButton from "@/components/buttons/DcpIconButton.vue";

const meta: Meta<typeof DcpIconButton> = {
    title: "Buttons/IconButton",
    component: DcpIconButton,
    argTypes: {
        icon: {
            control: { type: "text" },
            description: "Name of the icon to display",
        },
        size: {
            control: { type: "select" },
            options: ["small", "default", "large"],
        },
        color: {
            control: { type: "text" },
        },
        disabled: {
            control: { type: "boolean" },
        },
        rounded: {
            control: { type: "text" },
            description: "Rounded style (e.g., 'circle', 'pill', etc.)",
        },
        variant: {
            control: { type: "text" },
            description: "Button variant (e.g., 'flat', 'text', 'elevated')",
        },
    },
};
export default meta;

const Template: StoryFn<typeof DcpIconButton> = (args) => ({
    components: { DcpIconButton },
    setup() {
        return { args };
    },
    template: '<DcpIconButton v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    icon: "mdi-home",
    size: "default",
    color: "primary",
    disabled: false,
    rounded: "circle",
    variant: "flat",
};

export const Disabled = Template.bind({});
Disabled.args = {
    icon: "mdi-home",
    size: "default",
    color: "primary",
    disabled: true,
    rounded: "circle",
    variant: "flat",
};

export const Small = Template.bind({});
Small.args = {
    icon: "mdi-home",
    size: "small",
    color: "primary",
    disabled: false,
    rounded: "circle",
    variant: "flat",
};

export const Large = Template.bind({});
Large.args = {
    icon: "mdi-home",
    size: "large",
    color: "primary",
    disabled: false,
    rounded: "circle",
    variant: "flat",
};

export const CustomColor = Template.bind({});
CustomColor.args = {
    icon: "mdi-star",
    size: "default",
    color: "secondary",
    disabled: false,
    rounded: "circle",
    variant: "flat",
};