// router add
import {Route, Routes} from "react-router-dom";
// routes
import {routes} from "../../actions/route/route";
// component
import Home from "../../../pages/home/page";

export const PageRouter = (props) => {
    return (
        // routing pages
        <main>
            <Routes>
                <Route element={<Home/>} path={routes.client[0].address}/>
            </Routes>
        </main>
    )
}