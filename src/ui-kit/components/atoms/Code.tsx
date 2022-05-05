import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDarkReasonable as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import CopyButton from '../organisms/CopyButton'

export interface Props {
  code?: string,
  lang?: string,
  children?: any,
  className?: string
}

const Code = ({
  code,
  children,
  lang,
  className
}: Props): JSX.Element => {
  const content = code || children
  
  return (
    <div
      className={`
        uik-code
        ${className || ''}
      `}
    >
      {
        !!content &&
        <CopyButton
          className='uik-code__copy-btn'
          value={content}
          notification="Copied to clipboard"
          tooltip="Copy code"
        />
      }
  
      <SyntaxHighlighter
        language={lang || 'javascript'}
        wrapLongLines
        style={theme}
      >{ content }</SyntaxHighlighter>
    </div>
  )
}

export default Code