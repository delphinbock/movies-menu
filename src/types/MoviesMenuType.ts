// Movies data object
interface MoviesCategoriesDataObjProps {
  id: number;
  name: string;
  background_video: string;
  logo_img: string;
}

type MoviesCategoriesCardComp = React.FC<{ moviesCategoryDataObj: MoviesCategoriesDataObjProps }>;

// Movies data list
interface MoviesCategoriesListProps {
  moviesCategoriesDataObjArr: MoviesCategoriesDataObjProps[];
}

type MoviesCategoriesListComp = React.FC<MoviesCategoriesListProps>;

export type {
  MoviesCategoriesDataObjProps,
  MoviesCategoriesCardComp,
  MoviesCategoriesListComp
}