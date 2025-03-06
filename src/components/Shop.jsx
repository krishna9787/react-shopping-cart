import { DUMMY_PRODUCTS } from "../dummy-products"
import Product from "./Product"

export default function Shop({addCart}) {
    return (
        <ul className='sm:mt-80 md:mt-30 md:grid md:grid-cols-2 gap-8 mb-20 mx-4 sm:mx-auto sm:flex sm:flex-col sm:gap-4 sm:w-fit'>
        {DUMMY_PRODUCTS.map((product) => (<li className="py-4" key={product.id}>{<Product {...product} addCart={addCart}/>}</li>))}
        </ul>
    )
}