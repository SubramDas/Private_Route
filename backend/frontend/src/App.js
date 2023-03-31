import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>

      <Header/>

    <Routes>
        <Route element={<PrivateRoute> <HomePage/> </PrivateRoute>} path='/' />
        <Route element={<LoginPage/>} path='/login' />
    </Routes>
      </AuthProvider>

    </>
  );
}

export default App;
