import React from "react";
import "../style/App.css";
import { useHistory } from "react-router-dom";
interface Props {
  logout: () => void;
  isAuthentificated: boolean;
}
const Header: React.FC<Props> = ({ logout, isAuthentificated }) => {
  let history = useHistory();

  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Todo App</span>
      {isAuthentificated && (
        <span
          className="span"
          onClick={() => {
            history.push("/");

            logout();
          }}
        >
          Deconnexion
        </span>
      )}
    </nav>
  );
};
export default Header;
