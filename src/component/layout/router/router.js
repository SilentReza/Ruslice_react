// router add
import {Route, Routes} from "react-router-dom";
// routes
import {routes} from "../../actions/route/route";
// component
import Home from "../../../pages/home/page";
import Menu from "../../../pages/menu/menu";
import Error from "../../../pages/error/error";
import Redirect from "../../../pages/redirect/redirect";

export const PageRouter = (props) => {
    return (
        // routing pages
        <main>
            <Routes>
                <Route element={<Home/>} path={routes.client[0].address}/>
                <Route element={<Menu/>} path={routes.client[1].address}/>
                <Route element={<Redirect/>} path={routes.redirect[0].address}/>
                <Route element={<Error/>} path={'*'}/>
            </Routes>
        </main>
    )
}