// React
import React, { FC } from 'react'

// Components
import MoviesMenu from '../organisms/MoviesCategoriesMenu/MoviesCategoriesMenu'

const Main: FC = () => {
  return (
    <main>
      <section>
        <MoviesMenu />
      </section>
    </main>
  )
}

export default Main
