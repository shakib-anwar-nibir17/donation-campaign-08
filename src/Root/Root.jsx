import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navabr/Navbar";

const Root = () => {
  return (
    <div>
      <h2 className="text-4xl py-6 text-center bg-red-400">hello</h2>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
