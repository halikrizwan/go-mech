import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light justify-content-between p-3 col-12">
        <div class="collapse navbar-collapse col-2 offset-9" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link text-white" href="#">Spares</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#">Blogs</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#">More</a>
            </li>
            <li class="nav-item button">
                <a class="nav-link text-white" href="#">Login</a>
            </li>
            </ul>
        </div>

    </nav>
  )
}

export default Navbar
