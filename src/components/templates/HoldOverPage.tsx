"use client"
import React, { useEffect, useState } from 'react'
import styles from "@/templates/HoldOver.module.css"
import getUser from '@/utils/getUser'
import holdOver from "@/utils/holdOver"
import toast from 'react-hot-toast'


type bookType = {
  _id:string,
  title : string,
  description : string,
  author : string,
  image : {data : {data : Buffer}},
  isExist:boolean
}
function HoldOverPage() {
  const [data , setData] = useState<bookType[]>([]);


  useEffect(() => {
    const getData = async () => {
      const {data} = await getUser("68866ee8e7184bd2428fd78f");
      setData(data[0].books)
    }
    getData()
  } , [])
  
  

  const holdOverHandler = async (id:string) => {
    const data = await holdOver(id , true);
    if(data.statusCode === 200) {
      toast.success("تمدید با موفقیت انجام شد")
    }else {
      toast.error("مشکلی پیش آمده است")
    }
    window.location.reload()
  }

  const notHoldOverHandler = async (id:string) => {
   const data = await holdOver(id , false);
   if(data.statusCode === 200) {
      toast.success("لغو تمدید با موفقیت انجام شد")
    }else {
      toast.error("مشکلی پیش آمده است")
    }
    window.location.reload()
  }
 

  return (
    <div className={styles.container}>
        <ul>
          {data?.map((item) => (
              <li key={item._id}>
                <h3>{item.title}</h3>
                <div className={styles.buttons}>
                    <div onClick={() => holdOverHandler(item._id)}>تمدید</div>
                    <div onClick={() => notHoldOverHandler(item._id)}>عدم تمدید</div>
                </div>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default HoldOverPage