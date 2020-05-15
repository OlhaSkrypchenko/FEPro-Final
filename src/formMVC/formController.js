export default class FormController {
  constructor(model, view, pubsub) {
    this.model = model;
    this.view = view;
    this.pubsub = pubsub;

    this.pubsub.subscribe("renderAddForm", this.handleRenderAddForm.bind(this));
    this.pubsub.subscribe("renderEditForm", (id) => {
      this.handleRenderEditForm(id);
    });
    this.pubsub.subscribe("closeEditForm", (id) => {
      this.handleCloseEditForm(id);
    });
  }

  async handleRenderAddForm() {
    try {
      const services = await this.model.getServiceData();
      this.view.renderAddForm(services);
      this.handlerBindAddTask();
      this.handlerRenderServiceTaskField();
    } catch (error) {
      this.handlerRenderError();
    }
  }

  async handleRenderEditForm(id) {
    try {
      const services = await this.model.getServiceData();
      const task = await this.model.getTask(id);
      this.view.renderEditForm(task, services);
      this.handlerBindEditTask();
      this.handlerRenderServiceTaskField(task.taskType);
    } catch (error) {
      this.handlerRenderError();
    }
  }

  handleCloseEditForm(id) {
    this.view.closeEditForm(id);
  }

  handleGetServiceTasks(service) {
    return this.model.getServiceTasks(service);
  }

  handlerBindAddTask() {
    const handleAddTask = async (task) => {
      await this.model.addTask(task);
      this.handlerRenderTasks();
    };
    this.view.bindAddTask(handleAddTask);
  }

  handlerBindEditTask() {
    const handleEditTask = async (task) => {
      await this.model.editTask(task);
      this.handlerRenderTasks();
    };
    this.view.bindEditTask(handleEditTask);
  }

  handlerRenderServiceTaskField(checkedTypeRadio) {
    this.view.bindRenderServiceTaskField(
      this.handleGetServiceTasks.bind(this),
      checkedTypeRadio
    );
  }

  handlerRenderTasks() {
    this.pubsub.publish("renderTasks");
  }

  handlerRenderError() {
    this.pubsub.publish("renderError");
  }
}
