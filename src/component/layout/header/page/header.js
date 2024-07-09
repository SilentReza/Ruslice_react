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
    IconChevronLeft, IconCoffee, IconToolsKitchen
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
                <nav className={'navbar bg-dark navbar-dark navbar-expand-md shadow'}>
                    <section className={'container-fluid'}>
                        <Link to={'/'} className={'navbar-brand me-0'}>
                            <img alt={'logo'} src={Logo} className={'logo'}/>
                        </Link>
                        <Link
                            to={branchName === 'restaurant' ? '/branch/cafe' : '/branch/restaurant'}
                            className={'btn btn-outline-site py-2 font-medium me-0 navbar-toggler'}>
                            {branchName === 'restaurant' ?
                                (
                                    <>
                                        <IconCoffee
                                            className={'d-md-none d-inline-block align-middle ms-1'}
                                        />
                                        مشاهده کافه
                                    </>
                                ) :
                                (
                                    <>
                                        <IconToolsKitchen
                                            className={'d-md-none d-inline-block align-middle ms-1'}
                                        />
                                        مشاهده رستوران
                                    </>
                                )
                            }
                        </Link>
                        <section id={'page-collapse'}
                                 className={'collapse show navbar-collapse justify-content-end'}>
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