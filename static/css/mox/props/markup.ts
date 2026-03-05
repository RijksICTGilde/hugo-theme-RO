import type { MoxConfigProps } from "../mox.config";

const css = String.raw;

// This is not exactly a set of properties, but used to get a set of styles to be used for the automatic markup-styling
// e.g. a `<p>` tag can be described with a set of styles here.
export const markupStyles = {
  markup: {
    options: {
      p: css`
        text-decoration: none;
        margin-block: 1rem;
      `,
      image: ``,
      button: ``,
    },
  },
} as const satisfies MoxConfigProps;
