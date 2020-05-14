export default class TasksModel {
  constructor() {
    if (!localStorage.getItem("tasks")) {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  }

  _onDataChange(data) {
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

    this._onDataChange(data);
  }

  bindTasksListChanged(callback) {
    this.onTasksListChanged = callback;
  }
}
