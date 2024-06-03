// React
import React from 'react'

// Router
import { useLocation, useParams } from 'react-router-dom'

const MoviesCategoryDetails = () => {
  // Data from URL parameters
  const { name } = useParams()

  // Data from storage location
  const location = useLocation()
  const { movieCategoriesDataObjArr } = location.state || {}

  console.log(JSON.stringify(movieCategoriesDataObjArr))

  return <h1>{name}</h1>
}

export default MoviesCategoryDetails
