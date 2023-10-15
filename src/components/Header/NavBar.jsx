import classNames from 'classnames'
import { useEffect, useRef } from 'react'
import { BsSearch as SearchIcon } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar({ searchOpen, setSearchOpen }) {
    const searchField = useRef()


    function handleBlur(e) {
        // close on blur only if there is no user input
        if (e.target.value === '') setSearchOpen('searchBarClose')
    }

    useEffect(() => {
        if (searchOpen) {
            searchField.current.focus()
        }
    }, [searchOpen])

    return (
        <>
            <form
                className={ classNames('searchBar', searchOpen) }>
                <div>
                    <input
                        placeholder='Search events'
                        className='searchInput'
                        id="q"
                        name="q"
                        type="search"
                        ref={ searchField }
                        onBlur={ handleBlur }
                    />

                    <SearchIcon
                        className='searchInputIcon'
                    />
                </div>
            </form>
            <nav className='navBar'>
                <NavLink>Discover</NavLink>
            </nav>

        </>
    )
}