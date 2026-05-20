import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home(){

    const [products,setProducts] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{

        getProducts();

    },[]);

    const getProducts = async()=>{

        const res = await axios.get(
            "http://localhost:5000/api/products"
        );

        setProducts(res.data);
    };

    const addToCart = (product)=>{

        const cart =
            JSON.parse(localStorage.getItem("cart"))
            || [];

        cart.push(product);

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        alert("Added To Cart");
    };

    return(

        <div className="container">

            <h1>E-Commerce Store</h1>

            <button onClick={()=>navigate("/cart")}>
                Go To Cart
            </button>

            <div className="products">

                {
                    products.map((product)=>(

                        <div className="card" key={product._id}>

                            <img
                                src={product.image}
                            />

                            <h3>{product.name}</h3>

                            <p>₹ {product.price}</p>

                            <p>{product.description}</p>

                            <button
                                onClick={()=>addToCart(product)}
                            >
                                Add To Cart
                            </button>

                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Home;