import {useRef} from "react"
import logo from "../assets/logo.png"
import Modal from "./Modal"
export default function Header({ items, updateCart={handleUpdateQuantity} }) {
    const dialog = useRef()

    function openModal() {
        dialog.current.open()
    }
    return (
        <header className="w-full md:h-40">
            <Modal ref={dialog} items={items} updateCart={updateCart}/>
            <div className="md:w-full md:h-full sm:w-fit sm:h-fit sm:flex md:flex-row sm:flex-col md:gap-16 align-middle justify-evenly m-8">
                <img className="w-30" src={logo} alt="logo" />
                <h1 className="md:mt-10 md:text-5xl sm:text-2xl align-middle font-bold uppercase text-main">Elegant Context</h1>
                <button onClick={openModal} className="bg-button text-stone-950 p-2 rounded-xl cursor-pointer hover:text-green-600 align-middle h-10 font-bold mt-10">Cart ({items.length})</button>
            </div>
            <div className="w-full md:text-center sm:pl-8 md:pl-30">
                <h2 className="md:text-2xl text-side uppercase font-bold">&nbsp;Elegant Clothing for Everyone</h2>
            </div>

        </header>
    )
}