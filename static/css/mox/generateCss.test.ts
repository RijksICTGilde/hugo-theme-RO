import { describe, it, expect } from "vitest";
import * as fs from "fs";
import { posix as posixPath } from "path";

/**
 * These tests verify the generated CSS files that already exist.
 * Run `npm run generate:css` before running these tests to ensure
 * the generated files are up to date.
 */
describe("generateCss.ts", () => {
  const readGeneratedFile = (relativePath: string): string => {
    const fullPath = posixPath.join(__dirname, relativePath);
    return fs.readFileSync(fullPath, "utf-8");
  };

  describe("Test Case 1: Base CSS generation for all properties", () => {
    it("should correctly generate CSS files for all defined properties with base options", () => {
      // Test a property without responsive or state (e.g., borderWidth)
      const borderWidthCss = readGeneratedFile(
        "_generated/properties/borderWidth.css",
      );

      expect(borderWidthCss).toBeDefined();
      expect(borderWidthCss).toContain("@layer props");
      expect(borderWidthCss).toContain(".mox-borderWidth-0 {");
      expect(borderWidthCss).toContain("border-width: 0;");
      expect(borderWidthCss).toContain(".mox-borderWidth-1px {");
      expect(borderWidthCss).toContain("border-width: 1px;");
      expect(borderWidthCss).toContain(".mox-borderWidth-2px {");
      expect(borderWidthCss).toContain("border-width: 2px;");
    });

    it("should generate CSS for properties with CSS variable options", () => {
      const inlineSizeCss = readGeneratedFile(
        "_generated/properties/inlineSize.css",
      );

      expect(inlineSizeCss).toBeDefined();
      expect(inlineSizeCss).toContain(".mox-inlineSize-xl {");
      expect(inlineSizeCss).toContain("inline-size: var(--mox-space-xl);");
      expect(inlineSizeCss).toContain(".mox-inlineSize-md {");
      expect(inlineSizeCss).toContain("inline-size: var(--mox-space-md);");
    });

    it("should generate an index file importing all property files", () => {
      const indexCss = readGeneratedFile("_generated/properties/index.css");

      expect(indexCss).toBeDefined();
      expect(indexCss).toContain("@import './inlineSize.css';");
      expect(indexCss).toContain("@import './borderWidth.css';");
      expect(indexCss).toContain("@import './padding.css';");
    });
  });

  describe("Test Case 2: Responsive CSS classes across breakpoints", () => {
    it("should generate responsive classes for viewport breakpoints", () => {
      const inlineSizeCss = readGeneratedFile(
        "_generated/properties/inlineSize.css",
      );

      expect(inlineSizeCss).toBeDefined();

      // Check for mobile breakpoint (600px)
      expect(inlineSizeCss).toContain(
        "/* Viewport breakpoint: mobile (600px) */",
      );
      expect(inlineSizeCss).toContain(
        "@media only screen and (min-device-width: 600px)",
      );
      expect(inlineSizeCss).toContain(".mox-inlineSize-xl\\@mobileMin {");
      expect(inlineSizeCss).toContain(
        "@media only screen and (max-device-width: 600px)",
      );
      expect(inlineSizeCss).toContain(".mox-inlineSize-xl\\@mobileMax {");

      // Check for tablet breakpoint (900px)
      expect(inlineSizeCss).toContain(
        "/* Viewport breakpoint: tablet (900px) */",
      );
      expect(inlineSizeCss).toContain(
        "@media only screen and (min-device-width: 900px)",
      );
      expect(inlineSizeCss).toContain(".mox-inlineSize-md\\@tabletMin {");

      // Check for desktop breakpoint (1200px)
      expect(inlineSizeCss).toContain(
        "/* Viewport breakpoint: desktop (1200px) */",
      );
      expect(inlineSizeCss).toContain(
        "@media only screen and (min-device-width: 1200px)",
      );
      expect(inlineSizeCss).toContain(".mox-inlineSize-sm\\@desktopMin {");
    });

    it("should generate responsive classes for container breakpoints", () => {
      const paddingCss = readGeneratedFile("_generated/properties/padding.css");

      expect(paddingCss).toBeDefined();

      // Check for container breakpoint cq200 (200px)
      expect(paddingCss).toContain("/* Container breakpoint: cq200 (200px) */");
      expect(paddingCss).toContain("@container (min-width: 200px)");
      expect(paddingCss).toContain(".mox-padding-xl\\@cq200Min {");
      expect(paddingCss).toContain("@container (max-width: 200px)");
      expect(paddingCss).toContain(".mox-padding-xl\\@cq200Max {");

      // Check for container breakpoint cq600 (600px)
      expect(paddingCss).toContain("/* Container breakpoint: cq600 (600px) */");
      expect(paddingCss).toContain("@container (min-width: 600px)");
      expect(paddingCss).toContain(".mox-padding-md\\@cq600Min {");
    });

    it("should NOT generate responsive classes for non-responsive properties", () => {
      const borderWidthCss = readGeneratedFile(
        "_generated/properties/borderWidth.css",
      );

      expect(borderWidthCss).toBeDefined();
      expect(borderWidthCss).not.toContain("@media");
      expect(borderWidthCss).not.toContain("@container");
      expect(borderWidthCss).not.toContain("\\@mobileMin");
    });
  });

  describe("Test Case 3: State-dependent CSS classes", () => {
    it("should generate state-dependent classes with :hover pseudo-class", () => {
      const underlineHoverCss = readGeneratedFile(
        "_generated/properties/underlineHover.css",
      );

      expect(underlineHoverCss).toBeDefined();
      expect(underlineHoverCss).toContain(
        ".mox-underlineHover-underline-hover:hover {",
      );
      expect(underlineHoverCss).toContain("text-decoration: underline;");
      expect(underlineHoverCss).toContain(
        ".mox-underlineHover-none-hover:hover {",
      );
      expect(underlineHoverCss).toContain("text-decoration: none;");
    });

    it("should NOT add state suffix for properties without state", () => {
      const underlineCss = readGeneratedFile(
        "_generated/properties/underline.css",
      );

      expect(underlineCss).toBeDefined();
      expect(underlineCss).toContain(".mox-underline-underline {");
      expect(underlineCss).not.toContain("-hover:hover");
      expect(underlineCss).not.toContain(":hover");
    });

    it("should properly escape special characters in class names", () => {
      // Test with a property that has special characters in option keys (e.g., "1px")
      const borderRadiusCss = readGeneratedFile(
        "_generated/properties/borderRadius.css",
      );

      expect(borderRadiusCss).toBeDefined();
      // Special characters like "1px" should have the special chars replaced with dashes
      expect(borderRadiusCss).toContain(".mox-borderRadius-1px {");
      expect(borderRadiusCss).toContain("border-radius: 1px;");
    });
  });

  describe("Clamp spaces generation", () => {
    it("should generate clamp space files for all defined spaces", () => {
      const clampXlCss = readGeneratedFile(
        "_generated/clampSpaces/clamp-xl.css",
      );

      expect(clampXlCss).toBeDefined();
      expect(clampXlCss).toContain("@layer base");
      expect(clampXlCss).toContain("--clamp-slope-xl:");
      expect(clampXlCss).toContain("--clamp-intercept-xl:");
      expect(clampXlCss).toContain("--mox-space-xl:");
    });

    it("should generate an index file for clamp spaces", () => {
      const indexCss = readGeneratedFile("_generated/clampSpaces/index.css");

      expect(indexCss).toBeDefined();
      expect(indexCss).toContain("@import 'clamp-xl.css';");
      expect(indexCss).toContain("@import 'clamp-md.css';");
      expect(indexCss).toContain("@import 'clamp-xs.css';");
      expect(indexCss).toContain("--viewport-min-inline-size: 360px;");
      expect(indexCss).toContain("--viewport-max-inline-size: 1440px;");
    });
  });
});
