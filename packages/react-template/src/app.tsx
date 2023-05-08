import { useRoutes, HashRouter, BrowserRouter, useNavigate } from 'react-router-dom'

import routers from './router'
import './global.less'

const App = () => {
    const navigate = useNavigate()
    const element = useRoutes(routers)
    return (
        <div className='layout'>
            <div className='side'></div>
            <div>
                <div onClick={() => navigate('/home')}>go to home</div>
                <div onClick={() => navigate('/details')}>go to details</div>
                <div>{element}</div>
            </div>
        </div>
    )
}

// console.log(HOME)

export default App
