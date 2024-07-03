import Image from "next/image"

interface Product{
    title:string,
    price:number,
    image:string
}

interface ProductCardProps{
    product:Product
}
const ProductCard = ({product}:ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all
    duration-300 hover:shadow-lg">
    <div className="relative h-48 w-full">
    <Image
    src={product.image}
    alt={product.title}
    layout="fill"
    objectFit="contain"
    />
    </div>
    <div className="p-4">
    <h2 className="text-sm font-semibold text-gray-800 mb-2 truncate">{product.title}</h2>
    <div className="flex items-center justify-between">
     <span className="text-lg font-bold text-indigo-600">{product.price}</span>
     <button className="bg-indigo-600 text-white text-xs px-2 py-1
     rounded-full hover:bg-indigo-700 transition-colors duration-300">Add to cart</button>
    </div>
    </div>
     
    </div>
  )
}

export default ProductCard
