import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import RouterNav from "./RouterNav";
import TopPage from "../6/TopPage";
import ArticlePage from "../6/ArticlePage";
import AboutPage from "../6/AboutPage";

const routesLink = createBrowserRouter(
    createRoutesFromElements(
        // 상위 경로 추가
        <Route path="/" element={<RouterNav />}>
            {/* <Route path="" element={<TopPage />} /> */}
            <Route index element={<TopPage />} />
            <Route path="article" element={<ArticlePage />} />
            <Route path="about" element={<AboutPage />} />
        </Route>
    )
);

export default routesLink;
