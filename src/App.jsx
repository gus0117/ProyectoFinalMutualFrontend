import { Route, Routes } from 'react-router-dom';
import Navigation from './Routes/Navigation/Navigation';
// import Afiliados from './routes/Afiliados/Afiliados';
// import Home from './routes/Home/Home';
// import Comercios from './routes/Comercios/Comercios';
// import Pagos from './routes/Pagos/Pagos';
// import { Login } from './routes/Login/Login'
import { Ordenes } from './Routes/Ordenes/Ordenes'
import {Orden} from './components/Orden/Orden' 

function App() {
  return (
    <div>
    <Routes>
        {/* <Route path='login' element={<Login />} /> */}
        <Route path='/' element={<Navigation />}>
          {/* <Route path='inicio' element={<Home />} /> */}
          {/* <Route path='afiliados' element={<Afiliados />} /> */}
          {/* <Route path='comercios' element={<Comercios />} /> */}
          <Route path='ordenes' element={<Ordenes />} />
          <Route path='orden' element={<Orden />} />
          {/* <Route path='pagos' element={<Pagos />} /> */}
        </Route>
     </Routes>
    </div>
  )
}

export default App
