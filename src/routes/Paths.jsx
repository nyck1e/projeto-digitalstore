import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import Layout from "../pages/Layout";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/produtos" element={<ProductListingPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths;