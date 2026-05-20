import { useEffect, useState } from "react";

function Cart(){

    const [cart,setCart] = useState([]);

    useEffect(()=>{

        const items =
            JSON.parse(localStorage.getItem("cart"))
            || [];

        setCart(items);

    },[]);

    const removeItem = (index)=>{

        const updatedCart =
            cart.filter((_,i)=>i !== index);

        setCart(updatedCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );
    };

    const total = cart.reduce(
        (sum,item)=>sum + item.price,
        0
    );

    return(

        <div className="container">

            <h1>Your Cart</h1>

            {
                cart.map((item,index)=>(

                    <div className="card" key={index}>

                        <h3>{item.name}</h3>

                        <p>₹ {item.price}</p>

                        <button
                            onClick={()=>removeItem(index)}
                        >
                            Remove
                        </button>

                    </div>
                ))
            }

            <h2>Total: ₹ {total}</h2>

            <button
                onClick={()=>alert("Order Placed")}
            >
                Checkout
            </button>

        </div>
    )
}

export default Cart;