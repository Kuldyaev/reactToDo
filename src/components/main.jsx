import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import Row from "react-bootstrap/Row";
import {
  Form,
  Modal,
  Button,
  Badge,
  FormGroup,
  ModalBody,
  ModalHeader,
  ModalTitle,
  Col,
  Table,
} from "react-bootstrap";

import EditTaskModal from './editTaskModal'

const Main = function Main() {
  const [newTaskModalShowed, setNewTaskModalShowed] = useState(false);

  const isAuthorized = useSelector((state) => state.users.isAuthorized);
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.tasks.tasks);
  
  const [currentTask, setCurrentTask] = useState(null);
  const [editTaskModalShowed, setEditTaskModalShowed] = useState(false);

  useEffect(() => {
    !isAuthorized && navigate("/login");
  }, []);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = {
      title: form.title.value,
      description: form.description.value,
      priority: form.priority.value,
      status: form.status.value,
      executor: form.executor.value,
      creator: "current user",
      date_end: form.date_end.value,
    };
    console.log(formData);
  };

  const handleEditTask = (event) => {
    event.preventDefault();
    const task = event.currentTarget;
    setCurrentTask(tasks.filter((task) => task.id === Number(event.currentTarget.dataset.taskid))[0]);
    setEditTaskModalShowed(true);
    console.log(Number(event.currentTarget.dataset.taskid));
  };

  useEffect(() => console.log(currentTask), [currentTask]);

  return (
    <main>
      <div className="tasksDeskHeader">
        <span class="badge bg-primary mybadge">
           сегодня <br /> {moment().format("DD-MM-YYYY")}
        </span>
        <h2 id="formtitle">
          <Badge bg="secondary">Список задач:</Badge>
        </h2>
        <Button onClick={() => setNewTaskModalShowed(true)} variant="dark">
          + cоздать новую задачу
        </Button>
      </div>
      <div className="taskDesk">
        {!Boolean(tasks.length) && <p>В настоящее время у вас нет задач</p>}
        <Table striped bordered hover>
          {Boolean(tasks.length) && (
            <thead>
              <tr>
                <th>Задача</th>
                <th>Приоритет</th>
                <th>Дата окончания</th>
                <th>Ответственный</th>
                <th>Статус</th>
              </tr>
            </thead>
          )}
          <tbody>
            {Boolean(tasks.length) &&
              tasks.map((task) => (
                <tr key={task.id} onClick={handleEditTask} data-taskID={task.id}>
                  <td class='notake'>{task.title}</td>
                  <td class='notake'>{task.priority.name}</td>
                  <td class='notake'>{task.date_end}</td>
                  <td class='notake'>{task.executor.name}</td>
                  <td class='notake'>{task.status.name}</td>
                </tr>
              ))}
          </tbody>
        </Table>
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
          <Form onSubmit={handleSubmitForm}>
            <FormGroup controlId="title">
              <Form.Label>Заголовок</Form.Label>
              <Form.Control
                type="text"
                placeholder="Заголовок для задачи"
                required
              />
            </FormGroup>
            <FormGroup controlId="description">
              <Form.Label>Описание</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Краткое описание для задачи"
                required
              />
            </FormGroup>
            <FormGroup controlId="executor">
              <Form.Label>Исполнитель</Form.Label>
              <Form.Control
                type="text"
                placeholder="Назначенный исполнитель для задачи"
                required
              />
            </FormGroup>
            <Row className="mb-3">
              <FormGroup
                as={Col}
                md="5"
                controlId="priority"
                className="horizontalBlockItem"
              >
                <Form.Label>Приоритет</Form.Label>
                <Form.Select aria-label="Приоритет задачи">
                  <option>Низкий</option>
                  <option value="1">Высокий</option>
                  <option value="2">Средний</option>
                </Form.Select>
              </FormGroup>

              <FormGroup
                as={Col}
                md="5"
                controlId="status"
                className="horizontalBlockItem"
              >
                <Form.Label>Статус</Form.Label>
                <Form.Select aria-label="Приоритет задачи">
                  <option>к выполнению</option>
                  <option value="1">выполняется</option>
                  <option value="2">выполнена</option>
                  <option value="3">отменена</option>
                </Form.Select>
              </FormGroup>
              <FormGroup
                as={Col}
                md="5"
                controlId="date_end"
                className="horizontalBlockItem"
              >
                <Form.Label>Дата окончания</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="дата завершения"
                  required
                />
              </FormGroup>
            </Row>
            <Row className="mb-2">
              <FormGroup md="5" as={Col}>
                <Button
                  variant="secondary"
                  onClick={() => setNewTaskModalShowed(false)}
                >
                  Отмена
                </Button>
              </FormGroup>
              <FormGroup md="5" as={Col}>
                <Button variant="primary" type="submit">
                  Создать задачу
                </Button>
              </FormGroup>
            </Row>
          </Form>
        </ModalBody>
      </Modal>

      <EditTaskModal editTaskModalShowed={editTaskModalShowed} setEditTaskModalShowed={setEditTaskModalShowed} task={currentTask} />
    </main>
  );
};
export default Main;
