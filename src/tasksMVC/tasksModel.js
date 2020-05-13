export default class TasksModel {
  constructor() {
    if (!localStorage.getItem("tasks")) {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  }

  _onChangeData(data) {
    localStorage.setItem("tasks", JSON.stringify(data));
    this.onTasksListChanged(this._data);
  }

  get _data() {
    return JSON.parse(localStorage.getItem("tasks"));
  }

  getTask(id) {
    return this._data.find((el) => (el.id = id));
  }

  deleteTask(id) {
    const data = this._data.filter((el) => el.id !== id);

    this._onChangeData(data);
  }

  editTask({ id, location, service, taskType, description = "", fullText }) {
    const data = this._data.map((task) =>
      task.id === id
        ? {
            id,
            date: this.createTaskDate(),
            location,
            service,
            taskType,
            description,
            fullText,
          }
        : task
    );
    this._onDataChange(data);
  }

  bindTasksListChanged(callback) {
    this.onTasksListChanged = callback;
  }
}
