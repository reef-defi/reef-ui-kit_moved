import Uik from "./../../ui-kit"
import { useState } from 'react';
import { faCode } from "@fortawesome/free-solid-svg-icons";

export interface Props {
  text: string,
  code?: string
}

const Title = ({
  text,
  code
}: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="example-section-title">
      <Uik.Divider text={text}/>
      {
        !!code &&
        <>
          <button
            className="example-section-title__code-btn"
            title="Show code"
            onClick={() => setIsOpen(true)}
          >
            <Uik.Icon icon={faCode}/>
          </button>

          <Uik.Modal
            className="example-section-title__code-popup"
            title={text + ' Code'}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <Uik.Code>{ code }</Uik.Code>
          </Uik.Modal>
        </>
      }
    </div>
  )
}

export default Title