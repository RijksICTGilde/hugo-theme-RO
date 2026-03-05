import { colorOptions, spaces } from "../configOptions";
import { type MoxConfigProps } from "../mox.config";

const css = String.raw;

export const textProps = {
  fontSize: {
    options: spaces.reduce(
      (acc, space) => {
        acc[space] = css`
          --current-font-size: var(--mox-space-${space});
          font-size: var(--current-font-size);
        `;
        return acc;
      },
      {} as Record<string, string>,
    ),
    responsive: true,
  },
  fontStyle: {
    options: {
      normal: css`
        font-style: normal;
      `,
      italic: css`
        font-style: italic;
      `,
    },
  },
  color: {
    options: colorOptions.reduce(
      (acc, propName) => ({
        ...acc,
        [propName as keyof typeof colorOptions]: css`
          --text-color: var(--mox-color-${propName});
          color: var(--text-color);
        `,
      }),
      {},
    ) as Record<(typeof colorOptions)[number], string>,
  },
  colorHover: {
    options: colorOptions.reduce(
      (acc, propName) => ({
        ...acc,
        [propName as keyof typeof colorOptions]: css`
          --text-color-hover: var(--mox-color-${propName});
          color: var(--text-color-hover);
        `,
      }),
      {},
    ) as Record<(typeof colorOptions)[number], string>,
    state: "hover",
  },
  fontWeight: {
    options: {
      light: css`
        font-weight: 300;
      `,
      normal: css`
        font-weight: 400;
      `,
      medium: css`
        font-weight: 500;
      `,
      bold: css`
        font-weight: 700;
      `,
    },
  },
  lineHeight: {
    options: {
      normal: css`
        line-height: 1.5;
      `,
      tight: css`
        line-height: 1.3;
      `,
    },
  },
} as const satisfies MoxConfigProps;
