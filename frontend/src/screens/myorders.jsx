import React, { useState, useEffect } from 'react';
import Card from '../components/card';

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/get-order`);
        const data = await response.json();

        if (data.length) {
          setOrders(data);
        } else {
          console.log("Unable to fetch orders");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className='w-screen bg-contain h-screen '>
        <div className='w-screen h-screen flex content-around flex-wrap items-center justify-center bg-grey-600 h-48bg-black'>
          {orders.length > 0 &&
            orders.map((orderItem, index) => (
              <Card
                key={index}
                userID={orderItem.user_id}
                name={localStorage.getItem("name")}
                subTotal={orderItem.sub_total}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
