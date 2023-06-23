import HorizontalNavigation from '@/components/shared/HorizontalLayout/HorizontalNavigation'
import HorizontalFooter from '@/components/shared/HorizontalLayout/HorizontalFooter'
import React from 'react'
import Dashboard from '@/components/pages/dashboard/Dashboard'

const index = () => {
  return (
    <div>
        <HorizontalNavigation />
        <Dashboard/>
        <HorizontalFooter/>
    </div>
  )
}

export default index