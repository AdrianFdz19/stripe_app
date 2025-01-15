
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './views/products/Products'
import LayerWithHeader from './components/LayerWithHeader'
import ShoppingCart from './views/shopping/ShoppingCart'

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<LayerWithHeader />} >
          <Route index element={<Products />} ></Route>
          <Route path='/products' element={<Products />} ></Route>
          <Route path='/shopping-cart' element={<ShoppingCart />} ></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
