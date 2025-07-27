import React from 'react'
import getUsers from "@/utils/getUsers"
import styles from "@/templates/UsersPage.module.css"

interface user_type {
  _id:string,
  email:string,
  fullName:string,
  isAdmin:boolean,
  password:string,
  createdAt:string,
  updatedA:string
}

async function UsersPage() {
  const {data} = await getUsers();
  console.log(data);
  return (
    <div className={styles.container}>
      <h3>لیست کاربران</h3>
      <ul>
        {data.map((user:user_type , index:number) => (
          <li key={index}>{index+1} - {user.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default UsersPage