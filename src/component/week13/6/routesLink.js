import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import RouterApp from "./RouterApp";
import TopPage from "./TopPage";
import ArticlePage from "./ArticlePage";
import AboutPage from "./AboutPage";

export const routesLink = createBrowserRouter(
    createRoutesFromElements(
        // 상위 경로 추가
        <Route path="/" element={<RouterApp />}>
            {/* <Route path="" element={<TopPage />} /> */}
            <Route index element={<TopPage />} />
            <Route path="article" element={<ArticlePage />} />
            <Route path="about" element={<AboutPage />} />
        </Route>
    )
);
