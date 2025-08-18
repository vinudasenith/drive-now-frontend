import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/login';
import HomePage from './pages/home/homePage';
import AdminPage from './pages/admin/adminPage';
import { Toaster } from 'react-hot-toast';
import RegisterPage from './pages/register/register';
import AdminRoute from './utils/adminRoute';



function App() {
  return (
    <BrowserRouter>
      <Toaster position='top-right' />

      <Routes path="/*">
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/admin/*"
          element={
            <AdminRoute>
              <AdminPage />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;