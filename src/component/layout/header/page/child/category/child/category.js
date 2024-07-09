// image
import Logo from "./../../../../../../../global/image/client/logo.png";

const Category = (props) => {
    return (
        <div
            className={props.select === props.category.id ? 'card card-body select-category shadow' : 'card card-body shadow'}
            onClick={() => props.changeCategory(props.category.id, 'btn', props.category.title)}>
            <div className={'card-content text-center'}>
                <img src={props.category.icon ? props.category.icon : Logo} alt={'logo'} className={'logo-medium'}/>
                <p className={'text-white font-medium text-center fw-bold mb-0 mt-2'}>{props.category.title}</p>
            </div>
        </div>
    )
}

export default Category;