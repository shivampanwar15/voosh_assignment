import React from 'react'

function Card({userID, name, subTotal}) {


  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">User Id : {userID}</div>
    <div className="font-bold text-xl mb-2">User Name: {name}</div>
    <p className="text-gray-700 text-base">
     Sub Total :  {subTotal}
    </p>
  </div>
</div>
  )
}

export default Card