import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown, ButtonGroup } from "react-bootstrap"; 
import { FaTrash } from "react-icons/fa"; 
import './navbar.css';

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const { favorites, favoritesCount } = store;  // Acceder a los favoritos globalmente

    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">
                    <img
                      className="logoStarWars"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"
                      alt="Star Wars"
                    />
                </span>
            </Link>

            <div className="ml-auto d-flex align-items-center" style={{ marginRight: "2rem" }}>
                <Dropdown as={ButtonGroup}>
                    <button className="btn btn-primary">
                        <i className="fa fa-heart text-danger" /> Favorites [{favoritesCount}]
                    </button>

                    <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

                    <Dropdown.Menu align="end">
                        {favorites.length > 0 ? (
                            <>
                            {favorites.map((item) => (
                                <Dropdown.Item key={item.id} className="d-flex justify-content-between align-items-center">
                                <span>{item.name}</span>  {/* Ahora mostramos el name del favorito */}
                                <FaTrash
                                    onClick={() => actions.removeFavorite(item.id, item.category)}  // Usamos id y category
                                    style={{ cursor: "pointer", color: "red", marginLeft: "10px" }}
                                />
                                </Dropdown.Item>
                            ))}
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={() => actions.clearFavorites()} className="text-danger">
                                Clear Favorites
                            </Dropdown.Item>
                            </>
                        ) : (
                            <Dropdown.Item disabled>No favorites yet</Dropdown.Item>
                        )}
                    </Dropdown.Menu>

                </Dropdown>
            </div>
        </nav>
    );
};
