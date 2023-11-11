import { Outlet } from "react-router-dom";
import Navbar from "../Sheard_Components/Navbar";
import Footer from "../Sheard_Components/Footer";
import { Toaster } from "react-hot-toast";


const MainLeaout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default MainLeaout;