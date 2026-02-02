import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from "react-icons/tb";
import Heading from "../Heading/Heading";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";
const Process = () => {

  const renderStep = steps.map(step=>{
    return(
      <div  key={step.id}
      className= "border-dotted  border-5 rounded-full w-72 h-72 flex justify-center items-center p-2"
       style={{borderColor:step.bgColor}}>
                <div className=" border-3 rounded-full py-10 w-64 px-18  h-64 flex flex-col items-center "
                 style={{borderColor:step.bgColor}}>
                {/* number */}
                <span className=" flex justify-center items-center rounded-full w-12 h-12 text-5xl bg-zinc-800 outline-[3px] outline-offset-5 text-white  outline-dashed  "
                 style={{outlineColor:step.bgColor}}>{step.number}</span>
                {/* text */}
                   <div className="flex flex-col mt-4 ">
                    {/* icon and text */}
                       <div className="flex gap-3 items-center justify-center">
                         <span className="bg-green-400 rounded-full p-2 text-white hover:bg-red-400  transition-colors duration-75 cursor-pointer"> {step.icon}</span>
                        <h3 className="text-2xl font-semibold">{step.title}</h3>
                       </div>
                         <p className=" text-center mt-2 text-gray-700 text-[12px]">{step.para}</p>
                    </div>
            </div>
        </div>
    )
  })
  return (
    <section>
      <div className="max-w-350 mx-auto px-10 py-20">
        <div className="w-fit mr-auto">
          <Heading highlight=" Our" heading="Process" />
        </div>
        {/* reder the data  */}
        <div className="flex px-4 py-5  items-center
        rounded-3xl mt-20 md:justify-evenly flex-col md:flex-row gap-y-8 ">
          {renderStep}
        </div>

      </div>
    </section>
  )
}

export default Process;


const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: 'Sourcing',
    para: 'We partner with local organic farms to bring the freshest seasonal produce.',
    icon: <PiPlant />,
    bgColor: '#00C950'
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: 'Manufacturing',
    para: 'Our products are processed in modern facilities following the strictest food safety protocols.',
    icon: <PiFactory />,
    bgColor: '#FC6743'
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: 'Quality',
    para: 'Every item undergoes a rigorous quality check to ensure maximum freshness for you.',
    icon: <SlBadge />,
    bgColor: '#F9B207'
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: 'Logistics',
    para: 'Our dedicated delivery network ensures your groceries arrive at your door on time.',
    icon: <BsTruck />,
    bgColor: '#8D0E66'
  },
]