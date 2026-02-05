import Grocery from '../../assets/grocery.webp'
import Button from '../Button/Button';
const Hero = () => {
    return (
        <section>
            <div className='md:pt-12 lg:pt-15 pt-33 min-h-screen max-w-350 mx-auto px-10 flex md:flex-row flex-col justify-between items-center gap-4'>
                {/* Hero-content */}
                <div className='md:w-2/3 flex-1 '>
                    <span className='bg-green-100 text-green-500 rounded-full md:text-lg px-5 py-2 mb-7'>
                        Export Best Quality Products...
                    </span>
                    <h1 className='md:text-6xl/19 text-5xl/14 font-bold mt-3'>Tasty Organic <span className='text-green-500'>Fruits</span> & <span className='text-green-500'>Veggies</span><br /> In Your City</h1>
                    <p className='text-zinc-500 md:text-lg text-md md:max-w-132.5 
                    max-w-96 mt-4 mb-8'>Bred for high content of beneficial substances. Our product are all fresh and healthy.</p>
                    <Button content = "Shop Now"/>
                </div>
                {/* hero-imgae */}
                <div className='md:w-1/3 flex-1 '>
                    <img src={Grocery} className='w-full h-full'/>
                </div>
            </div>
        </section>
    )
}

export default Hero;