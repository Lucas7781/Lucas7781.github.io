import { Route, Routes } from 'react-router';
import './App.css';
import NavigationBar from './NavigationBar';
import MainPage from './MainPage/MainPage';

function App() {
  return (
    <div className='overscroll-none'>
      <header className="fixed w-screen">
        <NavigationBar />
      </header>
      <Routes>
        <Route index element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
