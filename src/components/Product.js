import React from 'react'
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add,remove} from "../redux/Slices/CreateSlice"


const Product = ( {post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();


  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }

  return (
        
   <div className="flex flex-col items-center justify-between 
  hover:scale-110 hover:bg-orange-200 transition-all duration-300 ease-in-out gap-1 p-6 mt-10 ml-1 rounded-xl outline">

        <div>
          <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
            {/* <p text-gray-700 font-semibold text-md text-left truncate w-10 mt-1>{post.description}</p> */}
        </div>
        <div>
       
        </div>
        <div className="h-[180px] w-[150px]">
            <img src={post.image} alt="image" className="h-full w-full " ></img>
        </div>

        <div className="flex justify-between gap-10 items-center w-full mt-5">
            <p className="text-green-600 font-semibold">${post.price}</p>
          <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.category}</p>
             
        </div>
        {
          cart.some((p) => p.id === post.id)?(<button  
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
            text-[12px] p-1 px-3 uppercase 
            hover:bg-gray-700
            hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart}>
                
            Remove Item
          </button>)
          :(<button
            
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
            text-[12px] p-1 px-3 uppercase 
            hover:bg-gray-700
            hover:text-white transition duration-300 ease-in"
            onClick={addToCart}>
              Add to Cart
            </button>)
        }
    </div>
   
  )
}

export default Product
