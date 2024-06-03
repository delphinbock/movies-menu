// React
import React, { useEffect, useState, Suspense, lazy } from 'react'

// Types
import { MoviesCategoriesDataObjProps } from '../types/MoviesMenuType'

// Component
const MoviesCategoriesList = lazy(() => import('./MoviesCategoriesList'))

const MoviesMenu = () => {
  // States
  const [MoviesCategoriesDataObjArr, setMoviesCategoriesDataObjArr] = useState<MoviesCategoriesDataObjProps[]>([])

  const fetchMoviesCategoriesData = async () => {
    try {
      // Get local data object
      const response = await import('../objs/moviesCategoriesDataObj.json')

      // Set the state categories movies
      setMoviesCategoriesDataObjArr(response.default)
    } catch (error) {
      console.error(':( Error fetching movies data:', error)
    }
  }

  // Fetch movies categories data from local JSON object
  useEffect(() => {
    fetchMoviesCategoriesData()
  }, [])

  return (
    <div id="MoviesMenu">
      <Suspense fallback={<div>Loading...</div>}>
        <MoviesCategoriesList moviesCategoriesDataObjArr={MoviesCategoriesDataObjArr} />
      </Suspense>
    </div>
  )
}

export default MoviesMenu
