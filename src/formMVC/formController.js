export default class FormController {
  constructor(model, view, pubsub) {
    this.model = model;
    this.view = view;
    this.pubsub = pubsub;

    this.pubsub.subscribe("renderForm", this.handleRenderForm.bind(this));
  }

  handleRenderForm() {
    this.view.renderForm(this.model.services);
    this.handlerBindAddTask();
    this.handlerRenderServiceTaskField();
  }

  handleGetTasks(service) {
    return this.model.getTasks(service);
  }

  handleAddTask(task) {
    this.model.addTask(task);
  }

  handlerBindAddTask() {
    this.view.bindAddTask(
      this.handleAddTask.bind(this),
      this.handlerRenderTasks.bind(this)
    );
  }

  handlerRenderServiceTaskField() {
    this.view.bindRenderServiceTaskField(this.handleGetTasks.bind(this));
  }

  handlerRenderTasks() {
    this.pubsub.publish("renderTasks");
  }
}
