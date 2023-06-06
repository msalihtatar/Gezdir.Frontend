import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import Discover from "../pages/Discover";
import Location from "../pages/Location";
import TopNavbar from "../components/TopNavbar";


function RouterConfig({}) {
    return (
        <BrowserRouter>
            <TopNavbar />
            <Routes>
                <Route path="/" element={<MainPage></MainPage>} >
                </Route> 
                <Route path="discover" >
                    <Route index element={<Discover></Discover>} /> 
                    <Route path=":id"  element={<Location ></Location>} />
                </Route> 
                <Route path="facilator" >
                    <Route index element={<MainPage></MainPage>} />
                    <Route path=":id"  element={<MainPage ></MainPage>} />
                </Route> 
                <Route path="contact" element={<>Contact</>}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RouterConfig;