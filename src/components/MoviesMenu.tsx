// React
import React, { useEffect, useState } from 'react'

// Types
import { MoviesDataObjProps, MoviesCardComp, MoviesListComp } from '../types/MoviesMenuType'

// Styles
import '../styles/MoviesMenu.scss'

const MoviesCard: MoviesCardComp = ({ movie }) => {
  // Destructuring
  const { name, background_video, logo_img } = movie

  return (
    <div className="card">
      {/* Background video */}
      {/* <div className="card__background_video">
        <video></video>
      </div> */}
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

/* <div class="container">
<div class="box">
<video width="400">
  <source src="video (1).mp4" type="video/mp4">
  Your browser does not support HTML video.
</video>
</div>
</div>
</body>
</html>
<script type="javascript">
const clip = document.querySelectorAll('.clip');
for (Let i = 0; i < clip.1ength; i++) {
clip[i].addEventListener('mouseenter', function(e){
console.log('test');
clip[i].play();
})
for (Let i = 0; i < clip.1ength; i++) {
clip[i].addEventListener('mouseout', function(e){
clip[i].pause();
})
</script> */
