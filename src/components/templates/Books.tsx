'use client'
import React, { useEffect, useState } from 'react'
import Card from '../modules/Card'
import getBooks from '@/utils/getBooks'
import styles from "@/templates/MainPage.module.css"


type bookType = {
  _id:string,
  title : string,
  description : string,
  author : string,
  image : {data : {data : Buffer}}
}
function Books() {
    const [books , setBooks] =  useState<bookType[]>([])
     const [search , setSearch] =  useState<string>("")
     
  useEffect(() => {
    const getData = async () => {
      const data = await getBooks();
      
    const filteredBooks= data.data.filter((item:bookType) => (item.title.includes(search)));
        
      setBooks(filteredBooks)
    }
    getData();
  } , [search])
  const changeHandler = (e:{target : {value : string}}) => {
    setSearch(e.target.value)
  }
  return (
     <div>
        <div className={styles.searchBox}>
            <input placeholder="نام کتاب را وارد کنید..." type="text" value={search} onChange={changeHandler} />
        </div>
        <div className={styles.booksList}>
        
        {books.map(item => (
          <div key={item._id} className={styles.book}>

            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Books