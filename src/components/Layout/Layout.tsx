
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="layout">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
