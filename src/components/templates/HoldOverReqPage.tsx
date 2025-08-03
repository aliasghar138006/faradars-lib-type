"use client"
import React, { useEffect, useState } from 'react'
import styles from "@/templates/HoldOverReq.module.css"
import getBooks from '@/utils/getBooks'
import setAdminBook from "@/utils/setAdminBook"
import toast from 'react-hot-toast'


type bookType = {
  _id:string,
  title : string,
  description : string,
  author : string,
  image : {data : {data : Buffer}},
  isExist:boolean
}
function HoldOverReqPage() {
    const [books , setBooks] = useState<bookType[]>([])
    useEffect(() => {
        const getBooksData = async () => {
            const data = await getBooks();
            
            const notExistBooks = data.data.filter((item:bookType) => (item.isExist == false));
            console.log(notExistBooks);
            setBooks(notExistBooks)
        }
        getBooksData()
    } , [])

    const holdHandler = async (item:bookType) => {
        const data = await setAdminBook(item);
        if(data.statusCode == 200) {
            toast.success("درخواست با موفقیت ارسال شد")
        }else {
            toast.error("درخواست ارسال شده است")
        }
    }
  return (
   <div className={styles.container}>
        <ul>
           {books.map(item => (
             <li key={item._id}>
                <h3>{item.title}</h3>
                <div className={styles.buttons}>
                    <div onClick={() => holdHandler(item)}>درخواست تمدید</div>
                </div>
            </li>
           ))}
        </ul>
    </div>
  )
}

export default HoldOverReqPage