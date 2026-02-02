import Banner from "../Banner/Banner";
import ProductList from '../ProductList/ProductList';
import Cards from "../Cards/Cards";

const CategoryPage = ({title ,BgImage , categories=[] }) => {
    let filteredItems = categories.includes('All')? ProductList : ProductList.filter(item=>categories.includes(item.category))
    const renderProduct = filteredItems.map(p => {
        return (
            <Cards image={p.image} name={p.name} price={p.price} bgColor={p.color} peroff={p.perOff} />
        )
    })
    return (
        <div>
            <Banner title={title} BgImage={BgImage}/>
         <div className="px-10 ">
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-9 mt-10 md:mt-14 py-10">
                {renderProduct}
            </div>
         </div>
        </div>
    )
}

export default CategoryPage