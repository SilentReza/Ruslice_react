// router
import {Link} from "react-router-dom";

const NavLink = ({title, id}) => {
    return (
        <li className={'nav-item'}>
            <Link id={id} to={'#'} className={'nav-link'}>
                {title}
            </Link>
        </li>
    )
}

export default NavLink;