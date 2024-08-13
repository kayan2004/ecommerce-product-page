import { useRef } from "react";
import PropTypes from "prop-types";
import CloseIcon from "./CloseIcon";

const OpenIcon = ({ onClick }) => (
  <svg
    width="16"
    height="15"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    tabIndex="0"
    className="menu-icon"
  >
    <path
      d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
      fill="#69707D"
      fillRule="evenodd"
    />
  </svg>
);
OpenIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const MobileNavBar = () => {
  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current.showModal(); // Opens the dialog
  };

  const closeDialog = () => {
    dialogRef.current.close(); // Closes the dialog
  };
  return (
    <div className="header-left">
      <OpenIcon onClick={openDialog} />

      <dialog className="modal-nav" ref={dialogRef}>
        <CloseIcon onClick={closeDialog} />

        <nav className="nav">
          <ul>
            <li className="menu-item">Collections</li>
            <li className="menu-item">Men</li>
            <li className="menu-item">Women</li>
            <li className="menu-item">About</li>
            <li className="menu-item">Contact</li>
          </ul>
        </nav>
      </dialog>
      <h1>sneakers</h1>
    </div>
  );
};

export default MobileNavBar;
