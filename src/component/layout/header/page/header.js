// style
import '../style/header.css';
// logo
import Logo from '../../../../global/image/client/logo.png'
// router
import {Link, useParams} from "react-router-dom";
// component
import NavLink from "./child/links/navLink";
import CategoryNav from "./child/category/categoryNav";
// icons
import {
    IconBrandJuejin,
    IconChevronLeft
} from "@tabler/icons-react";
// hook
import {useEffect, useState} from "react";
// methods
import request from "../../../../repository/request";
import {routes} from "../../../actions/route/route";


const Header = (props) => {
    const [categories, setCategory] = useState([])
    const {branchName} = useParams();
    useEffect(() => {
        const options = {}
        request.get(`${routes.api[0].address}/categories`, options
            , (result) => {
                let newArray = [];
                newArray = result.data;
                newArray = newArray.filter((item) => item.type === branchName);
                setCategory(newArray)
                document.getElementById('category-toggler').click()
            }
        )
    }, [branchName]);

    return (
        <>
            <header className={'header py-4 container'}>
                <nav className={'navbar fixed-top bg-dark navbar-dark navbar-expand-md shadow rounded-bottom-5'}>
                    <section className={'container-fluid'}>
                        <Link to={'/'} className={'navbar-brand me-0'}>
                            <img alt={'logo'} src={Logo} className={'logo'}/>
                        </Link>
                        <IconBrandJuejin
                            data-bs-target={'#page-collapse'}
                            data-bs-toggle={'collapse'}
                            className={'d-md-none d-inline-block align-middle'} color={'#FEFEFE'}
                        />
                        <section id={'page-collapse'} className={'collapse show navbar-collapse justify-content-end'}>
                            <ul className={'navbar-nav nav pe-1 mt-lg-0 mt-2'}>
                                {categories.map((category, indexNav) =>
                                    <>
                                        {indexNav <= 2 ? (
                                            <>
                                                <NavLink changeCategory={props.changeCategory} select={props.select}
                                                         key={category.id} category={category}/>
                                            </>
                                        ) : null}
                                    </>
                                )}
                                <li className={'nav-item'}>
                                    <Link id={'category-toggler'} data-bs-toggle={'modal'}
                                          to={'#category-modal'}
                                          className={'nav-link'}>
                                        انتخاب
                                        <IconChevronLeft size={12}/>
                                    </Link>
                                </li>
                            </ul>
                        </section>
                    </section>
                </nav>
                <CategoryNav select={props.select} changeCategory={props.changeCategory} categories={categories}/>
            </header>
        </>
    )
}

export default Header;