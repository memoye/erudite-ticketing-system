import { Link } from 'react-router-dom'
import './Header.css'
import NavBar from './NavBar'
import { HiOutlineViewGridAdd } from 'react-icons/hi'
import { BsSearch as SearchIcon } from 'react-icons/bs'
import { useState } from 'react'

const signUpPage = false

export default function Header() {

    const [searchOpen, setSearchOpen] = useState('searchBarClose')
    function toggleSearchBar() {
        searchOpen === 'searchBarClose' ? setSearchOpen('searchBarOpen') : setSearchOpen('searchBarClose')
    }


    return (
        <header className="header">


            <div className="logo">
                <Link to={ '/' }>
                    <img src="/logo.svg" alt="Erudite logo" />
                    <span className="logoTxt">ERUDITE!</span>
                </Link>
            </div>



            <NavBar
                searchOpen={ searchOpen }
                setSearchOpen={ setSearchOpen }
            />


            <div className='headerBtns'>
                <div className='wIcons'>
                    <button
                        className="searchBtn"
                        onClick={ toggleSearchBar }
                    >
                        <SearchIcon
                            className='icon'
                        />
                    </button>
                    <button className='createEvent'>
                        <HiOutlineViewGridAdd className='icon' /> <span>Create event</span>
                    </button>
                </div>

                <div>
                    { signUpPage ?
                        <Link className='signin'>Sign Up</Link> :
                        <Link className='signin'>Login</Link>
                    }
                </div>
            </div>

        </header>
    )
}