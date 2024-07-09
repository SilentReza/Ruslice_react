// router
import {Link} from "react-router-dom";

const NavLink = (props) => {
    return (
        <li className={'nav-item'} onClick={() => props.changeCategory(props.category.id, 'nav', props.category.title)}>
            <Link id={props.category.id} to={'#'}
                  className={props.select === props.category.id ? 'nav-link active' : 'nav-link'}>
                {props.category.title}
            </Link>
        </li>
    )
}

export default NavLink;