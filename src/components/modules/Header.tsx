

import Image from 'next/image'
import React from 'react'
import styles from "@/modules/Header.module.css"
import Logo from "@/images/logo.png"
import Link from 'next/link'

function Header() {
  return (
     <div className={styles.container}>
      <div className={styles.icon}>
        <Image src={Logo} width={50} height={50} alt="" />
        <span>کتابخانه فرادرس</span>
      </div>
      <div className={styles.items}>
        <Link href={"/books"}>لیست کتاب ها</Link>
        <div> کتاب های من</div>
        <div> درباره ما</div>
      </div>
      <div className={styles.auth}>
        <div>ثبت نام</div>
        <div>ورود</div>
      </div>
    </div>
  )
}

export default Header