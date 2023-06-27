import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './routes/Missions';
import MyProfile from './routes/MyProfile';
import Rockets from './routes/Rockets';
import PageNotFound from './routes/PageNotFound';
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
