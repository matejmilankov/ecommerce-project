import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/OrdersPages';
import { TrackingPage } from './pages/TrackingPage';
import { Route, Routes } from 'react-router';
import { NotFoundPage } from './pages/NotFoundPage';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='checkout' element={<CheckoutPage/>} />
      <Route path='orders' element={<OrdersPage/>} />
      <Route path='tracking' element={<TrackingPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default App
