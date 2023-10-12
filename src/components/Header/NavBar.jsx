import { BsSearch as SearchIcon } from 'react-icons/bs'

export default function NavBar() {
    return (
        <>
            <nav className='navBar'>
                <button className="searchBtn">
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