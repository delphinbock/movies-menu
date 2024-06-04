// React
import React, { FC } from 'react'

// Components
import Header from '../organisms/Header/Header'
import Main from '../templates/Main'
import Footer from '../organisms/Footer/Footer'

const Home: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default React.memo(Home)
