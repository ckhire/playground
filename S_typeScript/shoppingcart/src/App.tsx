import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Cart from "./Cart";
import Spinner from "./Spinner";
import AddedItemCart from "./AddedItemCart";
import cartImage from './empty-cart.jpg'

function App() {
  interface items {
    id: number;
    description: string;
    category: string;
    image: string;
    price: number;
    title: string;
    // amount:number;
  }

  const [data, setData] = useState<items[]>([]);
  const [loading, setloading] = useState(false);
  // const [cartItem, setcartItem] = useState<number>(0);
  const [addedItem, setAddedItem] = useState<items[]>([]);
  const [viewCart, setViewCart] = useState<boolean>(true);

  const getProducts = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setloading(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(data);


  const totalCost = addedItem.reduce((prevPrice, currentPrice)=>{
   return Math.round(prevPrice + currentPrice.price)
  },0)

  const AddItem = (e: any) => {
    console.log("hello");
    console.log(e);

    setAddedItem([...addedItem, e]);
  };
  console.log(addedItem);

  return (
    <div className="App">
      <div style={{
       }}
  >
        <h1 style={{backgroundColor:'green',padding:'5px', fontWeight:'bold'}}>Shopping Cart</h1>
        <button onClick={() => setViewCart(true)} className='btn  btn-primary'>shopping Cart</button>{" "}
        <button onClick={() => setViewCart(false)} className='btn  btn-danger'>
          {" "}
          View Item {addedItem.length}
        </button>
      </div>

      {viewCart ? (
        <div style={{  }} >
          {loading ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evely",
                flexWrap: "wrap",
                padding: "10px",
                marginLeft:'10%'
              }}
            >
              {data.map((ele, index) => {
                return (
                  <>
                    <Cart 
                      key={index}
                      imageName={ele.image}
                      id={ele.id}
                      title={ele.title}
                      price={ele.price}
                      addToCart={() => AddItem(ele)}
                      category={ele.category}
                    />
                  </>
                );
              })}
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      ) : (
        <div>
          {addedItem.length === 0 ? (
            <div style={{ width:'100%', height:'150px' }}>
            <img
            src={cartImage}
            alt="cartImptyImage"
            width={850}

            
            />
            </div>
          ) : (
            <div>
              <h5>Total Cost : Rs. {totalCost}</h5>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evely",
                  flexWrap: "wrap",
                  padding: "10px",
                }}
              >
                {addedItem.map((item, index) => {
                  return (
                    <AddedItemCart
                      imageName={item.image}
                      title={item.title}
                      id={item.id}
                      category={item.category}
                      price={item.price}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
