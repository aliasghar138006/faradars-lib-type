import Image from 'next/image'
import React, { FC } from 'react'
import Btn from '@/elements/Btn'

type book = {
    _id:string,
  title : string,
  author : string,
  description : string,
  image : {data : {data : Buffer}}
}

const Card:FC<{item:book}> = ({item}) => {
  return (
    <div>
              <Image src={`data:image/png;base64,${Buffer.from(item.image.data.data).toString("base64")}`} width={100} height={100} alt="alt" />
            <h3>{item.title}</h3>
            <h3>{item.author}</h3>
            <Btn text="مشاهده جزییات" />
            </div>
  )
}

export default Card