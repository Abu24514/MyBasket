import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Heading from "../Heading/Heading";
import Customer1 from "../../assets/customer1.jpg"
import Customer2 from "../../assets/customer2.jpg"
import Customer3 from "../../assets/customer3.jpg"
import Customer4 from "../../assets/customer4.jpg"
import Customer5 from "../../assets/customer5.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from "react-icons/fa";


const Testimonials = () => {

  return (
    <section>
      <div className="max-w-350 mx-auto py-10 sm:py-16 md:py-20">
        <Heading highlight="Customer" heading="Review" />
       <div className="px-4 sm:px-6 md:px-10">
         <div className="flex justify-end mr-4 gap-4 mb-5 mt-8">
          <button className=" custom-prev text-2xl rounded-lg w-11 h-11  flex items-center justify-center text-zinc-800 bg-zinc-200 hover:scale-94 hover:bg-linear-to-b hover:from-green-400 hover:to-green-500 hover:text-white active:scale-90  cursor-pointer">
            <IoIosArrowBack />
          </button>
          <button className="custom-next  text-2xl rounded-lg w-11 h-11  flex items-center justify-center text-zinc-800 bg-zinc-200 hover:scale-94 hover:bg-linear-to-b hover:from-green-400 hover:to-green-500 hover:text-white active:scale-90  cursor-pointer ">
            <IoIosArrowForward />
          </button>
        </div>
        {/* review-card */}

        <Swiper navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev"
        }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]} className="mySwiper">
          {
            reviews.map(item => {
              return (
                <SwiperSlide 
                key={item.id}
                className="bg-zinc-100 p-5 sm:p-6 md:p-8 rounded-xl">
                  <div 
                 
                  className="flex gap-3 sm:gap-4 items-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full outline-2 outline-green-500 outline-offset-4 overflow-hidden">
                       <img src={item.image} alt={item.name} className="w-full h-full  object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <h5 className="text-lg sm:text-xl font-semibold ">{item.name}</h5>
                      <p className="text-xs sm:text-sm text-gray-500">{item.profession}</p>
                      <span className="flex text-yellow-400  mt-3 text-lg sm:text-xl gap-1">
                        {
                          Array.from({ length: item.rating }, (_, index) => (
                            <FaStar key={index} />
                          ))
                        }
                      </span>
                    </div>
                  </div>
                  <div className="mt-8 sm:mt-10 min-h-[8vh]">
                    <p className="text-xs sm:text-sm text-gray-500 ">{item.para}</p>
                  </div>

                </SwiperSlide >
              )
            })
          }

        </Swiper>
       </div>



      </div>
    </section>
  )
}

export default Testimonials;

const reviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    profession: 'Food Blogger',
    rating: 5,
    para: 'MyBasket is my top choice for organic produce. Delivery is always fast.',
    image: Customer1
  },
  {
    id: 2,
    name: 'David Smith',
    profession: 'Professional Chef',
    rating: 3,
    para: 'As a chef, I demand high quality. This store consistently delivers excellence.',
    image: Customer2
  },
  {
    id: 3,
    name: 'Alya Zahra',
    profession: 'Fashion Model',
    rating: 4,
    para: 'Online shopping saves me hours. I trust them for my family groceries.',
    image: Customer3
  },
  {
    id: 4,
    name: 'Carlos Mendes',
    profession: 'Fitness Coach',
    rating: 5,
    para: 'Their selection of healthy foods is perfect for my fitness-focused lifestyle.',
    image: Customer4
  },
  {
    id: 5,
    name: 'Natcha Phongchai',
    profession: 'Nutritionist',
    rating: 2,
    para: 'High quality groceries at great prices. The organic section is truly impressive.',
    image: Customer5
  },
];