import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "MoxCSS/Atoms/Form/RadioButton",
  tags: ["autodocs"],
  parameters: {},
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <input className="mox-input-radio-button" type="radio" />,
};
