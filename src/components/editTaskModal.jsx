import { useEffect, useState } from "react";
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
  Row
} from "react-bootstrap";

const EditTaskModal = function EditTaskModal({ editTaskModalShowed, setEditTaskModalShowed, task } ) {

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

  useEffect(()=>console.log(task),[task])


    return (
    <Modal
        show={editTaskModalShowed}
        onHide={() => setEditTaskModalShowed(false)}
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
                  onClick={() => setEditTaskModalShowed(false)}
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
  );
};

export default EditTaskModal;
