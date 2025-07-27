"use client"
import React, { useState } from 'react'
import styles from "@/templates/EditPage.module.css"
import editData from "@/utils/editData"
import { useJwt } from 'react-jwt';
import Cookies from "js-cookie";
import toast from 'react-hot-toast';

interface userData_type {
  decodedToken : {
    user : {
      email : string,
      fullName:string,
      username : string
    }
  } | null
}
function EditPage() {

    const [username , setUsername] = useState("");
    const [fullName , setFullName] = useState("");

    const token:string = Cookies.get('access_token')
    const data:userData_type = useJwt(token);

    const editHandler = async() => {
      const email = data?.decodedToken?.user?.email;
      if(!username || !fullName)  {
        toast.error("لطفا فیلدها را پر کنید");
        return;
      }
      const result = await editData({username , fullName , email});
      if(result.statusCode == 200) {
        toast.success("اطلاعات با موفقیت ویرایش شد");
        Cookies.set("access_token" , result.access_token)
      }else {
        toast.error("خطایی رخ داده است")
      }
    }
  return (
    <div className={styles.container}>
        <div>
            <label htmlFor="username">UserName:</label>
            <input onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" value={username} />
        </div>
        <div>
            <label htmlFor="fullname">FullName:</label>
            <input onChange={(e) => setFullName(e.target.value)} type="text" id="fullname" name="fullname" value={fullName} />
        </div>

       <button onClick={editHandler} type="submit">ویرایش</button>
    </div>
  )
}

export default EditPage