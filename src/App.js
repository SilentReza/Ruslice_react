// global style
import './App.css';
// seo
import {Seo} from "./component/actions/seo/seo";
// global components
import Footer from "./component/layout/footer/page/footer";
import {PageRouter} from "./component/layout/router/router";

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
            <PageRouter/>
            <Footer/>
        </>
    );
}

export default App;
