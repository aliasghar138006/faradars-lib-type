

import Image from 'next/image'
import styles from "@/modules/Header.module.css"
import Logo from "@/images/logo.png"
import Link from 'next/link'
import { cookies } from 'next/headers'


async function Header() {
  const cookie  = (await cookies()).get("access_token");
  console.log(cookie?.value.length);
  
  console.log("header");
  
  return (
     <div className={styles.container}>
      <div className={styles.icon}>
        <Image src={Logo} width={50} height={50} alt="" />
        <span>کتابخانه فرادرس</span>
      </div>
      <div className={styles.items}>
        <Link href={"/books"}><div>لیست کتاب ها</div></Link>
        <Link href={"/mybooks"}> <div>کتاب های من</div></Link>
        <div> درباره ما</div>
      </div>
        {cookie?.value.length ? <Link href={"/dashboard"}>حساب کاربری</Link> :
      <div className={styles.auth}>
        <Link href="/signup">ثبت نام</Link>
        <Link href="/signin">ورود</Link>
      </div>
        } 
    </div>
  )
}

export default Header