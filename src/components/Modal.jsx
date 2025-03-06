import { useRef, forwardRef, useImperativeHandle } from "react"
import { createPortal } from "react-dom"

const Modal = forwardRef(function Modal({ items, updateCart }, ref) {
    const dialogRef = useRef()
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.showModal()
            }
        }
    })
    let sumArr = 0
    sumArr = items.map(item => sumArr +=(item.quantity * item.price))
    const sum = sumArr.reduce((a,b) => a+b, 0)
    return createPortal(
        <dialog className="backdrop:bg-stone-900/90 rounded-md shadow-md m-auto bg-stone-500"ref={dialogRef}>
            <h2 className="uppercase m-4 text-2xl text-side font-bold">Your Cart</h2>
            <ul className="w-full">
                {items.map((item) => 
                    (<li className="bg-button items-center justify-items-end grid grid-cols-5 my-4 mx-2 rounded-md px-4" key={item.id}>
                        <p className="md:text-2xl sm:text-xl">{item.title}</p>
                        <p className="md:text-2xl sm:text-xl">${item.price}</p>
                        <div className="flex gap-30 flex-row justify-center">
                            <p className="md:text-2xl sm:text-xl hover:text-red-700 cursor-pointer"><button onClick={() => updateCart({id:item.id, symbol:'-'})} className="cursor-pointer">-</button></p>
                            <p className="md:text-2xl sm:text-xl hover:text-emerald-700"><button onClick={() => updateCart({id:item.id, symbol:'+'})} className="cursor-pointer">+</button></p>
                        </div>
                        <p className="md:text-2xl sm:text-xl">{item.quantity}</p>
                        <p className="md:text-2xl sm:text-xl font-bold">${Math.round((item.quantity * item.price)*100)/100}</p>
                    </li>
                )
                )}
            </ul>
            {items.length !== 0 ? <div className="px-4 flex flex-row justify-between"><p className="font-bold text-2xl py-4">Cart Total: </p><p className="py-4 font-bold text-2xl">${Math.round(sum * 100)/100}</p></div> : <div className="text-2xl font-bold text-side m-4">No Items in Cart</div>}
            <form className="text-right mr-4 mb-4" method="dialog">
                <button className="bg-button text-stone-950 p-2 rounded-xl cursor-pointer hover:text-green-600 align-middle h-10 font-bold mt-10">Checkout</button>
            </form>
        </dialog>,
        document.getElementById("modal")
    )
}
)

export default Modal;