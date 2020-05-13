export default class TasksController {
  constructor(model, view, pubsub) {
    this.model = model;
    this.view = view;
    this.pubsub = pubsub;

    this.pubsub.subscribe("renderTasks", this.handlerRenderTasks.bind(this));

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
    this.view.bindRenderAddForm(this.handlerRenderAddForm.bind(this));
    this.view.bindRenderEditForm((id) => {
      this.handlerRenderEditForm.call(this, id);
    });
    // this.listView.bindCreateEditingForm(
    //   this.handleCreateEditingForm.bind(this)
    // );
    // this.listView.bindEditUser(this.handleEditUser.bind(this));
  }

  handlerRenderAddForm() {
    this.pubsub.publish("renderAddForm");
  }

  handlerRenderEditForm(id) {
    this.pubsub.publish("renderEditForm", id);
  }
}
