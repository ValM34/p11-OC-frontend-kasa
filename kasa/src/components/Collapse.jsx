import PropTypes from 'prop-types'

import { useState } from 'react'
import chevron from '../assets/images/chevron-white.svg'

function Collapse({children, title}) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  }

  return(
    <div className="collapse">
      <div className="title-container">
        <div className="title">{title}</div>
        <div className={`chevron ${open ? 'open' : ''}`} onClick={handleClick}>
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

Collapse.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}

export default Collapse;