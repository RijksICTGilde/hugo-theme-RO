import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "MoxCSS/Examples/Sidenav button",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "If you can't find a suitable icon from the list, you can use your own custom SVGs. Use the size, color, and other properties to style the SVG. Simply copy/paste any SVG code and apply the class to control its appearance. Note that - since these are SVGs and the default icons use an icon-font, you'll need to use the `size` property instead of `fontSize` to control the size of the SVG icons.",
      },
    },
  },
  args: {
    size: "xl",
    color: "primary",
  },
  decorators: [
    (Story) => (
      <div>
        <style></style>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

export const Default: StoryObj = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return (
      <a
        href="#"
        className="mox-box mox-padding-sm mox-backgroundColor-transparent mox-backgroundColorHover-neutral-hover-hover mox-borderRadius-4px"
      >
        <span className="mox-stack mox-gap-2xs mox-alignItems-center mox-direction-row">
          <i className="bi bi-house-door-fill mox-fontSize-lg"></i>
          <span className="mox-text-block">Sidenav Button</span>
        </span>
      </a>
    );
  },
};
