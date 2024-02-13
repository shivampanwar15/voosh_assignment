import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

  const[loggedIn , setLoggedIn] = useState(false);

  useEffect(()=>{
   const UserId = localStorage.getItem("user_id");
    if(UserId){
      setLoggedIn(true);
    }
  },[])

  return (
< >
    <div style={{  background: "rgba(255, 255, 255, 0.5) url('https://images.pexels.com/photos/673648/pexels-photo-673648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" } } className='w-screen bg-contain h-screen flex content-around flex-wrap items-center justify-center place-content-evenly  bg-black h-48bg-black' >
 
{(!loggedIn) ? <Link to='/login' className="bg-black hover:bg-yellow-500 text-white m-5 font-bold py-2 px-4 rounded-full" >
Login
</Link> :"" }


{(!loggedIn) ? <Link to='/signup' className="bg-black hover:bg-yellow-500 text-white m-5 font-bold py-2 px-4 rounded-full" >
Sign Up
</Link> :"" }
<Link to='/myorders' className="bg-black hover:bg-yellow-500 text-white m-5 font-bold py-2 px-4 rounded-full">
  Get Orders 
</Link>

<Link to='/order' className="bg-black hover:bg-yellow-500 text-white m-5 font-bold py-2 px-4 rounded-full">
  Add an Order
</Link>

    </div>
    
    </>
  )
}

export default Home