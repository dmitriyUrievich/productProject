import {lazy} from 'react'
export const MainPageAsynk = lazy(() => new Promise(res=>{
        // @ts-ignore
    setTimeout(()=>res(import('./MainPage')),1000)
    }))
