import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="container mx-auto px-5">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
