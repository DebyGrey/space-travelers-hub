import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import Rockets from './pages/Rockets';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import RootLayout from './layouts/RootLayout';

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

const App = () => <RouterProvider router={router} />;

export default App;
