import type { Meta, StoryObj } from "@storybook/react-vite";
import type { StylePropTypes } from "../../../moxReact/uiAtoms/AtomTypes";
import { getStylePropArgTypes } from "../../../storybook/helpers/getStylePropArgTypes";
import { propsToClassNames } from "../../../moxReact/helpers/propsToClassNames";
import { iconStyleProps } from "../../../moxReact/uiAtoms/media/Icon";

const meta = {
  title: "MoxCSS/Atoms/Media/Icon",
  tags: ["autodocs"],
  argTypes: getStylePropArgTypes(iconStyleProps),
  args: {},
  parameters: {
    layout: "fullscreen",
    docs: {
      source: {
        code: null,
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

const mostUsedIcons = [
  "house-door",
  "search",
  "box-arrow-up-right",
  "caret-up",
  "caret-down",
  "caret-left",
  "caret-right",
  "arrow-up",
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "check",
  "x",
  "plus",
  "dash",
  "info",
  "question",
  "exclamation",
  "heart",
  "heart-fill",
  "eye",
  "eye-slash",
  "lock",
  "unlock",
  "trash",
  "pencil",
  "gear",
  "calendar",
  "clock",
  "download",
  "upload",
  "link",
  "clipboard",
  "filter",
  "list",
  "grid",
  "menu-button-wide",
  "person",
  "person-fill",
  "envelope",
  "envelope-open",
  "phone",
  "phone-fill",
  "chat",
  "chat-dots",
  "bell",
  "bell-fill",
  "house-door-fill",
  "star",
  "star-fill",
  "star-half",
  "stars",
];

export const Default: StoryObj<StylePropTypes<typeof iconStyleProps>> = {
  parameters: {
    layout: "fullscreen",
  },
  args: {
    fontSize: "xl",
    color: "primary",
  },
  render: (props) => {
    const { stylePropClassNames } = propsToClassNames(iconStyleProps, props);

    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
          gap: "1.5rem",
          padding: "2rem",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {mostUsedIcons.map((icon) => (
          <div key={icon} style={{ textAlign: "center" }}>
            <i
              className={`bi-${icon} mox-icon ${stylePropClassNames.join(" ")}`}
            ></i>
            <div
              style={{
                marginTop: "0.5rem",
                fontSize: "0.85em",
                color: "grey",
              }}
            >
              {icon}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
