// router add
import {Route, Routes} from "react-router-dom";
// routes
import {routes} from "../../actions/route/route";
// components
// import {Home} from "../../../pages/home/page/home";
// import {About} from "../../../pages/about/page/about";
// import {Gallery} from "../../../pages/gallery/page/gallery";
// import {Brnach} from "../../../pages/branch/page/branch";
// import {Menu} from "../../../pages/menu/page/menu";
// import {Error} from "../../../pages/error/page/page";
// import {GoogleCallback} from "../../../pages/auth/page/google/googleCallback";
// import {Panel} from "../../../pages/auth/page/panel/panel";
// import {Game} from "../../../pages/game/pages/game";
// import {Music} from "../../../pages/auth/page/panel/music";

export const PageRouter = (props) => {
    return (
        // routing pages
        <main>
            <Routes>
                {/*<Route element={<Home/>} path={routes[0].address}/>*/}
                {/*<Route element={<About/>} path={routes[1].address}/>*/}
                {/*<Route element={<Gallery/>} path={routes[2].address}/>*/}
                {/*<Route element={<Brnach/>} path={routes[3].address}/>*/}
                {/*<Route element={<Menu/>} path={routes[4].address}/>*/}
                {/*<Route element={<Game/>} path={routes[10].address}/>*/}
                {/*<Route element={<Error/>} path={'*'}/>*/}
            </Routes>
        </main>
    )
}