// React
import React, { useRef, useState, useEffect, useCallback } from 'react'

// Routing
import { Link } from 'react-router-dom'

// Components
import { MoviesCategoriesCardComp } from '../types/MoviesMenuType'

const MoviesCard: MoviesCategoriesCardComp = ({ moviesCategoryDataObj }) => {
  // Destructuring
  const { name, background_video, logo_img } = moviesCategoryDataObj

  // References
  const videoRef = useRef<HTMLVideoElement>(null)

  // States
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [sourceLoaded, setSourceLoaded] = useState(false)

  // Set intersection space between the cards
  const intersectionCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    const entry = entries[0]
    if (entry) {
      setIsIntersecting(entry.isIntersecting)
    }
  }, [])

  // Side effects - Create an observer of video element to have one alone reading video at the same moment
  useEffect(() => {
    const video = videoRef.current

    // Active or desactive the observer the video element between the cards
    if (video) {
      const observer = new IntersectionObserver(intersectionCallback, {
        threshold: 0.5,
      })

      observer.observe(video)

      return () => {
        observer.unobserve(video)
      }
    }
  }, [intersectionCallback])

  // Side effect - Build the video element
  useEffect(() => {
    const video = videoRef.current

    // Create the source & type for video element
    if (video) {
      if (isIntersecting && !sourceLoaded) {
        const source = document.createElement('source')
        source.src = `/vids/${background_video}`
        source.type = 'video/mp4'
        video.appendChild(source)

        setSourceLoaded(true)
      }

      // Error
      if (isIntersecting) {
        video.play().catch((error) => {
          console.error(':( Error attempting to play the video:', error)
        })
      } else {
        // Reset video
        video.pause()
        video.currentTime = 0
      }
    }
  }, [isIntersecting, sourceLoaded, background_video])

  return (
    <>
      {/* Link to movies category details */}
      <Link className="card" to={`/movie-details/${name}`} state={{ moviesCategoryDataObj }}>
        {/* Video element */}
        <video className="card__background_video" loop muted ref={videoRef}>
          Your browser does not support HTML video.
        </video>
        <img className="card__logo" src={`/img/${logo_img}`} alt={`${name} logo`} loading="lazy" />
      </Link>
    </>
  )
}

export default React.memo(MoviesCard)
