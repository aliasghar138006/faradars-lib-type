"use client"
import styles from "@/templates/SignupPage.module.css"
import { useState } from "react"
import Btn from "../elements/Btn"
import signup from "@/utils/signup"
import toast from "react-hot-toast"
import { redirect } from "next/navigation"

interface userForm  {
    email : string,
    fullName : string,
    userName : string,
    password : string,
    confirmPassword:string
}

function SignupPage() {
    const [userForm , setUserForm] = useState<userForm>({email:"" , fullName:"" , userName:"" , password:"" , confirmPassword:""})
    const changeHandler = (e:{target:{name:string , value:string}}) => {
       
        const {name , value} = e.target;
        setUserForm({...userForm , [name] : value});
        
    }
    const signupHandler =  async() => {
      if(userForm.password !== userForm.confirmPassword) {
        toast.error("پسورد و تکرار پسورد با هم برابر نیستند")
      }else {

        const data = await signup(userForm);
        console.log(data);
        if(data.statusCode === 201) {
          toast.success("ثبت نام با موفقیت انجام شد.")
          redirect("/signin")
        }else {
          toast.error(data.message)
        }
      }
    }
  return (
    <div className={styles.container}>
      <h1>ثبت نام</h1>
        <label htmlFor="email">ایمیل:</label>
        <input type="text" name="email"  value={userForm.email} onChange={changeHandler} />
         <label htmlFor="fullName">نام و نام خانوادگی:</label>
        <input type="text" name="fullName" value={userForm.fullName} onChange={changeHandler} />
         <label htmlFor="userName">نام کاربری:</label>
        <input type="text" name="userName" value={userForm.userName} onChange={changeHandler} />
         <label htmlFor="password">پسورد:</label>
        <input type="text" name="password" value={userForm.password} onChange={changeHandler} />
         <label htmlFor="confirmPassword">تکرار پسورد:</label>
        <input type="text" name="confirmPassword" value={userForm.confirmPassword} onChange={changeHandler} />
        <div onClick={signupHandler}>
          <Btn  text="ثبت نام" />
          </div>
    </div>
  )
}

export default SignupPage