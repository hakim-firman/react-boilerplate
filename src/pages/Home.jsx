import { Button } from '@/components/ui/button'
import React from 'react'
import { NavLink } from 'react-router'

export const Home = ({notify}) => {
  return (
        <div className="flex flex-col gap-4 items-center justify-center w-full h-full">
          <h1 className="text-4xl font-bold">Find Your Nirmala</h1>
          <div className="flex flex-row gap-2">
            <Button className="brutalism brutalism-active" onClick={notify}>Toast</Button>  
            <NavLink to={'/login'}>
                <Button className="brutalism brutalism-active">Login</Button>  
            </NavLink>
          </div>
        </div>
  )
}
