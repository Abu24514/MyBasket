import Button from "../Button/Button"
import FreshFruits from "../../assets/fresh-fruits.webp"

const Discount = () => {
  return (
   <section
            className="bg-zinc-100 bg-no-repeat bg-right bg-contain"
            style={{
                backgroundImage: `url(${FreshFruits})`,
            }}
        >
            <div className=" md:bg-transparent bg-gray-100 flex flex-col md:flex-row max-w-350 mx-auto px-4 md:px-10 py-8 md:py-20">

                {/* Left Big Text */}
                <span className=" text-6xl md:text-9xl text-green-500 font-bold transform md:-rotate-90 h-fit md:self-center">
                    20%
                </span>

                {/* Content */}
                <div className="max-w-175 mt-4">
                    <h3 className="text-4xl  md:text-7xl text-zinc-800 font-bold">
                        First Order Discount!
                    </h3>

                    <p className="text-zinc-600 my-6 max-w-xl">
                        Enjoy an exclusive first order discount on our grocery website!
                        Shop fresh products and save more on your very first purchase.
                    </p>

                    <Button content="Get a Discount" />
                </div>

            </div>
        </section>

  )
}

export default Discount;
