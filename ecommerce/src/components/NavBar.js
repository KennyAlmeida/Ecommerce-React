import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavCart from "./NavCart";

function NavBar () {
    return (
        <>
        <div className="navbar">
            <NavLogo/>
            <NavMenu/>
            <NavCart/>
        </div>
        </>
    );

}



export default NavBar;