// React
import React, { FC } from 'react'

// Routing
import { Route, Routes } from 'react-router-dom'

// Components
const Home = React.lazy(() => import('../pages/Home'))
const MoviesCategoryDetails = React.lazy(() => import('./MoviesCategoryDetails'))

const AppRoutes: FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-details/:name" element={<MoviesCategoryDetails />} />
      </Routes>
    </React.Suspense>
  )
}

export default AppRoutes
