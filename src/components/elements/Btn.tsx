import { FC } from "react"
import React from "react"
import styles from "@/elements/Btn.module.css"

const Btn:FC<{text : React.ReactNode}> = ({text}) => {
  return (
    <div className={styles.container}>
        {text}
    </div>
  )
}

export default Btn