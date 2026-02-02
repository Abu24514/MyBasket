import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa';
import Basket from '../../assets/basket-full-vegetables.png'

const Values = () => {
    // left
    const leftValues = value.slice(0, 2).map((item) => {
        return (
            <div key={item.id} className='flex md:flex-row-reverse  items-center gap-5 mt-5 '>
                <div>
                    <span className='flex justify-center items-center text-2xl bg-linear-to-b from-green-400 to bg-green-500
                    rounded-full text-white h-10 w-10'>{item.icon}</span>
                </div>
                <div className='md:text-right'>
                    <h3 className='text-zinc-800 text-2xl font-semibold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })
    // right
    const rightValues = value.slice(2, 4).map((item) => {
        return (
            <div 
            key={item.id}  className='flex items-center gap-5 mt-5'>
                <div>
                    <span className='flex justify-center items-center text-2xl bg-linear-to-b from-green-400 to bg-green-500
                    rounded-full text-white h-10 w-10'>{item.icon}</span>
                </div>
                <div>
                    <h3 className='text-zinc-800 text-2xl font-semibold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })
    return (
        <section>
            <div className='max-w-350 mx-auto px-10 py-20 '>
                <Heading highlight="Our" heading="Value" />
                <div className='flex md:flex-row flex-col gap-6  mt-15'>

                    {/* left-render */}
                    <div className='min-h-full flex flex-col justify-between' >{leftValues}</div>

                    <div className='shrink-0 border-2 border-green-500 rounded-full w-72 h-72 p-1 md:flex justify-center hidden items-center'>
                        <div className='border-2 border-green-400 rounded-full w-64 h-64 flex justify-center items-center overflow-hidden'>
                            <div className='w-60 h-60 p-5'>
                                <img
                                    src={Basket}
                                    alt="Vegetable Basket"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* right-render */}
                    <div className='min-h-full flex flex-col justify-between'>{rightValues}</div>
                </div>
            </div>
        </section>
    )
}

export default Values;

const value = [
    {
        id: 1,
        title: 'Trust',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaHeart />

    },

    {
        id: 2,
        title: 'Always Fresh',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaLeaf />

    },
    {
        id: 3,
        title: 'Food Safety',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaShieldAlt />

    },
    {
        id: 4,
        title: '100% Organic',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaSeedling />

    },
]