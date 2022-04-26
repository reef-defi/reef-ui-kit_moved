import { createRoot, Root } from 'react-dom/client';

class Container {
  id: string
  root: Root | undefined

  constructor (id: string) {
    this.id = id
  }

  getElement = () => {
    return document.getElementById(this.id)
  }

  create = () => {
    let el = this.getElement()
    
    if (!el) {
      el = document.createElement("div")
      el.id = this.id
      document.body.appendChild(el)
    }

    this.root = createRoot(el!)
  }

  render = (children: React.ReactChild | Iterable<React.ReactNode>) => {
    if (!this.root) this.create()
    if (this.root) this.root.render(children)
  }

  destroy = () => {
    if (!this.root) return

    this.root.unmount()
    this.root = undefined
    let el = this.getElement()
    el?.remove()
  }
}

export default Container