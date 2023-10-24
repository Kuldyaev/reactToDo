import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Task from "./task";
import TaskTableHeader from "./taskTableHeader";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {  FormGroup, ModalBody, ModalHeader, ModalTitle} from "react-bootstrap";

const Main = function Main() {
  const isAuthorized = useSelector((state) => state.users.isAuthorized);
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    !isAuthorized && navigate("/login");
  }, []);

  return (
    <main>
      <div className="taskDesk">
        <h3>Список задач:</h3>
        {!Boolean(tasks.length) && <p>В настоящее время у вас нет задач</p>}
        {Boolean(tasks.length) && <TaskTableHeader />}
        {Boolean(tasks.length) && tasks.map((task) => <Task task={task} />)}
      </div>
      <Modal show={false} centered>
        <ModalHeader closeButton>
          <ModalTitle>Новая задача</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup controlId="formBasicEmail">
              <Form.Label>Email Adress </Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-muted'>We'll never share your email with anyone else</Form.Text>
            </FormGroup>
            <FormGroup controlId="formBasicPassword">
              <Form.Label>Password </Form.Label>
              <Form.Control type='Password' placeholder='Password' />
              <Form.Text className='text-muted'>We'll never share your email with anyone else</Form.Text>
            </FormGroup>
          </Form>
        </ModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>console.log('closeBtn')}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
};
export default Main;
