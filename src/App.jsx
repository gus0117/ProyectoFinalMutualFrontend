import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/Navigation';
import Afiliados from './routes/Afiliados/Afiliados';
import Ordenes from './routes/Ordenes/Ordenes';
import Home from './routes/Home/Home';
import Comercios from './routes/Comercios/Comercios';
import Pagos from './routes/Pagos/Pagos';
import { Login } from './routes/Login/Login'
import { useEffect, useState } from 'react';


function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(()=>{
    let user = JSON.parse(sessionStorage.getItem("user"))
    if(user){
      setIsLogin(true);
    }
    else{
      setIsLogin(false);
    }
  },[isLogin])

  return (
    <div>
      {
        !isLogin ?
        <Login /> :
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='afiliados' element={<Afiliados />} />
            <Route path='comercios' element={<Comercios />} />
            <Route path='ordenes' element={<Ordenes />} />
            <Route path='pagos' element={<Pagos />} />
          </Route>
        </Routes>
      }
      
    </div>
  )
}

export default App
