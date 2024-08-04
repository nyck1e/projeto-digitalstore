import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductViewPage from "../pages/ProductViewPage";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/produtos" element={<ProductViewPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths;