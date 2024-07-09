// component
import HeaderHome from "../../component/pages/home/page/home";
// divider
import divider from "../../global/image/client/divider.png";
// option
import sliderOptions from "../../component/actions/branch/options";
// component
import Branch from "../../component/pages/home/page/child/branch";
// hook
import {useEffect} from "react";
// animate
import AOS from 'aos'
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init()
    }, []);
    return (
        <>
            <HeaderHome/>
            <article id={'select-branch'} className={'container my-3'}>
                <h1 className={'card-title text-white text-center h2'}>انتخاب منو</h1>
                <div className={'d-flex justify-content-center'}>
                    <img src={divider} alt={'divider'} className={'divider'}/>
                </div>
                <div className={'row justify-content-center mt-4'}>
                    {sliderOptions.map((option) => (
                        <div data-aos="fade-up" data-aos-duration="1500" className={'col-lg-5 mb-4'}>
                            <Branch branch={option}></Branch>
                        </div>
                    ))}
                </div>
            </article>
        </>
    )
}

export default Home;