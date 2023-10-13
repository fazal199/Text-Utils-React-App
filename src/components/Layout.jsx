import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
     <Navbar titlename="Text-Utils" flink="Home" slink="About"/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default Layout;

