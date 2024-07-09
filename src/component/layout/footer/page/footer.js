// style
import '../style/footer.css'
// router
import {Link} from "react-router-dom";
// component
import {Modal} from "./child/child";

const Footer = () => {
    return (
        <>
            <footer id='footer' className='footer mb-3'>
                <p className="my-md-3 text-center card-text my-4 mb-md-3 mb-0">
                    <Link to={'#progogram-modal'}
                             data-bs-toggle="modal"
                             className="card-text text-decoration-none">
                        <span>ساخته شده با</span>
                        <span>🧡</span>
                        <span>توسط تیم</span>
                        <span> ProGoGram </span>
                    </Link>
                </p>
                <Modal/>
            </footer>
        </>
    )
}

export default Footer;