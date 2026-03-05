import type { Meta, StoryObj } from "@storybook/react-vite";
import type { StylePropTypes } from "../../../moxReact/uiAtoms/AtomTypes";
import { getStylePropArgTypes } from "../../../storybook/helpers/getStylePropArgTypes";
import { propsToClassNames } from "../../../moxReact/helpers/propsToClassNames";
import { svgStyleProps } from "../../../moxReact/uiAtoms/media/Svg";

const meta = {
  title: "MoxCSS/Atoms/Media/Svg",
  tags: ["autodocs"],
  argTypes: getStylePropArgTypes(svgStyleProps),
  parameters: {
    layout: "fullscreen",
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

export const Default: StoryObj<StylePropTypes<typeof svgStyleProps>> = {
  render: (props) => {
    const { stylePropClassNames } = propsToClassNames(svgStyleProps, props);

    return (
      <svg
        className={`mox-svg ${stylePropClassNames.join(" ")}`}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
      </svg>
    );
  },
};
