import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function CustomerPage() {
  useAuth();
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
