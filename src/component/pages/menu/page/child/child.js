// image
import Logo from "./../../../../../global/image/client/logo.png";
import About from "./../../../../../global/image/client/about (1).jpg";

const Item = (props) => {
    return (
        <>
            <div data-aos="fade-up"
                 data-aos-duration="1500"
                 className={'card shadow mb-4 rounded rounded-5'}>
                <div className={'card-image position-relative'}>
                    <img loading={'lazy'} alt={props.item.title} src={props.item.image ? props.item.image : About}
                         className={'rounded rounded-5 item-card'}/>
                    <div className={'item-toggle rounded-circle position-absolute shadow'}>
                        <img alt={'logo'} src={Logo} className={'logo-small'}/>
                    </div>
                </div>
                <div className={'card-body'}>
                    <p className={'card-title'}>{props.item.title}</p>
                    <div className={'d-flex align-items-center justify-content-between'}>
                        <p className={'card-description text-white mb-0'}>
                            {props.item.description}
                        </p>
                        <button className={'btn btn-outline-site'}>
                            {props.item.price === 1111 || props.item.price === 111 || props.item.price === 11111 ? 'نامشخص' : props.item.price}
                            <span className={'me-1'}>
                                {props.item.price === 1111 || props.item.price === 111 || props.item.price === 11111 ? '' : 'تومان'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item