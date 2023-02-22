import NavMenuItems from "./NavMenuItems";


function NavMenu(){
    return(
        <>
        <nav className="nav-menu">
            <ul>
                <NavMenuItems name="Home"/>
                <NavMenuItems name="Products"/>
                <NavMenuItems name="Contact"/>
            </ul>
        </nav>
        </>
    );
}

export default NavMenu;