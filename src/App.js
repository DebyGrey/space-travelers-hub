import { useEffect } from 'react';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import Rockets from './pages/Rockets';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import RootLayout from './layouts/RootLayout';
import { fetchRockets } from './redux/rockets/rocketsSlice';
import { getMissions } from './redux/missions/missionsSlice';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Rockets />} />
      <Route path="missions" element={<Missions />} />
      <Route path="my-profile" element={<MyProfile />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>,
  ),
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
