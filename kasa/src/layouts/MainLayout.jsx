import Header from './Header'
import Footer from './Footer'
import PropTypes from 'prop-types'

function MainLayout({children}) {
  return(
    <>
      <Header />
      <div className="main-layout-content-container">
        {children}
      </div>
      <Footer />
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node
}

export default MainLayout;
