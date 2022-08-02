import ReactDOM from 'react-dom';

class Container {
  id: string
  root: HTMLElement

  constructor (id: string) {
    this.id = id
    this.root = null
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

    this.root = el
  }

  render = (children) => {
    if (!this.root) this.create()
    if (this.root) ReactDOM.render(children, this.root)
  }

  destroy = () => {
    if (!this.root) return
    this.root.remove()
    this.root = null
  }
}

export default Container