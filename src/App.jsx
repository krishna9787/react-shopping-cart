import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Shop from './components/Shop'
import Product from './components/Product'
import { DUMMY_PRODUCTS } from './dummy-products'

function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  })

  function handleAddCart(id) {
    setShoppingCart(prevValue => {
      const cartItems = [...prevValue.items]
      const itemFound = cartItems.findIndex(item => item.id === id)
      const selectedCartItem = cartItems[itemFound]
      if (selectedCartItem) {
        const updatedItem = {
          ...selectedCartItem,
          quantity: selectedCartItem.quantity + 1,
        }
        cartItems[itemFound] = updatedItem
      } else {
        const product = DUMMY_PRODUCTS.find(product => product.id === id)
      cartItems.push({
        ...product,
        quantity: 1,
      })
    }
    return {
      items: cartItems,
    }
    })
  }

  function handleUpdateQuantity({id,symbol}) {
    setShoppingCart(prevValue => {
      const itemList = [...prevValue.items]
      const selectedItemIndex = itemList.findIndex(item => item.id === id)
      const selectedItem = itemList[selectedItemIndex]
      const quantityValue = symbol === '-' ? selectedItem.quantity - 1 : selectedItem.quantity + 1
      if (quantityValue === 0) {
        return {
          items : itemList.filter(item => item.id !== id)
        }
      } else {
        const updateItem= {
          ...selectedItem,
          quantity: quantityValue
        }
        itemList[selectedItemIndex] = updateItem
        return {
          items : itemList,
        }
      }
    })
  }

  return (
    <>
      <Header items={shoppingCart.items} updateCart={handleUpdateQuantity}/>
      <Shop addCart={handleAddCart}/>
    </>
  )
}

export default App
