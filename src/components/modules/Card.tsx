import Image from "next/image"
import { FC } from "react"
import Btn from "@/elements/Btn"


type bookType = {
  _id:string,
  title : string,
  description : string,
  author : string,
  image : {data : {data : Buffer}}
}

const Card:FC<{item:bookType}> = ({item}) => {
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