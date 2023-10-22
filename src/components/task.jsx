const Task = function Task({ task }) {
  return (
    <div className="task">
      <div className="taskDetail ttitle">{ task.title}</div>
      <div className="taskDetail prioritet">{ task.prioritet}</div>
      <div className="taskDetail finish">{ task.comletedAd}</div>
      <div className="taskDetail actor">{ task.actor}</div>
      <div className="taskDetail status">{ task.status}</div>
    </div>
  );
};
export default Task;
