import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authorize } from "./../reducers/users";
import { useNavigate } from 'react-router-dom';

const Login = function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [wrongUsername, setWrongUsername] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    function handleSubmit(event) {
    setWrongUsername(false);
    setWrongPassword(false);
    event.preventDefault();
    if (users.filter((user) => user.login === username).length > 0) {
      let candidat = users.find((user) => user.login === username);
      if (candidat.pass === password) {
          dispatch(authorize());
          navigate("/");
      } else {
        setWrongPassword(true);
      }
    } else {
      setWrongUsername(true);
    }
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePassChange(event) {
    setPassword(event.target.value);
  }

  function optionList() {
    return Object.keys({ admin: "admin" }).map((u) => {
      return (
        <option value={u} key={u}>
          {u}
        </option>
      );
    });
  }

  return (
    <main>
      <div className="loginBlock">
        <h3 id="formtitle">аутентификация</h3>
        <form
          onSubmit={handleSubmit}
          className="loginForm"
          encType="multipart/form-data"
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            list="owners"
            className="loginFormItem"
            onChange={handleUsernameChange}
          />
          <datalist id="owners">{optionList()}</datalist>
          <input
            type="text"
            name="password"
            placeholder="Password"
            className="loginFormItem"
            onChange={handlePassChange}
          />
          <input type="submit" className="loginFormItem" value="Войти" />
        </form>
        {wrongPassword && <p className="warning">неверный пароль</p>}
        {wrongUsername && <p className="warning">неверный логин</p>}
      </div>
    </main>
  );
};

export default Login;
