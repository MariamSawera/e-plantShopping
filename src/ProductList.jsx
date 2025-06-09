import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';  // Make sure this path is correct
import './ProductList.css';
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);

    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false);

    const plantsArray = [
        {
            category: "Indoor Plants",
            plants: [
                {
                    name: "Snake Plant",
                    description: "A hardy plant with sword-like leaves that can thrive in low light.",
                    cost: "$15",
                    image: "https://media.istockphoto.com/id/1439949379/photo/plant-indoor-in-front-of-window-taking-light.jpg?s=1024x1024&w=is&k=20&c=mKADhK3Dn1R63bMyvHU14WnHbyiDBndSXkW8-Kixkho=",
                },
                {
                    name: "Spider Plant",
                    description: "A popular hanging plant with long, arching leaves.",
                    cost: "$12",
                    image: "https://cdn.pixabay.com/photo/2024/08/12/06/30/spider-flower-8962901_1280.jpg",
                },
                {
                    name: "Peace Lily",
                    description: "Known for its elegant white flowers and air-purifying qualities.",
                    cost: "$18",
                    image: "https://cdn.pixabay.com/photo/2018/06/22/22/42/david-lily-3491819_640.jpg",
                },
            ],
        },
        {
            category: "Outdoor Plants",
            plants: [
                {
                    name: "Rose",
                    description: "Classic flowering shrub known for its beautiful, fragrant blooms.",
                    cost: "$20",
                    image: "https://cdn.pixabay.com/photo/2017/06/18/21/37/rose-2417334_640.jpg",
                },
                {
                    name: "Lavender",
                    description: "A fragrant herb with purple flowers, popular for gardens and aromatherapy.",
                    cost: "$10",
                    image: "https://cdn.pixabay.com/photo/2021/07/02/19/09/lavenders-6382337_640.jpg",
                },
                {
                    name: "Sunflower",
                    description: "Tall plants known for their large, bright yellow flowers.",
                    cost: "$8",
                    image: "https://cdn.pixabay.com/photo/2018/07/22/18/48/sunflower-3555239_640.jpg",
                },
            ],
        },
        {
            category: "Succulents",
            plants: [
                {
                    name: "Aloe Vera",
                    description: "A succulent plant known for its medicinal properties and easy care.",
                    cost: "$15",
                    image: "https://cdn.pixabay.com/photo/2017/08/11/15/47/aloe-vera-2631853_640.jpg",
                },
                {
                    name: "Echeveria",
                    description: "A rosette-shaped succulent with fleshy leaves, often used in arrangements.",
                    cost: "$12",
                    image: "https://cdn.pixabay.com/photo/2018/11/16/23/34/echeveria-3820381_640.jpg",
                },
                {
                    name: "Jade Plant",
                    description: "A popular succulent with thick, glossy leaves, symbolizing good luck.",
                    cost: "$18",
                    image: "https://cdn.pixabay.com/photo/2024/07/21/05/08/jade-plant-8909501_1280.jpg",
                },
            ],
        },
    ];

    const styleObj = {
        backgroundColor: "#4CAF50",
        color: "#fff",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "20px",
    };

    const styleObjUl = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "1100px",
    };

    const styleA = {
        color: "white",
        fontSize: "30px",
        textDecoration: "none",
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true);
        setShowCart(false);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
    };

    const isInCart = (productName) => {
        return cart.some((item) => item.name === productName);
    };

    const calculateTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img
                            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
                            alt="Logo"
                        />
                        <a href="/" onClick={handleHomeClick} style={{ textDecoration: "none" }}>
                            <div>
                                <h3 style={{ color: "white" }}>Paradise Nursery</h3>
                                <i style={{ color: "white" }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div>
                        <a href="#" onClick={handlePlantsClick} style={styleA}>
                            Plants
                        </a>
                    </div>
                    <div>
                        <a href="#" onClick={handleCartClick} style={styleA}>
                            <h1 className="cart">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                    id="IconChangeColor"
                                    height="68"
                                    width="68"
                                >
                                    <rect width="156" height="156" fill="none"></rect>
                                    <circle cx="80" cy="216" r="12"></circle>
                                    <circle cx="184" cy="216" r="12"></circle>
                                    <path
                                        d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                                        fill="none"
                                        stroke="#faf9f9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        id="mainIconPathAttribute"
                                    ></path>
                                </svg>
                                ({calculateTotalQuantity()})
                            </h1>
                        </a>
                    </div>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h1>{category.category}</h1>
                            <div className="product-list">
                                {category.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex}>
                                        <img
                                            className="product-image"
                                            src={plant.image}
                                            alt={plant.name}
                                        />
                                        <div className="product-title">{plant.name}</div>
                                        <div className="product-description">{plant.description}</div>
                                        <div className="product-cost">{plant.cost}</div>
                                        <button
                                            className="product-button"
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={isInCart(plant.name)}
                                        >
                                            {isInCart(plant.name) ? "Added" : "Add to Cart"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
