import classNames from "classnames";
import './Root.css'
import { Link, Outlet } from 'react-router-dom'
import { Header } from "../../components";
// import Header from "../../components/Header/Header";


const theme = 'default'

export default function Root() {
    return (
        <div className={ classNames('root', theme) }>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>
            </footer>
        </div>
    )
}