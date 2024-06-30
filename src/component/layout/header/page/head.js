// style
import './../css/header.css';
// icons
import {
    IconBooks,
    IconHome,
    IconToolsKitchen,
    IconPhoneCall,
    IconBrandJuejin
} from "@tabler/icons-react";
// link
import {Link, NavLink} from "react-router-dom";
// logo
import logo from './../../../../original/image/logo.png'
// routes
import {routes} from "../../../actions/route/route";
// components
import MobileNav from "./child/mobileNav";
import HeaderLink from "./child/navLink";

const Header = (props) => {
    const links = [
        {icon: <IconHome/>, label: 'خانه', path: '/home', targetSegment: null},
        {icon: <IconToolsKitchen/>, label: 'منو', path: '/menu', targetSegment: 'menu'},
        {icon: <IconBooks/>, label: 'درباره', path: '/about', targetSegment: 'about'},
        {icon: <IconPhoneCall/>, label: 'ارتباط', path: '/connect', targetSegment: 'connect'},
    ]
    return (
        // header
        <>
            <header className={'header py-4 container'}>
                <nav className={'navbar navbar-dark navbar-expand-md shadow'}>
                    <section className={'container-fluid'}>
                        <NavLink to={'/'} className={'navbar-brand'}>
                            <img alt={'logo'} src={logo} className={'logo'}/>
                        </NavLink>
                        <IconBrandJuejin className={'d-md-none d-inline-block align-middle'} color={'#FEFEFE'}/>
                        <section className={'collapse navbar-collapse justify-content-end'}>
                            <ul className={'navbar-nav nav'}>
                                {links.map((l, i) =>
                                    <HeaderLink key={i} {...l} />
                                )}
                            </ul>
                        </section>
                    </section>
                </nav>
                <section className="container mobile-menu">
                    <div
                        className="header-mobile rounded rounded-5 rounded-bottom-0 py-2 pt-4 w-100 d-md-none d-inline-block position-fixed bottom-0 end-0">
                        <div className="container px-4">
                            <div className="d-flex align-items-center justify-content-center">
                                {links.map((l, i) =>
                                    <MobileNav key={i} {...l} />
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header;