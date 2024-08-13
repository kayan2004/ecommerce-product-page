import { useMediaQuery } from "react-responsive";
import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";

const NavBar = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1000px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 999px)" });

  return (
    <>
      {isDesktopOrLaptop && <DesktopNavBar />}
      {isMobile && <MobileNavBar />}
    </>
  );
};

export default NavBar;
