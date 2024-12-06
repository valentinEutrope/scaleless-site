
import { ReactElement } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

interface LayoutInterface {
  children: ReactElement;
}

const Layout = ({ children }: LayoutInterface) => {
  return (
    <>
      <Navbar />
      <div className="layout">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
