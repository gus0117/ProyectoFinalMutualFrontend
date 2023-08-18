import { Route, Routes, redirect } from 'react-router-dom';
import Navigation from './routes/navigation/Navigation';
import Afiliados from './routes/Afiliados/Afiliados';
import Ordenes from './routes/Ordenes/Ordenes';
import Home from './routes/Home/Home';
import Comercios from './routes/Comercios/Comercios';
import Pagos from './routes/Pagos/Pagos';
import { Login } from './routes/Login/Login'


function App() {
  return (
    <div>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/' element={<Navigation />}>
          <Route path='inicio' element={<Home />} />
          <Route path='afiliados' element={<Afiliados />} />
          <Route path='comercios' element={<Comercios />} />
          <Route path='ordenes' element={<Ordenes />} />
          <Route path='pagos' element={<Pagos />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
