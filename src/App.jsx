import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/login';


function App() {
  return (
    <BrowserRouter>

      <Routes path="/*">


        <Route path="/login" element={<LoginPage />} />


      </Routes>
    </BrowserRouter>

  );
}

export default App;