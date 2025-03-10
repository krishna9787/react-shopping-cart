import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Shop from './components/Shop'
import Product from './components/Product'
import { DUMMY_PRODUCTS } from './dummy-products'
import CartContextProvider, { CartContext } from './store/shopping-cart-context'

function App() {

  return (
    <CartContextProvider>
      <Header />
      <Shop />
    </CartContextProvider>
  )
}

export default App
