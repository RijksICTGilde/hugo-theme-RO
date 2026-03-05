/**
 * MOX CSS Configuration File
 *
 * Contains the settings to be used for calculating & generating the css files in `_generated`:
 * - spaces: all clamp-values for spacing for each space-key (e.g., xs, sm, md, lg, xl)
 * - properties: all css-classes that should be generated for (possibly) responsive css properties
 * - markup: all css-classes that should be generated for markup elements (e.g., p, a, etc.)
 *
 */

import type { StylePropTypes } from "../moxReact/uiAtoms/AtomTypes";
import { prefix } from "./configOptions";
import { boxProps } from "./props/box";
import { flexProps } from "./props/flex";
import { linkProps } from "./props/link";
import { markupStyles } from "./props/markup";
import { textProps } from "./props/text";
import { utilsProps } from "./props/utils";

// Unfortunately, at the moment it's not possible to define these values with `css vars` - a media/container-query can be defined before any vars are available.
const viewportBreakpoints = {
  mobile: 600,
  tablet: 900,
  desktop: 1200,
  mq1440: 1440,
} as const;

// These values come from the container-breakpoints defined here: `src/moxCss/uiAtoms/layout/containerGrid.css`
const containerBreakpoints = {
  cq200: 200,
  cq400: 400,
  cq600: 600,
  cq800: 800,
} as const;

const props = {
  // Keys of these objects are used to map React props to classnames (see: `propsToClassNames` helper)
  ...flexProps,
  ...linkProps,
  ...textProps,
  ...boxProps,
  ...utilsProps,
  ...markupStyles,
};

export const moxConfig = {
  prefix,
  // The clamp values will be calculated so that on these min/max sizes of the viewport, the size will lock to resp. min/max value of the space (e.g. `md`).
  clampViewportInlineSize: { min: 360, max: 1440 },
  viewportBreakpoints,
  containerBreakpoints,
  // Generated classnames will be suffixed with the `options` values (e.g., `inline-size` -> `.mox-inline-size-sm`)
  // The values either be just what is defined in `options` (required), or these `options` will be mapped to a variable (use the helper-function `mapOptionsToCSSVars`) or different value via an `optionsMap` (e.g. `{ md: var(--mox-space-sm), ... }`)
  // Together this will generate the css line: `.mox-inline-size-sm { width: var(--mox-space-sm); }`
  // If `responsive` is true, the classes will be generated for each min/max breakpoint as well (e.g., `.mox-inline-size-sm@tabletMin`, `.mox-inline-size-sm@cq400Max`, etc.)
  props,
} as const satisfies MoxConfig;

export type MoxConfigProps = {
  [propKey: string]: {
    options: {
      [optionKey: string]: string;
    };
    responsive?: boolean;
    state?: "hover" | "focus" | "active" | "disabled";
  };
};

type MoxConfig = {
  prefix: string;
  clampViewportInlineSize: { min: number; max: number };
  viewportBreakpoints: typeof viewportBreakpoints;
  containerBreakpoints: typeof containerBreakpoints;
  props: MoxConfigProps;
};

export const markupContent = {
  p: {
    markup: "p",
    alignItems: "start",
    inlineSize: { mobileMin: "md", mobileMax: "xs" },
  },
  a: {
    // markup: "a",
    color: "primary",
    underline: "underline",
    underlineHover: "none",
  },
  blockquote: {
    // markup: "blockquote",
    backgroundColor: "primary-subtle-2",
    padding: "md",
    borderStartStartRadius: "lint-0.5",
  },
  "a.btn-primary": {
    backgroundColor: "primary",
    backgroundColorHover: "primary-hover",
    paddingBlock:
      "sm" /* small adjustment to compensate for missing textblock inside button */,
    paddingInline: "md",
    underline: "none",
    underlineHover: "none",
    display: "inline-block",
    fontWeight: "bold",
  },
  "a.btn-secondary": {
    backgroundColor: "secondary",
    backgroundColorHover: "secondary-hover",
    paddingBlock:
      "sm" /* small adjustment to compensate for missing textblock inside button */,
    paddingInline: "md",
    underline: "none",
    underlineHover: "none",
    display: "inline-block",
    fontWeight: "bold",
  },
  "a.btn-outline-primary": {
    backgroundColor: "wit",
    paddingBlock:
      "sm" /* small adjustment to compensate for missing textblock inside button */,
    paddingInline: "md",
    underline: "none",
    underlineHover: "none",
    display: "inline-block",
    borderColor: "primary",
    borderColorHover: "primary-hover",
    color: "primary",
    borderWidth: "2px",
    borderStyle: "solid",
    fontWeight: "bold",
  },
  "a.btn-outline-secondary": {
    backgroundColor: "wit",
    paddingBlock:
      "sm" /* small adjustment to compensate for missing textblock inside button */,
    paddingInline: "md",
    underline: "none",
    underlineHover: "none",
    display: "inline-block",
    borderColor: "secondary",
    borderColorHover: "secondary-hover",
    color: "secondary",
    borderWidth: "2px",
    borderStyle: "solid",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "primary",
    backgroundColorHover: "primary-hover",
    paddingBlock:
      "sm" /* small adjustment to compensate for missing textblock inside button */,
    paddingInline: "md",
    display: "inline-block",
    fontWeight: "bold",
  },
} as const satisfies Record<
  string,
  StylePropTypes<readonly (keyof typeof props)[]>
>;
