import type { Meta, StoryObj } from "@storybook/react-vite";
import type { StylePropTypes } from "../../../moxReact/uiAtoms/AtomTypes";
import { getStylePropArgTypes } from "../../../storybook/helpers/getStylePropArgTypes";
import { propsToClassNames } from "../../../moxReact/helpers/propsToClassNames";
import { imageStyleProps } from "../../../moxReact/uiAtoms/media/Image";
import rijkslint from "../../../../public/logo-rijksoverheid.svg";

const meta = {
  title: "MoxCSS/Atoms/Media/Image",
  tags: ["autodocs"],
  argTypes: getStylePropArgTypes(imageStyleProps),
  parameters: {},
  args: {},
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

export const Default: StoryObj<StylePropTypes<typeof imageStyleProps>> = {
  render: (props) => {
    const { stylePropClassNames } = propsToClassNames(imageStyleProps, props);

    return (
      <img
        src={rijkslint}
        alt="Rijkslint"
        className={`mox-image ${stylePropClassNames.join(" ")}`}
      />
    );
  },
};
