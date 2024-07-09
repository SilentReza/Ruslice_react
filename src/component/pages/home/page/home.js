// style
import '../../../layout/header/style/header.css';
// logo
import Logo from '../../../../global/image/client/logo.png'
// router
import {Link} from "react-router-dom";
// icons
import {
    IconBrandJuejin,
} from "@tabler/icons-react";

const HeaderHome = () => {
    return (
        <>
            <section className={'header py-4 container'}>
                <nav className={'navbar navbar-dark navbar-expand-md shadow'}>
                    <section className={'container-fluid'}>
                        <Link to={'/'} className={'navbar-brand me-0'}>
                            <img alt={'logo'} src={Logo} className={'logo'}/>
                        </Link>
                        <IconBrandJuejin
                            className={'d-md-none d-inline-block align-middle'} color={'#FEFEFE'}
                        />
                        <section id={'page-collapse'} className={'collapse navbar-collapse justify-content-end'}>
                            <ul className={'navbar-nav nav pe-1 mt-lg-0 mt-2'}>
                                <li className={'nav-item'}>
                                    <Link id={'cafe'} to={'/branch/cafe'} className={'nav-link'}>
                                        کافه
                                    </Link>
                                </li>
                                <li className={'nav-item'}>
                                    <Link id={'restaurant'} to={'/branch/restaurant'} className={'nav-link'}>
                                        رستوران
                                    </Link>
                                </li>
                            </ul>
                        </section>
                    </section>
                </nav>
            </section>
        </>
    )
}

export default HeaderHome;