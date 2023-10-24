import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import Task from "./task";
import TaskTableHeader from "./taskTableHeader";
import {
  Form,
  Modal,
  Button,
  Badge,
  FormGroup,
  ModalBody,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";

const Main = function Main() {
  const [newTaskModalShowed, setNewTaskModalShowed] = useState(false);
  const isAuthorized = useSelector((state) => state.users.isAuthorized);
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    !isAuthorized && navigate("/login");
  }, []);

  return (
    <main>
      <div className="tasksDeskHeader">
        <h2 id="formtitle">
          <Badge text="dark">{'сегодня ' + moment().format("DD-MM-YYYY")}</Badge>
        </h2>  
        <h2 id="formtitle">
          <Badge bg="secondary">Список задач:</Badge>
        </h2>
        <Button onClick={() => setNewTaskModalShowed(true)} variant="dark">
          + cоздать новую задачу
        </Button>
      </div>
      <div className="taskDesk">
        {!Boolean(tasks.length) && <p>В настоящее время у вас нет задач</p>}
        {Boolean(tasks.length) && <TaskTableHeader />}
        {Boolean(tasks.length) &&
          tasks.map((task) => <Task task={task} key={task.id} />)}
      </div>
      <Modal
        show={newTaskModalShowed}
        onHide={() => setNewTaskModalShowed(false)}
        centered
      >
        <ModalHeader closeButton>
          <ModalTitle>Новая задача</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup controlId="title">
              <Form.Label>Заголовок</Form.Label>
              <Form.Control type="text" placeholder="Заголовок для задачи" />
            </FormGroup>
            <FormGroup controlId="description">
              <Form.Label>Описание</Form.Label>
              <Form.Control
                type="text"
                placeholder="Краткое описание для задачи"
              />
            </FormGroup>
            <FormGroup className="horizontalBlock">
              <FormGroup controlId="priority">
                <Form.Label>Приоритет</Form.Label>
                <Form.Control type="text" placeholder="приоритет задачи" />
              </FormGroup>
              <FormGroup controlId="status">
                <Form.Label>Статус</Form.Label>
                <Form.Control type="text" placeholder="статус задачи" />
              </FormGroup>
            </FormGroup>
          </Form>
        </ModalBody>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setNewTaskModalShowed(false)}
          >
            Отмена
          </Button>
          <Button variant="primary">Создать задачу</Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
};
export default Main;
