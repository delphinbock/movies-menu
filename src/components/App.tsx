import React from 'react' // Import React
import Header from './Header' // Correct the path to Header component
import Main from './Main' // Correct the path to Main component
import Footer from './Footer'

// Styles
import '../styles/App.scss'

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
