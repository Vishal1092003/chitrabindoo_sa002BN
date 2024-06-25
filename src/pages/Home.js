import React from 'react'
 import { useState ,useEffect} from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';

//  import Navbar from '../components/Navbar';
const Home = () => {
        const API_URL = "https://fakestoreapi.com/products";
   const[loading,setloading] =useState(false);
   const[posts,setposts]=useState([]);
   async function fetchproduct() {
     setloading(true);
     try{
        const res=await fetch(API_URL);
        const data=await res.json();
        setposts(data);

     }
     catch(error){
        console.log("error ayaya ga ");
        setposts([]);

     }
     setloading(false);
   }
   useEffect ( () =>{
    fetchproduct();
   },[])
  return (
    <div>
        {
     loading ? <Spinner/> :
     posts.length > 0 ?
     ( 
        <div  className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
            {
                posts.map ( (post) => (
                    <Product key={post.id} post={post}/>
                ))
            }
        </div>
     ):
     <div>
        <p>No data found</p>
     </div>

        }
   </div>  
  )
}

export default Home
