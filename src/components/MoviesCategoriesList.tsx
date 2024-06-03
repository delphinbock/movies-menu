// React
import React from 'react'

// Component
import MoviesCard from './MoviesCategoryCard'

// Types
import { MoviesCategoriesListComp } from '../types/MoviesMenuType'

const CategoriesMoviesList: MoviesCategoriesListComp = ({ moviesCategoriesDataObjArr }) => {
  return (
    <>
      {moviesCategoriesDataObjArr.map((moviesCategoryDataObj, index) => {
        // Destructuring
        const { name } = moviesCategoryDataObj

        return <MoviesCard key={`${index}_${name}`} moviesCategoryDataObj={moviesCategoryDataObj} />
      })}
    </>
  )
}

export default React.memo(CategoriesMoviesList)
