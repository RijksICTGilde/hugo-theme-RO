import type { Meta, StoryObj } from "@storybook/react-vite";
import { boxStyleProps } from "../../../moxReact/uiAtoms";
import type { StylePropTypes } from "../../../moxReact/uiAtoms/AtomTypes";
import { getStylePropArgTypes } from "../../../storybook/helpers/getStylePropArgTypes";
import { propsToClassNames } from "../../../moxReact/helpers/propsToClassNames";

const meta = {
  title: "MoxCSS/Atoms/layout/Box",
  tags: ["autodocs"],
  argTypes: getStylePropArgTypes(boxStyleProps),
  args: {},
  parameters: {
    docs: {
      source: {
        source: {
          type: "dynamic",
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <style></style>
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

export const Default: StoryObj<StylePropTypes<typeof boxStyleProps>> = {
  render: (props) => {
    const { stylePropClassNames } = propsToClassNames(boxStyleProps, props);

    return (
      <section className={`mox-box ${stylePropClassNames.join(" ")}`}>
        <span className="mox-text-block">{"box content"}</span>
      </section>
    );
  },
};
