"use client"
import styles from "@/modules/Sidebar.module.css"
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import Cookies from "js-cookie";
import parseJwt from "@/utils/parseJwt"

interface items_type {
  [key:string ] : boolean | string
}

interface userData_type {
  
    user : {
      email : string,
      fullName:string,
      username : string,
      isAdmin : boolean
    }
 
}

function Sidebar() {
  const [isAdmin , setIsAdmin] = useState<boolean>(false);
  const adminItems : items_type[] = [
    {selected:false,title:"داشبورد" , path:"/dashboard"},
    {selected:false,title:"ویرایش اطلاعات کاربری" , path:"/edit"},
    {selected : false,title: "کتب موجود"  , path:"/books"},
    {selected : false,title: "کتب امانت داده شده" , path:"/debtbooks"},
    {selected : false,title:"لیست کاربران"  , path:"/users"},
    {selected : false, title:"تمدید و تحویل" , path:"/holdover"},
    {selected : false, title:"خروج" , path:"/signin"}
  ]

   const userItems : items_type[] = [
    {selected:false,title:"داشبورد" , path:"/dashboard"},
    {selected:false,title:"ویرایش اطلاعات کاربری" , path:"/edit"},

    {selected : false, title:"درخواست تمدید" , path:"/holdoverreq"},
    {selected : false, title:"خروج" , path:"/signin"}
  ]
  const [item , setItem] = useState<items_type[]>(isAdmin ? adminItems : userItems);

  const path = usePathname();
  const token:string = Cookies.get('access_token')
  const userData:userData_type = parseJwt(token);

  useEffect(() => {
    setIsAdmin(userData?.user?.isAdmin)
    
  } , [])
  
  useEffect(() => {
    
    
    
   
    const newItems: items_type[] = userData?.user?.isAdmin ? [...adminItems] : [...userItems];
    const route = path.split("/");
    const currentUrl = route[route.length - 1]
    const filteredData = newItems.filter(item => (item.path == `/${currentUrl}`));
    filteredData[0].selected = true;
    setItem(newItems)
   
  },[path])

  const logoutHabdler =  () => {
    Cookies.remove("access_token");
    window.location.reload()
  }
  return (
    <div className={styles.container}>
      <div className={styles.profileIcon}>

        <CgProfile />
      </div>
    <ul>
      {item.map((i , index) => (
         <Link key={index} href={i.path == "/dashboard" || i.path == "/signin" ? i.path :`/dashboard${i.path}`}>
         
          <li onClick={i.path == "/signin" ? logoutHabdler : undefined} style={i.selected ? {color:"gray"}:{}}>{i.title}</li>
          </Link>
      ))}
   
   


    </ul>
    </div>
  )
}

export default Sidebar