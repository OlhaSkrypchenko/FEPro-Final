export default class FormController {
  constructor(model, view, pubsub) {
    this.model = model;
    this.view = view;
    this.pubsub = pubsub;

    this.pubsub.subscribe("renderAddForm", this.handleRenderAddForm.bind(this));
    this.pubsub.subscribe("renderEditForm", (id) => {
      this.handleRenderEditForm(id);
    });
  }

  handleRenderAddForm() {
    this.view.renderAddForm(this.model.services);
    this.handlerBindAddTask();
    this.handlerRenderServiceTaskField();
  }

  handleRenderEditForm(id) {
    this.view.renderEditForm(this.model.getTask(id), this.model.services);
    this.handlerBindEditTask();
    this.handlerRenderServiceTaskField(this.model.getTask(id).taskType);
  }

  handleGetTasks(service) {
    return this.model.getTasks(service);
  }

  handleAddTask(task) {
    this.model.addTask(task);
  }

  handleEditTask(task) {
    this.model.editTask(task);
  }

  handlerBindAddTask() {
    this.view.bindAddTask(
      this.handleAddTask.bind(this),
      this.handlerRenderTasks.bind(this)
    );
  }

  handlerBindEditTask() {
    this.view.bindEditTask(
      this.handleEditTask.bind(this),
      this.handlerRenderTasks.bind(this)
    );
  }

  handlerRenderServiceTaskField(checkedTypeRadio) {
    this.view.bindRenderServiceTaskField(
      this.handleGetTasks.bind(this),
      checkedTypeRadio
    );
  }

  handlerRenderTasks() {
    this.pubsub.publish("renderTasks");
  }
}
