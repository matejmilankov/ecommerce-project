import { HomePage } from './pages/HomePage';
import { Route, Routes } from 'react-router';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='checkout' element={<div>Checkout page</div>} />
    </Routes>
  );
}

export default App
