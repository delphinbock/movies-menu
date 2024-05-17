// React
import React, { useEffect, useRef, useState } from 'react'

// Types
import { MoviesDataObjProps, MoviesCardComp, MoviesListComp } from '../types/MoviesMenuType'

// Styles
import '../styles/MoviesMenu.scss'

const MoviesCard: MoviesCardComp = ({ movie }) => {
  // Destructuring
  const { name, background_video, logo_img } = movie

  // Video reference
  const videoRef = useRef<HTMLVideoElement>(null)

  // Event handlers for playing and pausing the video
  const handleMouseEnter = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()

      // Réinitialize the video
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Background video */}
      <video className="card__background_video" loop muted ref={videoRef}>
        <source src={`/vids/${background_video}`} type="video/mp4" />
        Your browser does not support HTML video.
      </video>

      {/* Logo */}
      <img className="card__logo" src={`/img/${logo_img}`} alt={`${name} logo`} loading="lazy" />
    </div>
  )
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

const MoviesMenu = () => {
  // States
  const [moviesDataObjArr, setMoviesDataObjArr] = useState<MoviesDataObjProps[]>([])

  // Import movies data object
  const fetchMoviesData = async () => {
    try {
      const response = await import('../objs/moviesDataObj.json')
      setMoviesDataObjArr(response.default)
    } catch (error) {
      console.error(':( Error fetching movies data:', error)
    }
  }

  // Side effects
  useEffect(() => {
    fetchMoviesData()
  }, [])

  return (
    <div id="MoviesMenu">
      <MoviesList moviesDataObjArr={moviesDataObjArr} />
    </div>
  )
}

export default MoviesMenu
