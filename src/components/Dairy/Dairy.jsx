import CategoryPage from "../CategoryPage/CategoryPage";
import BgDairy from "../../assets/dairy-banner.webp"

const Dairy = () => {
  return (
    <div>
         <CategoryPage title="Dairy & Eggs" BgImage={BgDairy} categories={['Dairy']} />
    </div>
  )
}

export default Dairy;