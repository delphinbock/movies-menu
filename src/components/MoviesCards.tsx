import React, { useRef, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { MoviesCardComp } from '../types/MoviesMenuType'

const MoviesCard: MoviesCardComp = ({ movie }) => {
  const { name, background_video, logo_img } = movie
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [sourceLoaded, setSourceLoaded] = useState(false)

  const intersectionCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    const entry = entries[0]
    if (entry) {
      setIsIntersecting(entry.isIntersecting)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current

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

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      if (isIntersecting && !sourceLoaded) {
        const source = document.createElement('source')
        source.src = `/vids/${background_video}`
        source.type = 'video/mp4'
        video.appendChild(source)
        setSourceLoaded(true)
      }

      if (isIntersecting) {
        video.play().catch((error) => {
          console.error('Error attempting to play the video:', error)
        })
      } else {
        video.pause()
        video.currentTime = 0
      }
    }
  }, [isIntersecting, sourceLoaded, background_video])

  return (
    <Link className="card" to={`/movie-details/${name}`} state={{ movie }}>
      <video className="card__background_video" loop muted ref={videoRef}>
        Your browser does not support HTML video.
      </video>
      <img className="card__logo" src={`/img/${logo_img}`} alt={`${name} logo`} loading="lazy" />
    </Link>
  )
}

export default React.memo(MoviesCard)
