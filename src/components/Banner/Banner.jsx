
const Banner = ({title ,BgImage}) => {
  return (
    <div className=" h-[50vh] mt-20 flex justify-center items-center bg-center bg-cover relative"
    style={{backgroundImage: `url(${BgImage})`}}>
        <h2 className='text-2xl text-zinc-800 bg-white p-5 rounded-xl font-bold z-10 hover:bg-green-500 hover:text-white transition-colors duration-75 cursor-pointer'>
           {title}
        </h2>
        <div className="bg-black/60 absolute inset-0"></div>
    </div>
  )
}

export default Banner;