// router
import {NavLink} from "react-router-dom";

const HeaderLink = ({label, path}) => {
    return (
        <li className={'nav-item'}>
            <NavLink to={path} className='nav-link'>
                {label}
            </NavLink>
        </li>
    )
}

export default HeaderLink;