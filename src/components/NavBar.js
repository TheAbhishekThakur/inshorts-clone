import "./NavBar.css";
import HamburgerDrawer from "./HamburgerDrawer";

const NavBar = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="icon">
        <HamburgerDrawer
          setCategory={setCategory}
        />
      </div>
      <img
        style={{ cursor: "pointer" }}
        src="assets/logo_inshorts.png"
        height="80px"
        alt="logo"
      />
    </div>
  );
};

export default NavBar;
