import { Route, Routes } from 'react-router';
import NavigationBar from './NavigationBar';
import MainPage from './MainPage/MainPage';

function App() {
  return (
    <div>
      <header className="sticky top-0 z-40 bg-ink/80 backdrop-blur border-b border-edge">
        <NavigationBar />
      </header>
      <Routes>
        <Route index element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
