import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/login';
import HomePage from './pages/home/homePage';
import AdminPage from './pages/admin/adminPage';
import { Toaster } from 'react-hot-toast';
import RegisterPage from './pages/register/register';



function App() {
  return (
    <BrowserRouter>
      <Toaster position='top-right' />

      <Routes path="/*">


        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<HomePage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/register" element={<RegisterPage />} />



      </Routes>
    </BrowserRouter>

  );
}

export default App;