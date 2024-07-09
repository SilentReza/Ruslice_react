// image
import Logo from "./../../../../../../../global/image/client/logo.png";

const Category = (props) => {
    return (
        <div className={'card card-body shadow'}>
            <div className={'card-content text-center'}>
                <img src={props.category.icon ? props.category.icon : Logo} alt={'logo'} className={'logo'}/>
                <p className={'text-white text-center fw-bold mb-0 mt-2'}>{props.category.title}</p>
            </div>
        </div>
    )
}

export default Category;