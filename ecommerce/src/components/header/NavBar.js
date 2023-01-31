import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import CartWidget from "./CartWidget";

function NavBar () {
    return (
        <>
        <div className="navbar">
            <NavLogo/>
            <NavMenu/>
            <CartWidget/>
        </div>
        </>
    );

}



export default NavBar;