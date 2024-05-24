// Movies data object
interface MoviesDataObjProps {
  id: number;
  name: string;
  background_video: string;
  logo_img: string;
}

type MoviesCardComp = React.FC<{ movie: MoviesDataObjProps }>;

// Movies data list
interface MoviesListProps {
  moviesDataObjArr: MoviesDataObjProps[];
}

type MoviesListComp = React.FC<MoviesListProps>;

export type {
  MoviesDataObjProps,
  MoviesCardComp,
  MoviesListComp
}