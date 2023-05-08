import { RouteObject } from 'react-router-dom'

import Home from './pages/home'
import { lazy } from 'react'

const sleep = (time: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('')
        }, time)
    })
}

const Details = lazy(async () => {
    await sleep(5000)
    return import('./pages/details/')
})

const routers: RouteObject[] = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/details',
        // element: <Details />,
        // element:()=>Details,
        Component: Details,
        children: [
            {
                index: true,
                // path: '/details/home',
                element: <Home />
            }
        ]
    }
]

export default routers
