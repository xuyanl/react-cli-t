import { createRoot } from 'react-dom/client'
import App from './app'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'

const root = createRoot(document.getElementById('root') as HTMLDivElement)
root.render(
    <BrowserRouter>
        <Suspense fallback={<div>loading...</div>}>
            <App />
        </Suspense>
    </BrowserRouter>
)
