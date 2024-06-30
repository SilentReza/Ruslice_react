// style
import './../css/header.css';
// icons
import {IconBrandJuejin} from "@tabler/icons-react";
// link
import {NavLink} from "react-router-dom";
// logo
import logo from '../../../../original/image/global/logo.png'
// components
import MobileNav from "./child/mobileNav";
import HeaderLink from "./child/navLink";
// routes
import {routes} from "../../../actions/route/route";

const Header = () => {
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
                                {routes.client.map((link, i) =>
                                    <HeaderLink key={i} {...link} />
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
                                {routes.client.map((link, i) =>
                                    <MobileNav key={i} {...link} />
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