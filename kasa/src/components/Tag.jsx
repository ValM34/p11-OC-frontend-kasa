import PropTypes from 'prop-types'

function Tag({children}) {
  return(
    <div className="tag">
      <div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

Tag.propTypes = {
  children: PropTypes.string
}

export default Tag;
