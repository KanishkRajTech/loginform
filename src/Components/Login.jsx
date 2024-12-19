import React, { useState } from "react";
function Login({setislogin}) {
      const [formData, setfrmData] = useState({
            email:"",
            password: "",
      })
      console.log(formData.email);
      
      function  changeHandler(event){
            setfrmData( (prevData) => (
                  {
                        ...prevData,
                        [event.target.name] : event.target.value
                  }
            ))
      }

      return(
            <>
                 <div>
                        <h2 className="text-2xl font-bold text-left mt-5">Login</h2>
                        <form action="">
                              <input 
                                    type="email" 
                                    placeholder="Enter Email"
                                    name="email"
                                    onChange={changeHandler}
                                    value={formData.email}
                                    className="w-full py-2 bg-slate-300 rounded-md px-2 mt-3"
                              />
                              <input 
                                    type="password" 
                                    value={formData.password}
                                    onChange={changeHandler}
                                    placeholder="Enter Password"
                                    name="password"
                                    className="w-full py-2 bg-slate-300 rounded-md px-2 mt-3"
                              />
                              <a 
                                    href="#" 
                                    className="text-blue-600 hover:underline mt-4 block text-right"
                              >
                                    Forgot password?
                              </a>

                              <button 
                                    className="w-full text-xl font-semibold text-white bg-gray-700 py-2 rounded-md mt-2 mb-2"
                              >
                                    Login
                              </button>
                              <p onClick={() => setislogin(false)}>
                                    Not an Account?  
                                    <a 
                                    href="#" 
                                    className="text-blue-600 hover:underline"
                                    >
                                    Signup Now
                                    </a>
                              </p>
                        </form>
                  </div>

            </>
      )
}
export default Login;