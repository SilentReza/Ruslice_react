// style
import '../style/menu.css'
// components
import Header from "../../../layout/header/page/header";
import Item from "./child/child";
// hook
import {useEffect, useState} from "react";
// slug
import {useParams} from "react-router-dom";
// method
import request from "./../../../../repository/request";
import {routes} from "../../../actions/route/route";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
// divider
import divider from "../../../../global/image/client/divider.png";

const MenuItems = () => {
    const [items, setItem] = useState([])
    const [array, setArray] = useState([]);
    const [select, setSelect] = useState(7);
    const [title, setTitle] = useState('کیک')
    const {branchName} = useParams();
    useEffect(() => {
        AOS.init()
        AOS.refresh();
        const options = {}
        request.get(`${routes.api[0].address}/${branchName}/items`, options
            , (result) => {
                let newArray = result.data;
                newArray = newArray.filter((item) => item.category_id === 7 && item.status === 1);
                setItem(newArray)
                setArray(result.data)
            }
        )
        if (branchName === 'restaurant') {
            setSelect(3)
            setTitle('فست فود')
        } else {
            setSelect(7)
            setTitle('کیک')
        }
    }, [branchName]);

    const changeCategory = (id, type, title) => {
        if (type === 'btn') {
            document.getElementById('category-toggler').click()
        }
        let newArray = array;
        newArray = newArray.filter((item) => item.category_id === id && item.status === 1);
        setItem(newArray);
        setSelect(id)
        setTitle(title)
    }
    return (
        <>
            <Header select={select} changeCategory={changeCategory}></Header>
            <article className={'container'}>
                <h5 className={'text-white fw-bold mb-0 text-center'}>{title}</h5>
                <div className={'d-flex justify-content-center'}>
                    <img src={divider} alt={'divider'} className={'divider'}/>
                </div>
                <section className={'row justify-content-center'}>
                    {items.map((item) => (
                        <>
                            <div className={'col-lg-3 col-md-6 col-11'}>
                                <Item key={item.id} item={item}/>
                            </div>
                        </>
                    ))}
                </section>
            </article>
        </>
    )
}

export default MenuItems