import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainBoardPage from '../modules/main_board/pages/MainBoardPage'
import MainLayout from '../layouts/MainLayout'

const useRouteElements = () => {
    const routeElements = useRoutes([
        {
            path: '/',
            element: <MainLayout><MainBoardPage/></MainLayout>
        }
    ])

  return routeElements
}

export default useRouteElements