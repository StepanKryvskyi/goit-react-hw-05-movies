import { Layout } from './Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { LoadingMessage } from '../Pages/HomePage/HomePage.styled';

import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('Pages/MovieDetailsPage/MovieDetailsPage')
);
const MoviesPage = lazy(() => import('Pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('Pages/NotFoundPage'));

export const App = () => {
  return (
    <Suspense fallback={<LoadingMessage>LOADING PAGE...</LoadingMessage>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
