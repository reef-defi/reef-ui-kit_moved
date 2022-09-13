import Prompt, { Props as NewPrompt } from "../components/molecules/Prompt"
import Container from "../helpers/Container"

const prompt = ({
  type = "info",
  title,
  message,
  actions
}: NewPrompt) => {
  const container = new Container("uik-prompt-container")

  container.render(
    <Prompt
      type={type}
      title={title}
      message={message}
      actions={actions}
      onClose={container.destroy}
    />
  )
}

export default prompt