import React, { useEffect, useState, Suspense, lazy } from 'react'
import { MoviesDataObjProps } from '../types/MoviesMenuType'

const MoviesList = lazy(() => import('./MoviesList'))

const MoviesMenu = () => {
  const [moviesDataObjArr, setMoviesDataObjArr] = useState<MoviesDataObjProps[]>([])

  const fetchMoviesData = async () => {
    try {
      const response = await import('../objs/moviesDataObj.json')
      setMoviesDataObjArr(response.default)
    } catch (error) {
      console.error(':( Error fetching movies data:', error)
    }
  }

  useEffect(() => {
    fetchMoviesData()
  }, [])

  return (
    <div id="MoviesMenu">
      <Suspense fallback={<div>Loading...</div>}>
        <MoviesList moviesDataObjArr={moviesDataObjArr} />
      </Suspense>
    </div>
  )
}

export default MoviesMenu
