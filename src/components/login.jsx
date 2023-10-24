import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authorize } from "./../reducers/users";
import { useNavigate } from 'react-router-dom';

import { Button, FormGroup, Badge, Form} from "react-bootstrap";

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
        <h3 id="formtitle"><Badge bg="secondary">аутентификация</Badge></h3>
        
        <Form>
            <FormGroup controlId="formBasicEmail">
              <Form.Label>Email Adress </Form.Label>
              <Form.Control type='email' placeholder='Enter email'  onChange={handleUsernameChange} />
              <Form.Text className='text-muted'>We'll never share your email with anyone else</Form.Text>
            </FormGroup>
            <FormGroup controlId="formBasicPassword">
              <Form.Label>Password </Form.Label>
            <Form.Control type='Password' placeholder='Password' onChange={handlePassChange} />
          </FormGroup>
            <FormGroup controlId="formBasicPassword" className='btn-place'>
              <Button onClick={handleSubmit} variant="dark">Перейти к задачам</Button>
            </FormGroup>
        </Form>
        {wrongPassword && <p className="warning">неверный пароль</p>}
        {wrongUsername && <p className="warning">пользователя с таким логином не существует</p>}
      </div>
    </main>
  );
};

export default Login;
