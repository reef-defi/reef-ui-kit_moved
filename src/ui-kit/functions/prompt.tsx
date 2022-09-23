import Prompt, { Props as NewPrompt } from "../components/molecules/Prompt"
import Container from "../helpers/Container"

const hideScrollbar = () => document.body.style.overflow = 'hidden'
const showScrollbar = () => document.body.style.overflow = ''

const prompt = ({
  type = "info",
  title,
  message,
  actions
}: NewPrompt) => {
  const container = new Container("uik-prompt-container")
  
  hideScrollbar()

  container.render(
    <Prompt
      type={type}
      title={title}
      message={message}
      actions={actions}
      onClose={() => {
        showScrollbar();
        container.destroy();
      }}
    />
  )
}

export default prompt