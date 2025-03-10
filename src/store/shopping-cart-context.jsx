import { createContext, useState, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = createContext ({
    items: [],
    addItemToCart: () => {},
    updateCart: () => {},
})

function shoppingCartReducerFunc(state, action) {
    if (action.type === 'ADD_ITEM') {
        const cartItems = [...state.items]
            const itemFound = cartItems.findIndex(item => item.id === action.payload)
            const selectedCartItem = cartItems[itemFound]
            if (selectedCartItem) {
            const updatedItem = {
                ...selectedCartItem,
                quantity: selectedCartItem.quantity + 1,
            }
            cartItems[itemFound] = updatedItem
            } else {
            const product = DUMMY_PRODUCTS.find(product => product.id === action.payload)
            cartItems.push({
            ...product,
            quantity: 1,
            })
        }
        return {
            items: cartItems,
        }
    } 
    if(action.type === 'UPDATE_ITEM') {
        const itemList = [...state.items]
        const selectedItemIndex = itemList.findIndex(item => item.id === action.payload.id)
        const selectedItem = itemList[selectedItemIndex]
        const quantityValue = action.payload.symbol === '-' ? selectedItem.quantity - 1 : selectedItem.quantity + 1
        if (quantityValue === 0) {
        return {
            items : itemList.filter(item => item.id !== action.payload.id)
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
    }
    return state;
}

export default function CartContextProvider({children}) {
    const [shoppingCart, shoppingCartDispatch] = useReducer(shoppingCartReducerFunc, {
        items: [],
    })
    // const [shoppingCart, setShoppingCart] = useState({
    //     items: [],
    //   })
    
    function handleAddCart(id) {
        shoppingCartDispatch({
            type: 'ADD_ITEM',
            payload: id,
        })
    }
    
    function handleUpdateQuantity({id,symbol}) {
        shoppingCartDispatch({
            type: "UPDATE_ITEM",
            payload: {
                id,
                symbol
            }
        })
    }
    const ctxtValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddCart,
    updateCart: handleUpdateQuantity
    }

    return <CartContext.Provider value={ctxtValue}>
        {children}
    </CartContext.Provider>

}