import { useEffect } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import '../src/assets/css/style.css'
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/scss/bootstrap.scss'

import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="blog" element={<BlogPage />} />
      
    </Route>
  )
);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
