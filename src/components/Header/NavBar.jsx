import classNames from 'classnames'
import { useState } from 'react'
import { BsSearch as SearchIcon } from 'react-icons/bs'

export default function NavBar() {
    const [searchOpen, setSearchOpen] = useState('searchBarClose')

    function toggleSearchBar() {
        searchOpen === 'searchBarClose' ? setSearchOpen('searchBarOpen') : setSearchOpen('searchBarClose')
    }

    return (
        <>
            <form className={ classNames('searchBar', searchOpen) }>
                <div>
                    <input
                        className='searchInput'
                        type="search"
                        name="q"
                        id="q"
                    />

                    <button
                        className="searchBtn"
                        onClick={ toggleSearchBar }
                        type='button'
                    >
                        <SearchIcon />
                    </button>

                </div>
            </form>
            <nav className='navBar'>
                <button
                    className="searchBtn"
                    onClick={ toggleSearchBar }
                >
                    <SearchIcon />
                </button>
                <ul>
                    <li>Home</li>
                    <li>Events</li>
                </ul>
            </nav>
        </>
    )
}