export default class TasksModel {
  constructor() {
    this.tasks = [
      {
        id: 0,
        location: "sd",
        service: "plumber",
        taskType: "dfdf",
        description: "dfdfvfdv",
        fullText: "Hello",
      },
      {
        id: 1,
        location: "sd",
        service: "plumber",
        taskType: "dfdf",
        description: "dfdfvfdv",
        fullText: "Hola",
      },
      {
        id: 2,
        location: "sd",
        service: "plumber",
        taskType: "dfdf",
        description: "dfdfvfdv",
        fullText: "Halo",
      },
    ];

    if (!localStorage.getItem("tasks")) {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
  }

  createTaskDate() {
    const currentDate = new Date();

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = days[currentDate.getDay()];

    const month = months[currentDate.getMonth()];

    const date = currentDate.getDate();

    const hours =
      currentDate.getHours() < 10
        ? `0${currentDate.getHours()}`
        : currentDate.getHours();

    const minutes =
      currentDate.getMinutes() < 10
        ? `0${currentDate.getMinutes()}`
        : currentDate.getMinutes();

    return `${day}, ${month} ${date}, ${hours}:${minutes}`;
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

  addTask({ location, service, taskType, description = "", fullText }) {
    const task = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      date: this.createTaskDate(),
      location,
      service,
      taskType,
      description,
      fullText,
    };

    localStorage.setItem("tasks", JSON.stringify([...this._data, task]));
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
