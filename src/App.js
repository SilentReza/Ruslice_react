// global css
import './App.css';
// seo
import {Seo} from "./component/actions/seo/seo";
// global components
import {Modal} from "./component/layout/modal/page/modal";
import Footer from "./component/layout/footer/page/footer";
import {PageRouter} from "./component/layout/router/router";
import Header from "./component/layout/header/page/head";

function App() {
    return (
        <>
            <Seo
                title="روسلایس | تجربه بهترین ها"
                description="کافه رستوران روسلایس اولین بهترین کافه رستوران شهرستان مرند با بهترین متریال ها و زیباترین دکور ها"
                keywords="کافه رستوران روسلایس،روسلایس،کافه،رستوران،بهترین،متریال"
                type="webapp"
                name="progogram"
            />
            <Header/>
            <PageRouter/>
            <Modal/>
            <Footer/>
        </>
    );
}

export default App;
