
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './views/products/Products'

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='/products' element={<Products />} ></Route>
      </Routes>
    </div>
  )
}

export default App
