import React, { FC } from 'react'
import Header from '@/modules/Header'
import Footer from '@/modules/Footer'

const Layout:FC<{children:React.ReactNode}> = ({children}):React.ReactNode => {
  return (
    <div>
        <Header />
        {children}
       <Footer />
    </div>
  )
}

export default Layout