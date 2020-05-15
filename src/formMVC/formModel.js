export default class FormModel {
  constructor() {
    this.serviceData;
    this.url = "http://localhost:3000";
  }

  _createTaskDate() {
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

  async _fetchServiceData() {
    const response = await fetch(`${this.url}/services`);
    return await response.json();
  }

  async getServiceData() {
    if (!this.serviceData) {
      this.serviceData = await this._fetchServiceData();
    }

    return this.serviceData;
  }

  getServiceTasks(serviceType) {
    const service = this.serviceData.find((el) => el.type === serviceType);
    return service.tasks;
  }

  async getTasksData() {
    const response = await fetch(`${this.url}/tasks`);
    return await response.json();
  }

  async getTask(id) {
    const response = await fetch(`${this.url}/tasks/${id}`);
    return await response.json();
  }

  async addTask({ location, service, taskType, description = "", fullText }) {
    const task = {
      date: this._createTaskDate(),
      location,
      service,
      taskType,
      description,
      fullText,
    };

    await fetch(`${this.url}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(task),
    });
  }

  async editTask({
    id,
    date,
    location,
    service,
    taskType,
    description = "",
    fullText,
  }) {
    const task = {
      id,
      date,
      location,
      service,
      taskType,
      description,
      fullText,
    };

    await fetch(`${this.url}/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(task),
    });
  }
}
