// route
import {NavLink} from "react-router-dom";

const MobileNav = ({label, path, icon}) => {
    return (
        <div className="btn-phone text-site mx-3 mb-2">
            <NavLink
                to={path}
                className="btn btn-outline-site">
                {icon}
            </NavLink>
            <p className="mb-0 text-center mt-2">{label}</p>
        </div>
    )
}

export default MobileNav;