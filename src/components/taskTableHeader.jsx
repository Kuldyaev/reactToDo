const TaskTableHeader = function TaskTableHeader() {
  return (
    <div className="task">
      <div className="taskDetail ttitle">Задача</div>
      <div className="taskDetail prioritet">Приоритет</div>
      <div className="taskDetail finish">Дата окончания</div>
      <div className="taskDetail actor">Ответственный</div>
      <div className="taskDetail status">Статус</div>
    </div>
  );
};
export default TaskTableHeader;
