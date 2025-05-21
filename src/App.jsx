import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/login';
import HomePage from './pages/home/homePage';
import AdminPage from './pages/admin/adminPage';



function App() {
  return (
    <BrowserRouter>

      <Routes path="/*">


        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<HomePage />} />
        <Route path="/admin/*" element={<AdminPage />} />


      </Routes>
    </BrowserRouter>

  );
}

export default App;