import React,{useState} from "react";

function Singup(){
       const [formData, setfrmData] = useState({
                  email:"",
                  password: "",
                  Cpassword: "",
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
                        <h2 className="text-2xl font-bold  text-left mt-5">SingUp</h2>
                        <form action="">
                              <input 
                                    type="email" 
                                    placeholder="Enter Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={changeHandler}
                                    className=" w-full py-2 bg-slate-300 rounded-md px-2 mt-3"
                              />
                              <input 
                                    type="password" 
                                    placeholder="Enter Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={changeHandler}
                                    className=" w-full py-2 bg-slate-300 rounded-md px-2 mt-3"
                              />
                              <input 
                                    type="password" 
                                    placeholder="Enter Confirm Password"
                                    name="Cpassword"
                                    value={formData.Cpassword}
                                    onChange={changeHandler}
                                    className=" w-full py-2 bg-slate-300 rounded-md px-2 mt-3"
                              />
                                                      

                              <button className="w-full text-xl font-semibold text-white bg-gray-700 py-2 rounded-md mt-4
                              ">Login</button>
                                                      
                        </form>
                  </div>
            </>
      )
}
export default Singup;