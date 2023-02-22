import { lazy } from 'react'

export const AboutPageAsynk = lazy(() => new Promise((res) => {
    // @ts-ignore
    setTimeout(() => res(import('./AboutPage')), 1000)
}))
