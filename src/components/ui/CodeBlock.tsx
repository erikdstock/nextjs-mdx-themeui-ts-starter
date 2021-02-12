import React from "react"
import Highlight, { defaultProps, Language } from "prism-react-renderer"
import github from "prism-react-renderer/themes/github"

const CodeBlock: React.FC<{ className?: string; children: any }> = ({
  children,
  className,
}) => {
  const language: Language = (className
    ? className.replace(/language-/, "")
    : "javascript") as Language
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={github}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, padding: "20px", marginBottom: "32px" }}
        >
          {tokens.map((line, i) => {
            // for some reason the last line here comes through as a single empty element, causing an ugly extra line at the bottom.
            // this might be a hack but it works for now.
            if (i === tokens.length - 1 && line.length === 1 && line[0].empty) {
              return null
            }
            return (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
