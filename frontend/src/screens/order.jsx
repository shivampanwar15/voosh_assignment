import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'


function Order() {

  const [formData, setFormData] = useState({phoneNumber: "", subTotal: ""})

  const navigate = useNavigate();

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

 const handleSubmit = async (e) => {
        e.preventDefault();

        const UserId = localStorage.getItem("user_id");
        if(!UserId){
          alert('Please Login to Add new order');
          navigate("/login")
        }
        else{
        const response = await fetch(`http://localhost:8000/api/add-order`, {
            method: 'POST',

            headers: {
            'Content-Type': 'application/json'},
	          credentials:'include',

            body: JSON.stringify({ user_id: UserId, sub_total: formData.subTotal, phoneNumber: formData.phoneNumber})
        });

        const json = await response.json();
        console.log(json);
        if(json.success){
            navigate("/myorders");
        }
        if (!json.success) {
            alert("Enter valid Inputs");
        }
      }
    }


  return (
    <>
     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
       Make a new Order !!
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
            Sub Total
          </label>
          <div className="mt-2">
            <input
              id="subTotal"
              name="subTotal"
              type="text"
              value={formData.subTotal}
              onChange={onChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              PhoneNumber
            </label>
           
          </div>
          <div className="mt-2">
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              value={formData.phoneNumber}
              onChange={onChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  </div>
    
    
    </>
  )
}

export default Order