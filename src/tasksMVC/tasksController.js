export default class TasksController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.handlerRenderTasks();

    this.model.bindTasksListChanged(this.onTasksListChanged.bind(this));
    this.onTasksListChanged(this.model._data);
  }

  onTasksListChanged(data) {
    this.view.renderTasks(data);
  }

  handleDeleteTask(id) {
    this.model.deleteTask(id);
  }

  handlerRenderTasks() {
    this.view.renderTasks(this.model._data);
    this.view.bindDeleteTask(this.handleDeleteTask.bind(this));
    // this.listView.bindCreateEditingForm(
    //   this.handleCreateEditingForm.bind(this)
    // );
    // this.listView.bindEditUser(this.handleEditUser.bind(this));
    // this.listView.bindRenderFormPage(this.handlerRenderForm.bind(this));
  }
}
