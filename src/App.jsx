import { Route, Routes, redirect } from 'react-router-dom';
import Navigation from './routes/navigation/Navigation';
import Afiliados from './routes/Afiliados/Afiliados';
import Ordenes from './routes/Ordenes/Ordenes';
import Home from './routes/Home/Home';
import Comercios from './routes/Comercios/Comercios';
import Pagos from './routes/Pagos/Pagos';
import { Login } from './routes/Login/Login'
import NuevoComercio from './routes/Comercios/NuevoComercio';
import EditComercio from './routes/Comercios/EditComercio';
import { NuevaOrden } from './routes/Ordenes/NuevaOrden';


function App() {
  return (
    <div>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/' element={<Navigation />}>
          <Route path='inicio' element={<Home />} />
          <Route path='afiliados' element={<Afiliados />} />
          <Route path='comercios' element={<Comercios />} />
          <Route path='comercios/nuevoComercio' element={<NuevoComercio />} />
          <Route path='comercios/editarComercio/:id' element={<EditComercio />} />
          <Route path='ordenes' element={<Ordenes />} />
          <Route path='ordenes/nuevaOrden' element={<NuevaOrden />} />
          <Route path='pagos' element={<Pagos />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
