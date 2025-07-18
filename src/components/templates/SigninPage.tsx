"use client"
import styles from "@/templates/SignupPage.module.css"
import { useState } from "react"
import Btn from "../elements/Btn"
import signin from "@/utils/signin"
import toast from "react-hot-toast"
import { redirect } from "next/navigation"
import Cookies from "js-cookie";

interface userForm  {
    email : string,
    
    password : string,
   
}

function SigninPage() {
    const [userForm , setUserForm] = useState<userForm>({email:"" ,  password:"" })
    const changeHandler = (e:{target:{name:string , value:string}}) => {
       
        const {name , value} = e.target;
        setUserForm({...userForm , [name] : value});
        
    }
    const signinHandler =  async() => {
        if(!userForm.email.length || !userForm.password.length) {
            toast.error("فیلد ها را پر کنید")
        }else {
             const data = await signin(userForm);
        console.log(data);
        if(data.statusCode === 200) {
          toast.success("ورود با موفقیت انجام شد.")
          Cookies.set("access_token" , data.access_token)
          redirect("/dashboard")
        }else {
          toast.error(data.message)
        }
        }

       
      }
    
  return (
    <div className={styles.container}>
      <h1>ورود</h1>
        <label htmlFor="email">ایمیل:</label>
        <input type="text" name="email"  value={userForm.email} onChange={changeHandler} />
        
         <label htmlFor="password">پسورد:</label>
        <input type="text" name="password" value={userForm.password} onChange={changeHandler} />
        
        <div onClick={signinHandler}>
          <Btn  text="ورود" />
          </div>
    </div>
  )
}

export default SigninPage