// React
import React, { useEffect, useRef, useState } from 'react'

// Router
import { Link } from 'react-router-dom'

// Types
import { MoviesDataObjProps, MoviesCardComp, MoviesListComp } from '../types/MoviesMenuType'

const MoviesCard: MoviesCardComp = ({ movie }) => {
  // Destructuring
  const { name, background_video, logo_img } = movie

  // Video reference
  const videoRef = useRef<HTMLVideoElement>(null)

  // State for tracking the timeout ID
  const [timeoutId, setTimeoutId] = useState<number | null>(null)

  // Add a setTimeout to avoid many errors
  // Play video event handler
  const handleMouseEnter = () => {
    if (videoRef.current && videoRef.current.paused) {
      const id = window.setTimeout(() => {
        videoRef.current && videoRef.current.play()
      }, 200)
      setTimeoutId(id)
    }
  }

  // Stop video event handler
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()

      // Clear the timeout if it's set
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId)
        setTimeoutId(null)
      }

      // Réinitialiser la vidéo
      videoRef.current.currentTime = 0
    }
  }

  return (
    <Link className="card" to={`/movie-details/${name}`} state={{ movie }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Background video */}
      <video className="card__background_video" loop muted ref={videoRef}>
        <source src={`/vids/${background_video}`} type="video/mp4" />
        Your browser does not support HTML video.
      </video>

      {/* Logo */}
      <img className="card__logo" src={`/img/${logo_img}`} alt={`${name} logo`} loading="lazy" />
    </Link>
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
