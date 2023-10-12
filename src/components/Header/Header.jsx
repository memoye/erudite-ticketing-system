import { Link } from 'react-router-dom'
import './Header.css'
import NavBar from './NavBar'

export default function Header() {


    return (
        <header className="header">


            <div className="logo">
                <Link to={ '/' }>
                    <img src="/logo.svg" alt="Erudite logo" />
                    <span className="logoTxt">ERUDITE!</span>
                </Link>
            </div>
            <NavBar />
        </header>
    )
}