import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const defaultMarkdown = `# Hello from the Markdown Previewer!

## This is a subheading

[Visit freeCodeCamp](https://www.freecodecamp.org)

Here is some inline code: \`<div></div>\`

\`\`\`
// And here is a code block:
function greet(name) {
  return "Hello, " + name;
}
\`\`\`

- List item
- Another list item

> This is a blockquote

![React Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/react-logo.png)

**Bold text**
`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  marked.setOptions({
    breaks: true
  });

  const getMarkdownText = () => {
    const rawMarkup = marked(markdown);
    return { __html: rawMarkup };
  };

  return (
    <div className="App container p-4">
      <h1 className="text-center">Markdown Previewer</h1>
      <div className="mb-3">
        <label htmlFor="editor" className="form-label">Editor</label>
        <textarea
          id="editor"
          className="form-control"
          rows="10"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </div>
      <div>
        <h2>Preview</h2>
        <div
          id="preview"
          className="border p-3"
          dangerouslySetInnerHTML={getMarkdownText()}
        />
      </div>
    </div>
  );
}

export default App;