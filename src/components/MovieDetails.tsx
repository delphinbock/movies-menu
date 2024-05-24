import React from 'react'

// Router
import { useLocation, useParams } from 'react-router-dom'

const MoviesDetails = () => {
  const { name } = useParams()
  const location = useLocation()
  const { movie } = location.state || {}

  console.log(JSON.stringify(movie))

  return <h1>{name}</h1>
}

export default MoviesDetails
