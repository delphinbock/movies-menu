// React
import React from 'react'

// Router
import { Route, BrowserRouter, Routes } from 'react-router-dom'

// Components
import Home from './Home'
import MovieDetails from './MovieDetails'

// Styles
import '../styles/main.scss'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-details/:name" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
