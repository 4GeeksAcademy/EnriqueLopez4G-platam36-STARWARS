import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Corazón con y sin relleno

// Componente del botón de "favorito"
const FavoriteButton = ({ characterId, toggleFavorite, category }) => {  // Agregar 'category' como prop
    const [isHovered, setIsHovered] = React.useState(false);

    const handleClick = () => {
        toggleFavorite(characterId, category);  // Pasar la categoría al llamar la acción
    };

    return (
        <button
            type="button"
            className="btn btn-outline-primary favoriteBtn"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}  // Llama a la acción al hacer clic
        >
            {isHovered ? (
                <FaHeart style={{ color: "red" }} />
            ) : (
                <FaRegHeart style={{ color: "yellow" }} />
            )}
        </button>
    );
};

export default FavoriteButton;
