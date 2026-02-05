import CategoryPage from "../CategoryPage/CategoryPage"
import BgSeaFood from "../../assets/seafood-banner.webp"
const SeaFood = () => {
  return (
    <div>
       <CategoryPage title="Meat & SeaFood" BgImage={BgSeaFood} categories={['SeaFood' ,'Meat']}/>
    </div>
  )
}

export default SeaFood