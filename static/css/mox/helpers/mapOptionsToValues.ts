/**
 * Map options directly to their values (no CSS variables).
 */
export const mapOptionsToValues = <O extends string>(
  options: ReadonlyArray<O>,
  cssProps: Array<string>,
) => {
  const mappedBasicOptions = {} as Record<O, string>;
  for (const option of options) {
    const result = cssProps.map((cssProp) => {
      return `${cssProp}: ${option};`;
    });
    mappedBasicOptions[option] = result.join("\n");
  }
  return mappedBasicOptions;
};
