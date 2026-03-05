import type { Meta, StoryObj } from "@storybook/react-vite";
import { stackStyleProps } from "../../../moxReact/uiAtoms";
import type { StylePropTypes } from "../../../moxReact/uiAtoms/AtomTypes";
import { getStylePropArgTypes } from "../../../storybook/helpers/getStylePropArgTypes";
import { propsToClassNames } from "../../../moxReact/helpers/propsToClassNames";

const meta = {
  title: "MoxCSS/Atoms/layout/Stack",
  tags: ["autodocs"],

  argTypes: getStylePropArgTypes(stackStyleProps),
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
        <style>
          {`
          section { 
            border: 2px solid orange;
          }
           section > div {
            background-color: lightblue;
        }
        `}
        </style>
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

export const Default: StoryObj<StylePropTypes<typeof stackStyleProps>> = {
  render: (props) => {
    const { stylePropClassNames } = propsToClassNames(stackStyleProps, props);

    return (
      <section className={`mox-stack ${stylePropClassNames.join(" ")}`}>
        <div>{"box 1"}</div>
        <div>{"box 2"}</div>
        <div>{"box 3"}</div>
      </section>
    );
  },
};
