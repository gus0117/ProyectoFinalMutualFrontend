import { Route, Routes, redirect } from 'react-router-dom';
import Navigation from './routes/navigation/Navigation';
import Afiliados from './routes/Afiliados/Afiliados';
import Ordenes from './routes/Ordenes/Ordenes';
import Home from './routes/Home/Home';
import Comercios from './routes/Comercios/Comercios';
import { PagoComercio } from './Routes/Comercios/PagoComercio';
import Pagos from './routes/Pagos/Pagos';
import { Login } from './routes/Login/Login'
import NuevoComercio from './routes/Comercios/NuevoComercio';
import EditComercio from './routes/Comercios/EditComercio';
import { NuevaOrden } from './routes/Ordenes/NuevaOrden';
import ResumenAfiliado from './routes/Resumen/ResumenAfiliado';
import { NuevoAfiliado } from './routes/Afiliados/NuevoAfiliado';
import { ProtectedRoute } from './components/ProtectedRoute';
import { UserProvider } from './context/UserContext';
import { ComercioProvider } from './context/ComercioContext';
import { AffiliatesProvider } from './context/AffiliatesContext'

function App() {
  return (
    <UserProvider>
      <ComercioProvider>
        <AffiliatesProvider>
          <div>
            <Routes>
              <Route path='login' element={<Login />} />
              <Route path='/' element={<Navigation />}>
                <Route path='inicio' element={<Home />} />
                <Route path='afiliados' element={<ProtectedRoute Component={Afiliados} allowedRoles={'administrador'} />} />
                <Route path='afiliados/nuevoAfiliado' element={<NuevoAfiliado />} />
                <Route path='resumen' element={<ResumenAfiliado />} />
                <Route path='comercios' element={<ProtectedRoute Component={Comercios} allowedRoles={'administrador'} />} />
                <Route path='comercios/nuevoComercio' element={<NuevoComercio />} />
                <Route path='comercios/editarComercio/:id' element={<EditComercio />} />
                <Route path='comercios/pagoComercio' element={<PagoComercio />} />
                <Route path='ordenes' element={<Ordenes />} />
                <Route path='ordenes/nuevaOrden' element={<NuevaOrden />} />
                <Route path='pagos' element={<Pagos />} />
              </Route>
            </Routes>
          </div>
        </AffiliatesProvider>
      </ComercioProvider>
    </UserProvider>
  )
}

export default App
