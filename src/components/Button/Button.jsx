
const Button = (props) => {
  return (
   <button className="bg-linear-to-b from-green-200 to bg-green-500 text-white px-6 py-3 rounded-lg text-lg active:scale-94 cursor-pointer hover:to-green-600 transition-all duration-75">{props.content}</button>
  )
}

export default Button