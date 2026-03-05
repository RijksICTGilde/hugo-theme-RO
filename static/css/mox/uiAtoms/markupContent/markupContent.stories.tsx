import { markupContent } from "../../mox.config";

export default {
  title: "MoxCSS/Atoms/Markup Content",
};

const examples = {
  a: `<a href="#">This is a link</a>`,
  "a.btn-primary": `<a href="#" class="btn-primary">This is a button</a>`,
  "a.btn-secondary": `<a href="#" class="btn-secondary">This is a button</a>`,
  "a.btn-outline-primary": `<a href="#" class="btn-outline-primary">This is a button</a>`,
  "a.btn-outline-secondary": `<a href="#" class="btn-outline-secondary">This is a button</a>`,
  button: `<button>This is a button</button>`,
  p: `<p>This is a paragraph of text that provides information.</p>`,
  blockquote: `<blockquote>This is a blockquote, used to indicate a section that is quoted from another source.<br /><br />Some more text here.</blockquote>`,
} as const satisfies Record<keyof typeof markupContent, string>;

export const MarkupContentStory = () => {
  return (
    <div>
      <style>{`
      @layer base {
:is(h1, p, code, hr, a) {
    all: revert;    
}
.markup-content :is(h1, p, code) {
  all: unset; 
}
code {
  background-color: #f0f0f0;
}
.prop {
  font-weight: bold;
}

.generated-css-table {
  border-collapse: collapse;
  width: 100%;
}
.generated-css-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}
.generated-css-table th,
.generated-css-table td {
  border: 1px solid #ccc;
  padding: 8px;
      }
    `}</style>
      <h1>Markup Content</h1>
      <p>
        Voor content die bijvoorbeeld uit een CMS komt, of gegenereerd is vanuit
        <strong> Markdown</strong> is het lastig om de juiste styling classes
        toe te passen. Daarom is er ook een optie om een blok <code>HTML</code>{" "}
        te wrappen in de class <code>markup-content</code>.
      </p>
      <p>
        Op bepaalde elementen binnen die container wordt dan een standaard
        styling toegepast. De styling is opgesteld in de mox-config via een
        lijst van properties en automatisch gegenereerd (zie de tweede column
        voor welke properties dit zijn).
      </p>
      <p>
        Alle mogelijke properties zijn{" "}
        <a href="/?path=/story/moxcss-atoms-properties--all-generated-css">
          hier te zien
        </a>
        .
      </p>
      <p>
        Eventuele aanpassingen kan je doen via de design-tokens, of door CSS te
        schrijven die de standaard styling overschrijft (makkelijk is om deze
        styling te wrappen in een `@layer overrides`).
      </p>

      <table className="generated-css-table">
        <thead>
          <tr>
            <th>CSS Selector</th>
            <th>Properties</th>
            <th>Voorbeeld</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(markupContent)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([el, props]) => (
              <tr key={el}>
                <td>{el}</td>
                <td>
                  {Object.entries(props).map(([key, value]) => (
                    <div key={key}>
                      <span className="prop">{key}</span>:{" "}
                      <code>{JSON.stringify(value)}</code>
                    </div>
                  ))}
                </td>
                <td>
                  {examples[el as keyof typeof examples] ? (
                    <>
                      <div
                        className="markup-content"
                        dangerouslySetInnerHTML={{
                          __html: examples[el as keyof typeof examples],
                        }}
                      />
                      <hr style={{ marginBlock: "1rem" }} />
                      <details>
                        <summary>html</summary>
                        <code>
                          {examples[el as keyof typeof examples]
                            ? examples[el as keyof typeof examples]
                            : "N/A"}
                        </code>
                      </details>
                    </>
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
