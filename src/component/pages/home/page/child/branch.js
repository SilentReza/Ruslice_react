// style
import './../../style/style.css'
// router
import {Link} from "react-router-dom";

const Branch = (props) => {
    return (
        <>
            <Link to={props.branch.link}
                  className={'text-decoration-none'}>
                <div className={'card card-body shadow border-0'}>
                    <div className={'card-image'}>
                        <img alt={'cafe'} src={props.branch.image} className={'branch-img rounded rounded-3'}/>
                    </div>
                    <div className={'card-texts mt-3'}>
                        <p className={'card-title fw-bold h4'}>{props.branch.title}</p>
                        <div className={'d-flex justify-content-between align-items-center'}>
                            <p className={'card-text mb-0'}>{props.branch.subtitle}</p>
                            <Link to={props.branch.link} className={'btn btn-outline-site'}>
                                مشاهده منو
                            </Link>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Branch;