import React, { useState } from "react";
import Login from "../Components/Login";
import Singup from "../Components/Singup";

function AuthForm(){
      const [islogin, setislogin] = useState(true)
      return(
            <>
                  <div className="bg-gray-300 w-[100%] h-screen flex items-center justify-center">
                        <div className="w-[400px] rounded-md bg-white p-10">
                              <div className=" text-xl font-bold  text-center">
                                    <button className={`bg-gray-200 px-5 py-2 rounded-t-md text-center w-1/2 ${islogin ? 'bg-blue-500' : '' } `}  onClick={() => {setislogin(true)}}>Login</button>
                                    <button className={`bg-gray-200 px-5 py-2 rounded-t-md text-center w-1/2 ${!islogin ? 'bg-blue-500' : '' } ` } onClick={() => {setislogin(false)}}>Sing Up</button>
                              </div>
                              {islogin ? 
                                    <>
                                         <Login setislogin={setislogin}  />
                                    </> :
                                     <>
                                          <Singup />
                                     </>
                              }
                        </div>
                  </div>
            </>
      )
}

export default AuthForm;