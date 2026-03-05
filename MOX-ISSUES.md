# MOx issues

Known issues in [MinBZK/moza-mox-nlds](https://github.com/MinBZK/moza-mox-nlds) that are worked around in this theme.

## `inline-size` on `p` elements in markupContent

**File:** `src/moxCss/_generated/markupContent/index.css`

The CSS generator sets `inline-size` to a spacing token on `<p>` elements inside `.markup-content`:

```css
@media only screen and (min-width: 600px) {
  :where(.markup-content) p {
    inline-size: var(--mox-space-md);  /* ~16px — should be a content width, not a spacing token */
  }
}
@media only screen and (max-width: 600px) {
  :where(.markup-content) p {
    inline-size: var(--mox-space-xs);  /* even narrower */
  }
}
```

This makes paragraphs ~16px wide, rendering text content unusable. The generator likely confuses a size/width token with a spacing token.

**Workaround in theme:** `assets/css/theme.css` overrides this with `.markup-content p { inline-size: auto; }`.

**Fix in MOx:** The `generateCss.ts` script should either not emit `inline-size` for `p` elements in markupContent, or use an appropriate content width token instead of a spacing token.
