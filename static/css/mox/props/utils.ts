import type { MoxConfigProps } from "../mox.config";

const css = String.raw;

export const utilsProps = {
  display: {
    options: {
      block: css`
        display: block;
        display: flow-root;
      `,
      inline: css`
        display: inline;
      `,
      "inline-block": css`
        display: inline-block;
      `,
      flex: css`
        display: flex;
      `,
      grid: css`
        display: grid;
      `,
      none: css`
        display: none;
      `,
      contents: css`
        display: contents;
      `,
    },
    responsive: true,
  },
} as const satisfies MoxConfigProps;
