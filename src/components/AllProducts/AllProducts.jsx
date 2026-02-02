import CategoryPage from "../CategoryPage/CategoryPage";
import BgAllProduct from "../../assets/all-banner.jpg"


const AllProducts = () => {
  return (
    <div>   
      <CategoryPage title="AllProducts" BgImage={BgAllProduct} categories={['All']}/>
      </div>
  )
}

export default AllProducts;