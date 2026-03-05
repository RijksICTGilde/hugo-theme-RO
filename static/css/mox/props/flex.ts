import { mapOptionsToCSSVars } from "../helpers/mapOptionsToCSSVars";
import { mapOptionsToValues } from "../helpers/mapOptionsToValues";
import { globalGapOptions, spaces } from "../configOptions";
import type { MoxConfigProps } from "../mox.config";

const css = String.raw;

/* Flex or grid properties */
export const flexProps = {
  direction: {
    options: {
      row: css`
        flex-direction: row;
      `,
      column: css`
        flex-direction: column;
      `,
      rowReverse: css`
        flex-direction: row-reverse;
      `,
      columnReverse: css`
        flex-direction: column-reverse;
      `,
    },
    responsive: true,
  },
  wrap: {
    options: {
      nowrap: css`
        flex-wrap: nowrap;
      `,
      wrap: css`
        flex-wrap: wrap;
      `,
      wrapReverse: css`
        flex-wrap: wrap-reverse;
      `,
    },
    responsive: true,
  },
  alignSelf: {
    options: {
      start: css`
        align-self: start;
      `,
      end: css`
        align-self: end;
      `,
      center: css`
        align-self: center;
      `,
      stretch: css`
        align-self: stretch;
      `,
    },
    responsive: true,
  },
  justifySelf: {
    options: {
      start: css`
        justify-self: start;
      `,
      end: css`
        justify-self: end;
      `,
      center: css`
        justify-self: center;
      `,
      stretch: css`
        justify-self: stretch;
      `,
    },
    responsive: true,
  },
  alignItems: {
    options: {
      stretch: css`
        align-items: stretch;
      `,
      center: css`
        align-items: center;
      `,
      start: css`
        align-items: start;
      `,
      end: css`
        align-items: end;
      `,
      baseline: css`
        align-items: baseline;
      `,
      initial: css`
        align-items: initial;
      `,
      inherit: css`
        align-items: inherit;
      `,
    },
    responsive: true,
  },
  justifyContent: {
    options: {
      start: css`
        justify-content: start;
      `,
      end: css`
        justify-content: end;
      `,
      center: css`
        justify-content: center;
      `,
      spaceBetween: css`
        justify-content: space-between;
      `,
      spaceAround: css`
        justify-content: space-around;
      `,
      spaceEvenly: css`
        justify-content: space-evenly;
      `,
    },
    responsive: true,
  },
  itemSize: {
    options: {
      half: css`
        grid-template-columns: repeat(
          calc(
            var(--mox-container-grid-total-columns) /
              var(--mox-container-grid-columns-half)
          ),
          minmax(0, 1fr)
        );
      `,
      third: css`
        grid-template-columns: repeat(
          calc(
            var(--mox-container-grid-total-columns) /
              var(--mox-container-grid-columns-third)
          ),
          minmax(0, 1fr)
        );
      `,
      quarter: css`
        grid-template-columns: repeat(
          calc(
            var(--mox-container-grid-total-columns) /
              var(--mox-container-grid-columns-quarter)
          ),
          minmax(0, 1fr)
        );
      `,
      sixth: css`
        grid-template-columns: repeat(
          calc(
            var(--mox-container-grid-total-columns) /
              var(--mox-container-grid-columns-sixth)
          ),
          minmax(0, 1fr)
        );
      `,
    },
    responsive: true,
  },
  gridColumn: {
    options: {
      window: css`
        --mox-page-grid-column: window;
      `,
      page: css`
        --mox-page-grid-column: page;
      `,
      span1: css`
        --mox-page-grid-column: span 1;
      `,
      span2: css`
        --mox-page-grid-column: span 2;
      `,
      span3: css`
        --mox-page-grid-column: span 3;
      `,
      span4: css`
        --mox-page-grid-column: span 4;
      `,
      span5: css`
        --mox-page-grid-column: span 5;
      `,
      span6: css`
        --mox-page-grid-column: span 6;
      `,
      span7: css`
        --mox-page-grid-column: span 7;
      `,
      span8: css`
        --mox-page-grid-column: span 8;
      `,
      span9: css`
        --mox-page-grid-column: span 9;
      `,
      span10: css`
        --mox-page-grid-column: span 10;
      `,
      span11: css`
        --mox-page-grid-column: span 11;
      `,
      span12: css`
        --mox-page-grid-column: span 12;
      `,
    },
    responsive: true,
  },
  gridColumnStart: {
    options: {
      windowStart: css`
        --mox-page-grid-column-start: window-start;
      `,
      pageStart: css`
        --mox-page-grid-column-start: page-start;
      `,
      pageEnd: css`
        --mox-page-grid-column-start: page-end;
      `,
      windowEnd: css`
        --mox-page-grid-column-start: window-end;
      `,
      0: css`
        --mox-page-grid-column-start: 0;
      `,
      1: css`
        --mox-page-grid-column-start: 1;
      `,
      2: css`
        --mox-page-grid-column-start: 2;
      `,
      3: css`
        --mox-page-grid-column-start: 3;
      `,
      4: css`
        --mox-page-grid-column-start: 4;
      `,
      5: css`
        --mox-page-grid-column-start: 5;
      `,
      6: css`
        --mox-page-grid-column-start: 6;
      `,
      7: css`
        --mox-page-grid-column-start: 7;
      `,
      8: css`
        --mox-page-grid-column-start: 8;
      `,
      9: css`
        --mox-page-grid-column-start: 9;
      `,
      10: css`
        --mox-page-grid-column-start: 10;
      `,
      11: css`
        --mox-page-grid-column-start: 11;
      `,
      12: css`
        --mox-page-grid-column-start: 12;
      `,
      13: css`
        --mox-page-grid-column-start: 13;
      `,
    },
    responsive: true,
  },
  gridColumnEnd: {
    options: {
      windowStart: css`
        --mox-page-grid-column-end: window-start;
      `,
      pageStart: css`
        --mox-page-grid-column-end: page-start;
      `,
      windowEnd: css`
        --mox-page-grid-column-end: window-end;
      `,
      pageEnd: css`
        --mox-page-grid-column-end: page-end;
      `,
      0: css`
        --mox-page-grid-column-end: 0;
      `,
      1: css`
        --mox-page-grid-column-end: 1;
      `,
      2: css`
        --mox-page-grid-column-end: 2;
      `,
      3: css`
        --mox-page-grid-column-end: 3;
      `,
      4: css`
        --mox-page-grid-column-end: 4;
      `,
      5: css`
        --mox-page-grid-column-end: 5;
      `,
      6: css`
        --mox-page-grid-column-end: 6;
      `,
      7: css`
        --mox-page-grid-column-end: 7;
      `,
      8: css`
        --mox-page-grid-column-end: 8;
      `,
      9: css`
        --mox-page-grid-column-end: 9;
      `,
      10: css`
        --mox-page-grid-column-end: 10;
      `,
      11: css`
        --mox-page-grid-column-end: 11;
      `,
      12: css`
        --mox-page-grid-column-end: 12;
      `,
      13: css`
        --mox-page-grid-column-end: 13;
      `,
    },
    responsive: true,
  },
  gap: {
    options: {
      ...mapOptionsToCSSVars(spaces, ["gap"], "space"),
      ...mapOptionsToValues(globalGapOptions, ["gap"]),
    },
    responsive: true,
  },
  rowGap: {
    options: {
      ...mapOptionsToCSSVars(spaces, ["row-gap"], "space"),
      ...mapOptionsToValues(globalGapOptions, ["row-gap"]),
    },
    responsive: true,
  },
  columnGap: {
    options: {
      ...mapOptionsToCSSVars(spaces, ["column-gap"], "space"),
      ...mapOptionsToValues(globalGapOptions, ["column-gap"]),
    },
    responsive: true,
  },
  gridTemplateColumns: {
    options: {
      // These are just a set of commonly used grid-template-columns. Any more fine-grained control should be handled in custom CSS.
      "1fr": css`
        grid-template-columns: 1fr;
      `,
      "1fr 1fr": css`
        grid-template-columns: 1fr 1fr;
      `,
      "auto 1fr": css`
        grid-template-columns: minmax(0, auto) 1fr;
      `,
      "1fr auto": css`
        grid-template-columns: 1fr minmax(0, auto);
      `,
      "auto 1fr 1fr": css`
        grid-template-columns: minmax(0, auto) 1fr 1fr;
      `,
      "1fr auto 1fr": css`
        grid-template-columns: 1fr minmax(0, auto) 1fr;
      `,
      "1fr 1fr auto": css`
        grid-template-columns: 1fr 1fr minmax(0, auto);
      `,
    },
    responsive: true,
  },
  gridTemplateRows: {
    options: {
      // These are just a set of commonly used grid-template-rows. Any more fine-grained control should be handled in custom CSS.
      "1fr": css`
        grid-template-rows: 1fr;
      `,
      "1fr 1fr": css`
        grid-template-rows: 1fr 1fr;
      `,
      "auto 1fr": css`
        grid-template-rows: minmax(0, auto) 1fr;
      `,
      "1fr auto": css`
        grid-template-rows: 1fr minmax(0, auto);
      `,
      "auto 1fr 1fr": css`
        grid-template-rows: minmax(0, auto) 1fr 1fr;
      `,
      "1fr auto 1fr": css`
        grid-template-rows: 1fr minmax(0, auto) 1fr;
      `,
      "1fr 1fr auto": css`
        grid-template-rows: 1fr 1fr minmax(0, auto);
      `,
    },
    responsive: true,
  },
} as const satisfies MoxConfigProps;
