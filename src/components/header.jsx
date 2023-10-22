import { unauthorize } from "./../reducers/users";
import { useSelector, useDispatch } from "react-redux";

const Header = function Header() {
  const isAuthorized = useSelector((state) => state.users.isAuthorized);
  const dispatch = useDispatch();

  function logout()  {
    dispatch(unauthorize());
    window.location.reload();
  }

  return (
    <header>
      <h2 className="headerBox1">
        <p className="letters">ToDo App</p>
      </h2>
      {isAuthorized && (
        <p className="logout" onClick={logout}>
          logout
        </p>
      )}
    </header>
  );
};

export default Header;
