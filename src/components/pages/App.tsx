// React
import React, { FC } from 'react'

// Styles
import '../../components/atoms/global.scss'

// Router
import { BrowserRouter } from 'react-router-dom'

// Routes
import AppRoutes from '../templates/AppRoutes'

const App: FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
