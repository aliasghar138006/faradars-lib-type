import Sidebar from '@/components/modules/Sidebar'
import React from 'react'
import { FC } from 'react'

const DashboardLayout:FC<{children:React.ReactNode}> = ({children}) => {
  return (
   <div style={{display:"flex" , padding:"10px 2%"}}>
    <div style={{width:"20%"}}>
        <Sidebar />
    </div>
    <div style={{width:"80%"}}>
        {children}
    </div>
   </div>
  )
}

export default DashboardLayout