import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import Discover from "../pages/Discover";
import TopNavbar from "../components/TopNavbar";
import TestPage from "../pages/Test";
import Facilator from "../pages/Facilator";


function RouterConfig({}) {
    return (
        <BrowserRouter>
            <TopNavbar />
            <Routes>
                <Route path="/" element={<MainPage></MainPage>} >
                </Route> 
                <Route path="discover" >
                    <Route index element={<Discover></Discover>} /> 
                </Route> 
                <Route path="facilator" >
                    <Route index element={<Facilator></Facilator>} />
                </Route> 
                <Route path="contact" element={<>Contact</>}>
                </Route>
                <Route path="test" element={<TestPage />}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RouterConfig;