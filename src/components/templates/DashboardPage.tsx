"use client"

import React from "react"

import styles from "@/templates/DashboardPage.module.css"

import { useJwt } from "react-jwt"
import Cookies from "js-cookie";


interface userData_type {
  decodedToken : {
    user : {
      email : string,
      fullName:string,
      username : string
    }
  } | null
}
const DashboardPage = () => {
  const token:string = Cookies.get('access_token')
  const data:userData_type = useJwt(token);
  console.log(data);
  return (
    <div className={styles.container}>
        
     <h3>Wlecome 👋</h3>
     <div>
        <div>
          username :{data?.decodedToken?.user?.username}
        </div>
        <div>
          Email : {data?.decodedToken?.user?.email}
        </div>
     </div>
    </div>
  )
}

export default DashboardPage