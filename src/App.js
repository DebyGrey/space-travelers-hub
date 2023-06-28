import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import Rockets from './pages/Rockets';
import PageNotFound from './pages/PageNotFound';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="categories" element={<Missions />} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  );
}

export default App;
