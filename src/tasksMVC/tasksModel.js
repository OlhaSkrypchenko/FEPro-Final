export default class TasksModel {
  constructor() {
    this.url = "http://localhost:3000";
  }

  async getTasksData() {
    const response = await fetch(`${this.url}/tasks`);
    return await response.json();
  }

  async deleteTask(id) {
    await fetch(`${this.url}/tasks/${id}`, {
      method: "DELETE",
    });

    const data = await this.getTasksData();
    this.onTasksListChanged(data);
  }

  bindTasksListChanged(callback) {
    this.onTasksListChanged = callback;
  }
}
