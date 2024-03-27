import Header from './Header'
import Footer from './Footer'

export default function MainLayout({children}) {
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
