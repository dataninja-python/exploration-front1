import React from 'react'
<nav>

</nav>

const navbar = () => {
  return (
    <nav className="nav">
        <a href="/" className='site-title'>Proto1</a>
        <ul>
            <li>
                <a href="/Home">Home</a>
            </li>
            <li>
                <a href="/Reservation">Reservation</a>
            </li>
            <li>
                <a href="/Guest">Guest</a>
            </li>
            <li>
                <a href="/Partner">Partner</a>
            </li>
            <li>
                <a href="/Property">Property</a>
            </li>
            <li>
                <a href="/Invoice">Invoice</a>
            </li>
            <li>
                <a href="/Dashboard">Dash</a>
            </li>
        </ul>
    </nav>
  )
}

export default navbar