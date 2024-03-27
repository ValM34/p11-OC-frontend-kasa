import { useState } from 'react'
import chevron from '../assets/images/chevron-white.svg'

export default function Collapse({children, title}) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  }

  return(
    <div className="collapse">
      <div className="title-container" onClick={handleClick}>
        <div className="title">{title}</div>
        <div className={`chevron ${open ? 'open' : ''}`}>
          <img src={chevron} alt="chevron" />
        </div>
      </div>
      <div className={`content-container ${open ? 'open' : ''}`}>
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  )
}
