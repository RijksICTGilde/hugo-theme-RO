import { posix as posixPath } from "path";
import { markupContent, moxConfig } from "./mox.config";
import * as fs from "fs";
import { spaces } from "./configOptions";
import { format } from "prettier";

const getClassName = ({
  propKey,
  optionKey,
  responsiveKey,
  state,
}: {
  propKey: string;
  optionKey: string;
  responsiveKey?: string;
  state?: "hover" | "active" | "focus" | "disabled";
}) => {
  return `.${
    moxConfig.prefix
  }-${propKey}-${optionKey.replace(/[^a-zA-Z0-9-]/g, "-")}${
    responsiveKey != null ? `\\@${responsiveKey}` : ""
  }${state != null ? `-${state}:${state}` : ""}`;
};

/**
 * Function to generate CSS class files based on the Mox configuration.
 * It reads the configuration from `mox.config.ts` and creates CSS files
 * in the `_generated/classNames` directory for each defined class name.
 *
 * These classNames are used for the `propsToClassNames.ts` utility to map props to styles.
 */
const generateProps = async () => {
  const files: string[] = [];

  for (const [propKey, { options, ...restProp }] of Object.entries(
    moxConfig.props,
  )) {
    const responsive =
      "responsive" in restProp && restProp.responsive ? true : false;
    const state =
      "state" in restProp
        ? (restProp.state as "hover" | "focus" | "active" | "disabled")
        : undefined;

    // Create a separate CSS file for each property
    const result: Array<string> = [
      `
/**
  * This file is auto-generated. Do not edit directly.
  * Generated from src/moxCss/mox.config.ts and script: \`generateCss.ts\`
*/

@layer props {`,
    ];
    for (const [optionKey, css] of Object.entries(options)) {
      result.push(`${getClassName({
        propKey,
        optionKey,
        state,
      })} {
${css}  
}`);
    }

    if (responsive) {
      // For each viewport breakpoint...
      for (const key of Object.keys(moxConfig.viewportBreakpoints)) {
        const width =
          moxConfig.viewportBreakpoints[
            key as keyof typeof moxConfig.viewportBreakpoints
          ];
        result.push(`/* Viewport breakpoint: ${key} (${width}px) */`);

        // ... add a min and max media query...
        for (const direction of ["Min", "Max"] as const) {
          result.push(
            `@media only screen and (${direction.toLowerCase()}-device-width: ${width}px) {`,
          );

          // ... for each option
          for (const [optionKey, css] of Object.entries(options)) {
            result.push(`${getClassName({
              propKey,
              optionKey,
              responsiveKey: `${key}${direction}`,
              state,
            })} {
${css}
}`);
          }

          result.push(`}`);
        }
      }
      // For each container breakpoint...
      for (const key of Object.keys(moxConfig.containerBreakpoints)) {
        const width =
          moxConfig.containerBreakpoints[
            key as keyof typeof moxConfig.containerBreakpoints
          ];
        result.push(`/* Container breakpoint: ${key} (${width}px) */`);

        // ... add a min and max container query...
        for (const direction of ["Min", "Max"] as const) {
          result.push(
            `@container (${direction.toLowerCase()}-width: ${width}px) {`,
          );

          // ... for each option
          for (const [optionKey, css] of Object.entries(options)) {
            result.push(`${getClassName({
              propKey,
              optionKey,
              responsiveKey: `${key}${direction}`,
              state,
            })} {
${css}
}`);
          }

          result.push(`}`);
        }
      }
    }

    result.push(`}`); // end of @layer

    // Write the generated CSS to a file
    const cssString = result.join("\n");
    const formattedCss = await format(cssString, { parser: "css" });

    fs.writeFileSync(
      posixPath.join(__dirname, "_generated", "properties", `${propKey}.css`),
      formattedCss,
    );
    files.push(`./${propKey}.css`);
  }

  // Write an index file exporting all generated files
  fs.writeFileSync(
    posixPath.join(__dirname, "_generated", "properties", `index.css`),
    files.map((file) => `@import '${file}';`).join("\n"),
  );

  console.info(
    `✅ Generated properties:\n${Object.keys(moxConfig.props).join(", ")}\n`,
  );
};

const generateClampSpaces = () => {
  // loop through all spaces and generate separate files for each space with the clamp values
  spaces.forEach((space) => {
    const clampValues = `
/**
  * This file is auto-generated. Do not edit directly.
  * Generated from src/moxCss/mox.config.ts and script: \`generateCss.ts\`
  *
  * Responsive spacing for the space-size \`${space}\`
*/

@layer base {
  body {
    --clamp-slope-${space}: calc(
      (var(--mox-space-${space}-max) - var(--mox-space-${space}-min)) /
        (var(--viewport-max-inline-size) - var(--viewport-min-inline-size))
    );
    --clamp-intercept-${space}: calc(
      var(--mox-space-${space}-min) - var(--viewport-min-inline-size) *
        var(--clamp-slope-${space})
    );
    --mox-space-${space}: clamp(
      var(--mox-space-${space}-min),
      calc(var(--clamp-intercept-${space}) + var(--clamp-slope-${space}) * 100vw),
      var(--mox-space-${space}-max)
    );
  }
}
        `;
    fs.writeFileSync(
      posixPath.join(
        __dirname,
        "_generated",
        "clampSpaces",
        `clamp-${space}.css`,
      ),
      clampValues,
    );
  });
  // Write an index file exporting all generated files
  fs.writeFileSync(
    posixPath.join(__dirname, "_generated", "clampSpaces", `index.css`),
    [
      ...spaces.map((space) => `@import 'clamp-${space}.css';`),
      `
/** These imports calculate the correct clamp value for fluid scaling for each space-size (md, xs, etc): 
  *
  * slope = (space-max - space-min) / (viewport-max - viewport-min)
  * intercept = min - (viewport-min * slope)
  * clamped-size = clamp(space-min, calc(intercept + slope * 100vw), space-max)
  *
  * See: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
*/

@layer base {
  body {
    --viewport-min-inline-size: ${moxConfig.clampViewportInlineSize.min}px;
    --viewport-max-inline-size: ${moxConfig.clampViewportInlineSize.max}px;
  }
}
`,
    ].join("\n"),
  );

  console.info(
    `✅ Generated clamp space files for spaces:\n${spaces.join(", ")}\n`,
  );
};

/**
 * Given a prop name and option key, returns the CSS string for that option.
 * Example: getCssForPropOption("alignItems", "start") -> "align-items: flex-start;"
 */
export function getCssForPropOption(
  prop: string,
  option: any, // StylePropTypes<typeof moxConfig.props>[string],
): string | undefined {
  const propConfig = moxConfig.props[prop as keyof typeof moxConfig.props];
  if (!propConfig) return undefined;

  return propConfig.options[option as keyof typeof propConfig.options];
}

const generateMarkupContentStyles = async () => {
  const markupWrapperClass = ":where(.markup-content)"; // using :where to avoid specificity issues with other styles applied to the same tags
  const result = [
    `
/**
* This file is auto-generated. Do not edit directly.
* Generated from src/moxCss/mox.config.ts and script: \`generateCss.ts\`
*/

@layer atoms {`,
  ];

  for (const [tag, styles] of Object.entries(markupContent)) {
    result.push(`/* Styles for <${tag}> */`);
    const simpleStyles = Object.entries(styles)
      .filter(([_, value]) => typeof value === "string")
      .map(([prop, value]) => {
        const propConfig =
          moxConfig.props[prop as keyof typeof moxConfig.props];
        const stateSuffix = "state" in propConfig ? `:${propConfig.state}` : "";
        return `${markupWrapperClass} ${tag}${stateSuffix} { ${getCssForPropOption(prop, value)?.trim()} }`;
      })
      .join("");

    // Collect all simple (non-responsive) styles in a single css-block
    if (simpleStyles) {
      result.push(simpleStyles);
    }

    const responsiveStyles = Object.entries(styles)
      .filter(([_, value]) => typeof value === "object")
      .map(([prop, value]) => {
        const propConfig =
          moxConfig.props[prop as keyof typeof moxConfig.props];
        const stateSuffix = "state" in propConfig ? `:${propConfig.state}` : "";

        return Object.entries(value)
          .map(([responsiveKey, responsiveValue]) => {
            const css = getCssForPropOption(prop, responsiveValue)?.trim();
            const breakpointType = responsiveKey.replace(/(Min|Max)$/, "");
            const breakpointDirection = responsiveKey.endsWith("Min")
              ? "min"
              : responsiveKey.endsWith("Max")
                ? "max"
                : null;

            if (
              breakpointType in moxConfig.viewportBreakpoints &&
              breakpointDirection != null
            ) {
              return `@media only screen and (${breakpointDirection}-width: ${moxConfig.viewportBreakpoints[breakpointType as keyof typeof moxConfig.viewportBreakpoints]}px) {
                ${markupWrapperClass} ${tag}${stateSuffix} {
                  ${css}
                }
              }`;
            } else if (
              breakpointType in moxConfig.containerBreakpoints &&
              breakpointDirection != null
            ) {
              return `@container only screen and (${breakpointDirection}-width: ${moxConfig.containerBreakpoints[breakpointType as keyof typeof moxConfig.containerBreakpoints]}px) {
                ${markupWrapperClass} ${tag}${stateSuffix} {
                  ${css}
                }
              }`;
            }
          })
          .join("");
      })
      .join("");

    if (responsiveStyles) {
      result.push(responsiveStyles);
    }
  }

  result.push(`}`); // end of @layer

  const formattedCss = await format(result.join("\n"), { parser: "css" });
  const dirPath = posixPath.join(__dirname, "_generated", "markupContent");
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(posixPath.join(dirPath, `index.css`), formattedCss);

  console.info(
    `✅ Generated markup styles for tags:\n${Object.keys(markupContent).join(", ")}\n`,
  );
};

// Todo: clean generated folder first?
generateProps();
generateClampSpaces();
generateMarkupContentStyles();
