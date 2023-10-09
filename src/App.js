import React, { useEffect, useState } from "react";
import CirclesBG from "./assets/bg-circles.svg";
import { FaPencilAlt } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import DOMPurify from "dompurify";
import { marked } from "marked";
const defaultText = `
# Heading 1

## Heading 2

[Link to Google](https://www.google.com/)

Inline \`code\`

\`\`\`javascript
// Code Block
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

- List Item 1
- List Item 2

> Blockquote

![Image Alt Text](https://via.placeholder.com/150)

**Bold Text**
`;

function App() {
  const [mdInput, setMdInput] = useState(defaultText);

  useEffect(() => {
    marked.setOptions({ breaks: true, gfm: true });
  }, []);

  const previewHtml = marked(mdInput);

  return (
    // Base Container
    <div
      className="container-fluid"
      style={{
        minHeight: "100dvh",
        backgroundImage: `url(${CirclesBG})`,
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Wrapper */}
      <div className="">
        <div className="row p-2">
          {/* Column #1 Editor */}
          <div
            className="col-lg-6 col-sm-12 text-white p-2"
            style={{
              height: "95dvh",
            }}
          >
            <div
              className="container w-100 bg-glass border rounded border-white border-opacity-25 rounded-3 p-0"
              style={{
                height: "100%",
              }}
            >
              <div className="d-flex flex-column align-items-center justify-content-center py-2 border-white border-bottom border-opacity-25">
                <div className="d-flex flex-row align-items-center">
                  <FaPencilAlt size={16} className="me-2" />
                  <span className="fw-bold fs-6">MARKDOWN EDITOR</span>
                </div>
              </div>
              <div
                className="container p-1"
                style={{ height: "calc(100% - 41px)" }}
              >
                {/* Textarea */}
                <textarea
                  id="editor"
                  defaultValue={defaultText}
                  onChange={(e) => {
                    setMdInput(e.target.value);
                  }}
                  className="h-100 w-100 bg-glass-textarea border rounded border-white border-opacity-25 rounded-3 p-2"
                  style={{ resize: "none" }}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Column #2 Preview */}
          <div
            className="col-lg-6 col-sm-12 text-white p-2"
            style={{
              height: "95dvh",
            }}
          >
            <div
              className="container w-100 bg-glass border rounded border-white border-opacity-25 rounded-3 p-0"
              style={{
                height: "100%",
              }}
            >
              <div className="d-flex flex-column align-items-center justify-content-center py-2 border-white border-bottom border-opacity-25">
                <div className="d-flex flex-row align-items-center">
                  <MdPreview size={21} className="me-2" />
                  <span className="fw-bold fs-6">MARKDOWN PREVIEW</span>
                </div>
              </div>
              {/* Parent */}
              <div
                id="preview"
                className="container p-3 overflow-auto"
                style={{ height: "calc(100% - 41px)" }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(previewHtml),
                }}
              ></div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="d-flex text-center justify-content-center">
          <span className="text-white text-opacity-75">
            Design and Code by{" "}
            <a
              href="http://rifkisalim.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-opacity-75"
            >
              Rifki Salim
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
