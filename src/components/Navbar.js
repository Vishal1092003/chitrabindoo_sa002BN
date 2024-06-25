import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {

  const {cart} = useSelector((state) => state);
  return (
    // <div>
    //     <div className='flex flex-row justify-between'>
    //         <img src="/" alt="" />
    //         <div>
    //             <p>Home</p>
    //             <FaShoppingCart/>
    //         </div>
    //     </div>
      
    // </div>
   
    <div>
         <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto bg-green-400">
    <NavLink to="/">
    <div className="ml-5">
        <img src="https://avatars.githubusercontent.com/u/117018000?v=4?s=400"  className="h-14" alt="" />
        </div>
        </NavLink>
        <div className="flex items-center font-medium  mr-5 space-x-6">

            <NavLink to="/">
            <p>Home</p>
            </NavLink>
           <NavLink to="/carrtpage">
       <div>
       <FaShoppingCart/>
       {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
       </div>
           </NavLink>
            

        </div> 
        </nav>
        </div>
  )
}

export default Navbar
