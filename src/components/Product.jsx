export default function Product({ id, image, title, price, description, addCart}) {
    return (
        <article className="bg-tile md:m-auto sm:p-4 md:h-240">
            <img className="w-auto" src={image} alt={title} />
            <div className="flex flex-col justify-between gap-4">
                <div className="flex flex-col justify-end gap-4">
                    <h3 className="md:text-3xl font-bold mt-4">{title}</h3>
                    <p className="">${price}</p>
                    <p>{description}</p>
                </div>
                <p className="text-right mr-4 mb-4">
                    <button onClick={() => addCart(id)} className="bg-button text-stone-950 p-2 rounded-xl cursor-pointer hover:text-green-600">Add to Cart</button>
                </p>
            </div>
        </article>
    )
}