import {Icon} from '@iconify/react';
import Logo from '../aset/pasFoto.jpeg';
import './navbar.css';

function SearchBar(){
    return(
        <input id="navbar-search" type="search" placeholder="Search Hotels"></input>
    )
}

function NavbarGroup(){
return(
    <div id="navbar-group">
        <div id="navbar-icon">
            <Icon icon="bxs:car" height="24"/>
            <Icon icon="fa6-brands:instagram" height="24"/>
        </div>
        <div id="navbar-member">
            <img src={Logo} id="user-icon" alt="user-icon"></img>
            <p id="user-name">Wahyu</p>
        </div>
    </div>
)
}



function Navbar(){
    return(
    <nav id="navbar">
        <img src={Logo} alt='Web Logo'></img>
        <SearchBar />
        <NavbarGroup />
    </nav>
    )
}


export default Navbar;




