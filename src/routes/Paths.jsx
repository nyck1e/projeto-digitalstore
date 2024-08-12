import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import Layout from "../pages/Layout";
import NotFound from "../pages/NotFound";
import ProductViewPage from "../pages/ProductViewPage";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/produtos" element={<ProductListingPage/>}/>
                        <Route path="/produto" element={<ProductViewPage/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths;