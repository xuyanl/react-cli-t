import { createRoot } from 'react-dom/client'
import App from './app'
import { useRoutes, HashRouter, BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'

const root = createRoot(document.getElementById('root')!)
root.render(
    <BrowserRouter>
        <Suspense fallback={<div>loading...</div>}>
            <App />
        </Suspense>
    </BrowserRouter>
)
