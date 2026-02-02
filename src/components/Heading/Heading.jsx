
const Heading = (props) => {
    return (
        <div className=" w-fit mx-auto ">
            <h2 className="md:text-5xl text-[2.5rem] font-bold">
                <span className="text-green-500">{props.highlight}</span> {props.heading}
            </h2>
            <div className="md:w-34 w-25 h-1 bg-green-400 ml-auto md:mt-3 mt-1"></div>
        </div>
    )
}

export default Heading;