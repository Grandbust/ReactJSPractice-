import './sideBar.css';


function Copyright(){
    return(
        <div id="copyright">
            <p>© 2022 by Wahyu Dwi Setio Wibowo</p>
            <p>All Rights Reserved</p>
        </div>
    )

}

function Sidebar(){
    return(
        <div id="sidebar">
            <div className="sidebar-decoration">
            <ul>
                <li>Hotels</li>
                <li>Flight</li>
                <li>Car Rentals</li>
                <li>Tool</li>
            </ul>
            </div>
            <Copyright />
        </div>
    )
}


export default Sidebar;