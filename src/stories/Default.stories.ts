import type { Meta, StoryFn } from "@storybook/vue3";
import DcpDefaultButton from "@/components/buttons/DcpDefaultButton.vue";

const meta: Meta<typeof DcpDefaultButton> = {
    title: "Buttons/DefaultButton",
    component: DcpDefaultButton,
    argTypes: {
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
    },
};
export default meta;

const Template: StoryFn<typeof DcpDefaultButton> = (args) => ({
    components: { DcpDefaultButton },
    setup() {
        return { args };
    },
    template: '<DcpDefaultButton v-bind="args">Click Me</DcpDefaultButton>',
});

export const Default = Template.bind({});
Default.args = {
    size: "default",
    color: "primary",
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    size: "default",
    color: "primary",
    disabled: true,
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
    color: "primary",
    disabled: false,
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    color: "primary",
    disabled: false,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
    size: "default",
    color: "secondary",
    disabled: false,
};