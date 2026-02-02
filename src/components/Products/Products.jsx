import { useState } from "react";
import Heading from "../Heading/Heading";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";
import ProductList from '../ProductList/ProductList'
const Products = () => {
    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood'];
    const [activeTab, setActiveTab] = useState('All')
    let filteredItems = activeTab === 'All' ? ProductList : ProductList.filter(item => item.category === activeTab)
    const renderCards = filteredItems.slice(0, 8).map(product => {
        return (
            <Cards key={product.id} image={product.image} name={product.name} price={product.price} bgColor={product.color} peroff={product.perOff} />
        )
    })
    return (
        <section>
            <div className="max-w-350 mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-20">

                <Heading highlight="Our" heading="Products" />

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 justify-center mt-8 md:mt-10">
                    {categories.map(category => {
                        return (
                            <button
                                key={category}
                                onClick={() => setActiveTab(category)}
                                className={`text-sm md:text-lg px-3 md:px-5 py-1.5 md:py-2 rounded-xl cursor-pointer ${activeTab === category
                                    ? 'bg-linear-to-b from-green-400 to-green-500 text-white'
                                    : 'bg-zinc-200'
                                    }`}
                            >
                                {category}
                            </button>
                        )
                    })}
                </div>

                {/* product listing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-9 mt-10 md:mt-14">
                    {renderCards}
                </div>
                {/* view all btn */}
                <div className="mt-10 mx-auto w-fit">
                    {/* <Button content="View All" /> */}
                    <Link  to ='/allproducts' className="bg-linear-to-b from-green-200 to bg-green-500 text-white px-6 py-3 rounded-lg text-lg active:scale-94 cursor-pointer hover:to-green-600 transition-all duration-75">View All</Link>
                </div>

            </div>

        </section>
    )
}

export default Products;