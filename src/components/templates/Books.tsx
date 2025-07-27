'use client'
import React, { FC, useEffect, useState } from 'react'
import Card from '../modules/Card'
import getBooks from '@/utils/getBooks'
import styles from "@/templates/MainPage.module.css"


type bookType = {
  _id:string,
  title : string,
  description : string,
  author : string,
  image : {data : {data : Buffer}},
  isExist:boolean
}
const Books:FC<{isExist:boolean}> = ({isExist=false}) => {
    const [books , setBooks] =  useState<bookType[]>([])
     const [search , setSearch] =  useState<string>("")
     
  useEffect(() => {
    const getData = async () => {
      const data = await getBooks();

      if(isExist) {
      const filteredBooks= data.data.filter((item:bookType) => (item.title.includes(search)));
      const notExistBooks = filteredBooks.filter((item:bookType) => (item.isExist === false))
        setBooks(notExistBooks)
      }else {

        const filteredBooks= data.data.filter((item:bookType) => (item.title.includes(search)));
        setBooks(filteredBooks)
      }
      
      
    
    }
    getData();
  } , [search])
  const changeHandler = (e:{target : {value : string}}) => {
    setSearch(e.target.value)
  }
  return (
     <div>
        {books.length ? <div className={styles.searchBox}>
            <input placeholder="نام کتاب را وارد کنید..." type="text" value={search} onChange={changeHandler} />
        </div> : <div className={styles.notFound}>کتابی یافت نشد</div>}
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