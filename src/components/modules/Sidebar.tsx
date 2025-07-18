"use client"
import styles from "@/modules/Sidebar.module.css"
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";

interface items_type {
  [key:string ] : boolean | string
}

function Sidebar() {
  const items : items_type[] = [
    {selected:false,title:"داشبورد" , path:"/dashboard"},
    {selected:false,title:"ویرایش اطلاعات کاربری" , path:"/edit"},
    {selected : false,title:"کتب موجود" , path:"/books"},
    {selected : false,title:"کتب امانت داده شده" , path:"/debtbooks"},
    {selected : false,title:"لیست کاربران" , path:"/users"},
    {selected : false, title:"تمدید و تحویل" , path:"/holdover"}
  ]
  const [item , setItem] = useState<items_type[]>(items);

  const path = usePathname();
  useEffect(() => {
    const newItems: items_type[] = [...items];
    const route = path.split("/");
    const currentUrl = route[route.length - 1]
    const filteredData = newItems.filter(item => (item.path == `/${currentUrl}`));
    filteredData[0].selected = true;
    setItem(newItems)
  },[path])
  return (
    <div className={styles.container}>
      <div className={styles.profileIcon}>

        <CgProfile />
      </div>
    <ul>
      {item.map((i , index) => (
         <Link key={index} href={i.path == "/dashboard" ? i.path :`/dashboard${i.path}`}>
          <li style={i.selected ? {color:"gray"}:{}}>{i.title}</li>
          </Link>
      ))}
   
   


    </ul>
    </div>
  )
}

export default Sidebar