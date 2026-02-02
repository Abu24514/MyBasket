import { FaHeart, FaPlus } from "react-icons/fa"
import { useState } from "react"

const Cards = ({ image, name, price, bgColor, peroff, id }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
        
        // LocalStorage mein save karo (optional)
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (!isFavorite) {
            favorites.push(id);
        } else {
            const index = favorites.indexOf(id);
            if (index > -1) favorites.splice(index, 1);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    return (
        <div className="flex flex-col rounded-2xl bg-zinc-100 px-3 py-3">
            {/* Top Section */}
            <div className={"flex flex-col rounded-2xl px-4 py-2"}
                style={{ backgroundColor: bgColor }}>

                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm bg-white font-medium px-3 py-1 rounded-full">
                        {peroff.toFixed(1)} % off
                    </span>
                    <button 
                        onClick={handleFavoriteClick}
                        className={`text-lg cursor-pointer bg-white rounded-full p-2 transition-all active:scale-90 ${
                            isFavorite ? 'text-red-500' : 'text-zinc-400'
                        }`}
                    >
                        <FaHeart className={isFavorite ? 'fill-current' : ''} />
                    </button>
                </div>
                {/* image */}
                <img
                    className="w-full h-48 object-contain"
                    src={image}
                    alt={name}
                />
            </div>

            {/* Content */}
            <div className="mt-3">
                <h3 className="text-lg font-semibold text-center">
                    {name}
                </h3>

                <div className="flex items-center justify-between px-4 mt-3">
                    <p className="text-lg font-semibold">
                        ${price.toFixed(2)}
                    </p>

                    <button className="border border-gray-800 rounded-full p-2 active:scale-95 cursor-pointer hover:bg-gray-800 hover:text-white transition-colors">
                        <FaPlus className="text-sm" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cards;