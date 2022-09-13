import notify from "./notify"
import prompt from "./prompt"
import celebrate from "./celebrate"

const functions = {
  notify,
  prompt,
  ...celebrate
}

export default functions