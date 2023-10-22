import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Task from "./task";
import TaskTableHeader from "./taskTableHeader";

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
    </main>
  );
};
export default Main;
