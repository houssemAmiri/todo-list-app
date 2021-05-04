import React from "react";
import "../style/App.css";
import { useHistory } from "react-router-dom";
import { HeaderText } from "../constants/text";
interface Props {
  logout: () => void;
  isAuthentificated: boolean;
}
const Header: React.FC<Props> = ({ logout, isAuthentificated }) => {
  let history = useHistory();

  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">{HeaderText.TITLE}</span>
      {isAuthentificated && (
        <span
          className="span"
          onClick={() => {
            history.push("/");

            logout();
          }}
        >
          {HeaderText.LOGOUT}
        </span>
      )}
    </nav>
  );
};
export default Header;
