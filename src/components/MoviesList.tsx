import React from 'react'
import { FixedSizeList as List } from 'react-window'
import MoviesCard from './MoviesCards'
import { MoviesListComp } from '../types/MoviesMenuType'

interface RowProps {
  index: number
  style: React.CSSProperties
}

const MoviesList: MoviesListComp = ({ moviesDataObjArr }) => {
  return (
    <>
      {moviesDataObjArr.map((movie, index) => (
        <MoviesCard key={`${index}_${movie.name}`} movie={movie} />
      ))}
    </>
  )
}

export default React.memo(MoviesList)
