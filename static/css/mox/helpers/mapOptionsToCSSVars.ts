import { prefix } from "../configOptions";

/**
 * Maps CSS class options to their corresponding CSS variable names.
 * e.g. `{ 'md': 'var(--mox-space-md)', ... }`
 *
 * @param options - The array of CSS class options.
 * @param cssProps - The CSS properties to map.
 * @param varName - The base name of the CSS variable.
 */
export const mapOptionsToCSSVars = <O extends string>(
  options: ReadonlyArray<O>,
  cssProps: Array<string>,
  varName: string,
) => {
  const mappedOptions = {} as Record<O, string>;
  for (const option of options) {
    const result = cssProps.map((cssProp) => {
      return `${cssProp}: var(--${prefix}-${varName}-${option});`;
    });
    mappedOptions[option] = result.join("\n");
  }
  return mappedOptions;
};
