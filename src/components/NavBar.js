import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="nav">
            <Link to="/" className='site-title'>Prototype</Link>
            <ul>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/signin'>Sign In</CustomLink>
                <CustomLink to='/signup'>Sign Up</CustomLink>
                <CustomLink to='/reservation'>Reservation</CustomLink>
                <CustomLink to='/guest'>Guest</CustomLink>
                <CustomLink to='/partner'>Partner</CustomLink>
                <CustomLink to='/property'>Property</CustomLink>
                <CustomLink to='/invoice'>Invoice</CustomLink>
                <CustomLink to='/dashboard'>Dash</CustomLink>
            </ul>
        </nav>
    )
}

const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}


export default NavBar