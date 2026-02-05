import Heading from "../Heading/Heading";
import DairyAndEggs from "../../assets/dairy-and-eggs.webp";
import SeaFoodCat from "../../assets/meat-and-seafood.webp";
import { Link } from "react-router-dom";
const Category = () => {
    const rendercard = category.map(card => {
        return (
            //card
            <div key={card.id} className="p-2">
                {/* image */}
                <div
                    className="w-full relative min-h-[30vh] -mb-20" >
                    <div className=" w-72 h-44 object-cover">
                        <img className=" absolute bottom-0 w-full h-full "
                            src={card.image} alt="" />
                    </div>
                </div>
                {/* card-content  */}
                <div className="bg-green-100 pt-22 rounded-xl hover:bg-red-100 cursor-pointer p-10 min-h-[25vh]" >
                    <h3 className="text-zinc-800 text-3xl font-semibold">{card.title}</h3>
                    <p className="text-zinc-600 mt-2 mb-4">{card.description}</p>
                    <Link to={card.path} className="bg-linear-to-b from-green-200 to bg-green-500 text-white px-6 py-3 rounded-lg text-lg active:scale-94 cursor-pointer hover:to-red-600 hover:from-red-200 transition-all duration-75" >See All</Link>
                </div>

            </div>
        )
    })
    return (
        <section>
            <div className=" max-w-350 mx-auto ">
                <Heading highlight=" Shop" heading="by Category" />

                {/* category-card */}
                <div className="flex md:justify-evenly md:flex-row flex-col md:mt-15 mt-8 gap-x-4 px-5 ">{rendercard}</div>
            </div>


        </section>
    )
}
export default Category;

const category = [
    {
        id: 1,
        title: 'fruits & Veggies',
        description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
        image: ("https://www.freepnglogos.com/uploads/vegetables-png/vegetables-png-pictures-vegetables-pictures-8.png"),
        path: '/fruits'
    },
    {
        id: 2,
        title: 'Dairy & Eggs',
        description: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
        image: DairyAndEggs,
        path: '/dairy'
    },
    {
        id: 3,
        title: 'Meats & SeeFood',
        description: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more. ',
        image: SeaFoodCat,
        path: '/seafood'
    },

]