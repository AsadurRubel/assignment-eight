import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import BookDetails from './Components/BookDetails/BookDetails';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/listOfBooks.json')
      },
      {
        path: "/PageToRead",
        element: <PagesToRead></PagesToRead>,
        loader: ()=> fetch('/listOfBooks.json')
      },
      {
        path: "/book-details/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/listOfBooks.json')
        
      },
      {
        path:"/about",
        element: <About></About>,
      },
      {
        path:"/contact",
        element: <Contact></Contact>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
