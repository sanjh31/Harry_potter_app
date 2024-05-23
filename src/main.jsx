import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './Pages/Home.jsx';
import Movies from './Pages/Movies.jsx';
import Potions from './Pages/Potions.jsx'
import Characters from './Pages/Characters.jsx';
import Books from './Pages/Books.jsx';
import MoviesIdPage from './Pages/MoviesIdPage.jsx';
import PotionIdPage from './Pages/PotionIdPage.jsx'
import BooksIdPage from "./Pages/BooksIdPage.jsx" ;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />

      <Route path='movies' element={<Movies />} />
      <Route path='movies/:moviesId' element={<MoviesIdPage />} />
      <Route path='character' element={<Characters />} />
      <Route path='potions' element={<Potions />} />
      <Route path='potions/:potionId' element={<PotionIdPage />} />
      <Route path='books' element={<Books />} />
      <Route path='books/:booksId' element={<BooksIdPage/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
