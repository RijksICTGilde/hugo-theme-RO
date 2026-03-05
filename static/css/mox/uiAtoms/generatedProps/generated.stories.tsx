// src/moxCss/_generated/properties/GeneratedCss.stories.tsx
// const cssFiles = import.meta.glob("./*.css", { as: "raw", eager: true });

import { useState } from "react";
import { moxConfig } from "../../mox.config";

export default {
  title: "MoxCSS/Atoms/Properties",
};

export const AllGeneratedCss = () => {
  const [propStates, setPropStates] = useState<Record<string, string>>({});

  const setProp = (propName: string, option: string) => () => {
    setPropStates((prevStates) => ({
      ...prevStates,
      [propName]: option,
    }));
  };

  return (
    <div>
      <style>{`
h1, p, code {
all: revert;    
}
code {
        background-color: #f0f0f0;
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

.limited-height {
  max-height: 135px;
  overflow-y: auto;
  display: block;
}
.breakpoint {
    font-weight: bold;
    background-color: #e0e0e0;
    border-radius: 4px;
    padding: 2px 4px;
    font-family: monospace;
    margin-block: 8px;
}

    `}</style>
      <h1>Gegenereerde CSS properties</h1>
      <p>Dit laat alle mogelijke CSS properties zien die gegenereerd zijn.</p>
      <p>
        Je kan ze simpelweg gebruiken als classNames, maar met React wordt het
        nog eenvoudiger: bekijk bij een component welke property je kan
        instellen (bv een <code>MoxBox</code> heeft o.a. de property{" "}
        <code>backgroundColor</code>).
        <br />
        De mogelijke options voor die prop zijn dezelfde die hier opgesomd
        staan.
      </p>

      <table className="generated-css-table">
        <thead>
          <tr>
            <th>Property</th>
            <th title="responsive?">📐</th>
            <th title="state-dependant?">👆</th>
            <th>Options</th>
            <th>Classname</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(moxConfig.props)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([propName, propConfig]) => (
              <tr key={propName}>
                <td>{propName}</td>
                <td>
                  {"responsive" in propConfig && propConfig.responsive
                    ? "✔"
                    : ""}
                </td>
                <td>
                  {"state" in propConfig && propConfig.state ? (
                    <pre>{propConfig.state}</pre>
                  ) : (
                    ""
                  )}
                </td>
                <td>
                  <div className="limited-height">
                    <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                      {Object.keys(propConfig.options).map((option) => (
                        <li key={option}>
                          <button
                            type="button"
                            onClick={setProp(propName, option)}
                            style={{
                              ...(propStates[propName] === option
                                ? {
                                    fontWeight: "bold",
                                    textDecoration: "underline",
                                  }
                                : {}),
                            }}
                          >
                            {option}
                          </button>
                        </li>
                      ))}
                      {"responsive" in propConfig && propConfig.responsive && (
                        <>
                          {Object.entries(moxConfig.viewportBreakpoints).map(
                            ([breakpoint, bpSize]) => (
                              <>
                                <li className="breakpoint">{`Media: ${breakpoint} (${bpSize}px)`}</li>
                                {Object.keys(propConfig.options).map(
                                  (option) => (
                                    <>
                                      <li key={`${breakpoint}-Min-${option}`}>
                                        <button
                                          type="button"
                                          onClick={setProp(
                                            propName,
                                            `${option}@${breakpoint}Min`,
                                          )}
                                          style={{
                                            ...(propStates[propName] ===
                                            `${option}@${breakpoint}Min`
                                              ? {
                                                  fontWeight: "bold",
                                                  textDecoration: "underline",
                                                }
                                              : {}),
                                          }}
                                        >{`${option}@${breakpoint}Min`}</button>
                                      </li>
                                      <li key={`${breakpoint}-Max-${option}`}>
                                        <button
                                          type="button"
                                          onClick={setProp(
                                            propName,
                                            `${option}@${breakpoint}Max`,
                                          )}
                                          style={{
                                            ...(propStates[propName] ===
                                            `${option}@${breakpoint}Max`
                                              ? {
                                                  fontWeight: "bold",
                                                  textDecoration: "underline",
                                                }
                                              : {}),
                                          }}
                                        >
                                          {`${option}@${breakpoint}Max`}
                                        </button>
                                      </li>
                                    </>
                                  ),
                                )}
                              </>
                            ),
                          )}
                          {Object.entries(moxConfig.containerBreakpoints).map(
                            ([breakpoint, bpSize]) => (
                              <>
                                <li className="breakpoint">{`Container: ${breakpoint} (${bpSize}px)`}</li>
                                {Object.keys(propConfig.options).map(
                                  (option) => (
                                    <>
                                      <li key={`${breakpoint}-Min-${option}`}>
                                        <button
                                          type="button"
                                          onClick={setProp(
                                            propName,
                                            `${option}@${breakpoint}Min`,
                                          )}
                                          style={{
                                            ...(propStates[propName] ===
                                            `${option}@${breakpoint}Min`
                                              ? {
                                                  fontWeight: "bold",
                                                  textDecoration: "underline",
                                                }
                                              : {}),
                                          }}
                                        >{`${option}@${breakpoint}Min`}</button>
                                      </li>
                                      <li key={`${breakpoint}-Max-${option}`}>
                                        <button
                                          type="button"
                                          onClick={setProp(
                                            propName,
                                            `${option}@${breakpoint}Max`,
                                          )}
                                          style={{
                                            ...(propStates[propName] ===
                                            `${option}@${breakpoint}Max`
                                              ? {
                                                  fontWeight: "bold",
                                                  textDecoration: "underline",
                                                }
                                              : {}),
                                          }}
                                        >{`${option}@${breakpoint}Max`}</button>
                                      </li>
                                    </>
                                  ),
                                )}
                              </>
                            ),
                          )}
                        </>
                      )}
                    </ul>
                  </div>
                </td>
                <td>
                  <pre>
                    {moxConfig.prefix}-{propName}-
                    {propStates[propName] ? (
                      propStates[propName]
                    ) : (
                      <span style={{ color: "grey" }}>&lt;value&gt;</span>
                    )}
                  </pre>
                </td>
                <td></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
