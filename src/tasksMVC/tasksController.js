export default class TasksController {
  constructor(model, view, pubsub) {
    this.model = model;
    this.view = view;
    this.pubsub = pubsub;

    this.pubsub.subscribe("renderTasks", this.handlerRenderTasks.bind(this));
    this.pubsub.subscribe("renderError", this.handlerRenderError.bind(this));

    this.handlerRenderTasks();

    this.model.bindTasksListChanged(this.onTasksListChanged.bind(this));
  }

  handlerRenderError() {
    this.view.bindRenderError();
  }

  onTasksListChanged(data) {
    this.view.renderTasks(data);
  }

  async deleteHandle(id) {
    await this.model.deleteTask(id);
    this.handleCloseEditForm(id);
  }

  async handlerRenderTasks() {
    const data = await this.model.getTasksData();
    this.view.renderTasks(data);
    this.view.bindDeleteTask(this.deleteHandle.bind(this));
    this.view.bindRenderAddForm(this.handlerRenderAddForm.bind(this));
    this.view.bindRenderEditForm((id) => {
      this.handlerRenderEditForm.call(this, id);
    });
  }

  handlerRenderAddForm() {
    this.pubsub.publish("renderAddForm");
  }

  handlerRenderEditForm(id) {
    this.pubsub.publish("renderEditForm", id);
  }

  handleCloseEditForm(id) {
    this.pubsub.publish("closeEditForm", id);
  }
}
