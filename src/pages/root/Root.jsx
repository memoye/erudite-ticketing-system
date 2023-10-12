import classNames from "classnames";
import './Root.css'
import { Outlet } from 'react-router-dom'


const theme = 'default'

export default function Root() {
    return (
        <div className={ classNames('root', theme) }>
            This is the root route!
            <main>
                <Outlet />
            </main>
        </div>
    )
}