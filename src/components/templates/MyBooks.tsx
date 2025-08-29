"use client"
import React, { useEffect, useState } from 'react';
import styles from "@/templates/HoldOverReq.module.css"
import Cookies from "js-cookie";
import parseJwt from '@/utils/parseJwt';
import NotFound from '../elements/NotFound';
import { redirect } from 'next/navigation';



type bookType = {
  _id:string,
  title : string,
  description : string,
  author : string,
  image : {data : {data : Buffer}},
  isExist:boolean
}

 interface userData_type {
      
        user : {
          email : string,
          fullName:string,
          username : string,
          isAdmin:boolean,
          books:bookType[]
        }
  
    }
function MyBooks() {
    const [books , setBooks] = useState<bookType[]>([]);
    const token:string = Cookies.get('access_token');
    if (!token) redirect("/") 
    const data:userData_type = parseJwt(token);
    useEffect(() => {
     
    setBooks(data?.user?.books)
    } , [])
    
  return (
    <div className={styles.container}>
        <ul>
           {books.length ? books.map(item => (
             <li key={item._id}>
                <h3>{item.title}</h3>
                <div className={styles.buttons}>
                    <div>مشاهده جزییات</div>
                </div>
            </li>
           )) : <NotFound />}
        </ul>
    </div>
  )
}

export default MyBooks