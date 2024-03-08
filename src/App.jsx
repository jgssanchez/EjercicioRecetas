import Home from './components/Home'
import Footer from './components/Footer'
import NavegationMenu from './components/NavegationMenu'
import {HashRouter,Route,Routes } from 'react-router-dom'
import FormRecetas from './pages/FormRecetas'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Admin from './pages/Admin'
import Login from './pages/Login'
import DetalleReceta from './components/DetalleReceta'


function App() {

  return (
    <HashRouter>
    <NavegationMenu/>
      <main>
    <Routes>
    <Route exact path='/' element ={<Home/>}></Route>
    <Route exact path='/admin' element ={<Admin/>}></Route>
    <Route exact path='/admin/formRecetas' element ={<FormRecetas editar ={false} titulo='Recetas Nuevas'/>}></Route>
    <Route exact path='/admin/edit/:id' element ={<FormRecetas editar={true} titulo='Editar Receta'/>}></Route>
    <Route exact path='/login'element={ <Login/>}  />
    <Route exact path="/DetalleReceta/:id" element={<DetalleReceta/>} />
    
    </Routes>
      </main> 
    <Footer/>
    </HashRouter>
  )
}

export default App
