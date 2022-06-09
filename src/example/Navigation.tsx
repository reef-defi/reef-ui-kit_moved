import { Fragment } from 'react';
import Uik from "../ui-kit"

const scrollTo = (link: string): void => {
  const id = "uik-divider--text-" + link.toLowerCase().replaceAll(" ", "-")
  const el = document.querySelector(`#${id}`)
  if (el) {
    const elOffset = el.getBoundingClientRect().top
    const scrollOffset = window.scrollY
    const pos = elOffset + scrollOffset - 25
    
    window.scroll({ top: pos, behavior: "smooth" })
  }
}

const content = [
  {
    title: "Style",
    links: [
      "Colors",
      "Font"
    ]
  },
  {
    title: "Atoms",
    links: [
      "Button",
      "Action Button",
      "Text",
      "Icon",
      "Alert",
      "Tooltip",
      "Card",
      "Dropdown",
      "Modal",
      "Tabs",
      "Label",
      "Input",
      "Form",
      "Toggle",
      "Checkbox",
      "Table",
      "Radio",
      "Tag",
      "Avatar",
      "Container",
      "Divider",
      "Celebrate",
      "Loading",
      "QR Code",
      "Code"
    ]
  },
  {
    title: 'Molecules',
    links: [
      "Notifications"
    ]
  },
  {
    title: 'Organisms',
    links: [
      "Account Selector",
      "Copy Button"
    ]
  },
  {
    title: 'Assets',
    links: [
      "Reef Logo",
      "Reef Sign",
      "Reef Icon",
      "Bubbles",
      "Fish Animation"
    ]
  }
]

const Navigation = () => (
  <nav className='navigation'>
    <div className='navigation__head'>
      <Uik.ReefLogo/>
    </div>

    <div className='navigation__links'>
    {
      content.map((group, index) => (
        <Fragment key={index}>
          <div className='navigation__link-title'>{ group.title }</div>
          {
            group.links.map(link => (
              <button
                key={link}
                type='button'
                onClick={() => { scrollTo(link) }}
              >{ link }</button>
            ))
          }
        </Fragment>
      ))
    }
    </div>
  </nav>
)

export default Navigation