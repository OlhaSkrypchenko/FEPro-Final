import {
  getElement,
  createBasicElement,
  appendChildren,
  appendChild,
} from "../reusable/reusable";

export default class TasksView {
  constructor() {
    this.app = getElement(".app");
    this.container = getElement(".l-container");
    this.addButton = createBasicElement({
      element: "button",
      className: "c-button__add",
      children: "+ NEW TASK",
    });

    this.tasksContainer = createBasicElement({
      element: "div",
      className: "l-tasks",
    });

    appendChildren(this.container, [this.addButton, this.tasksContainer]);
  }

  createTaskCard(task) {
    const date = createBasicElement({
      element: "p",
      className: "c-date",
      children: task.date,
    });

    const text = createBasicElement({
      element: "p",
      className: "c-text",
      children: task.fullText,
    });

    const editButton = createBasicElement({
      element: "button",
      className: "c-button__edit",
      children: "EDIT",
      attributes: {
        "data-edit-id": task.id,
      },
    });

    const deleteButton = createBasicElement({
      element: "button",
      className: "c-button__delete",
      children: "DELETE",
      attributes: {
        "data-id": task.id,
      },
    });

    const buttonContainer = createBasicElement({
      element: "div",
      className: "l-button-container",
      children: [editButton, deleteButton],
    });

    this.taskCard = createBasicElement({
      element: "div",
      className: "c-task",
      attributes: {
        id: task.id,
      },
      children: [date, text, buttonContainer],
    });

    appendChild(this.tasksContainer, this.taskCard);
  }

  renderTasks(tasks) {
    if (tasks.length === 0) {
      this.tasksContainer.innerHTML = "";
      return;
    }

    this.tasksContainer.innerHTML = "";
    tasks.forEach((task) => this.createTaskCard(task));
  }

  bindDeleteTask(handler) {
    this.tasksContainer.addEventListener("click", (event) => {
      const dataId = event.target.dataset.id;

      if (!dataId) {
        return;
      }

      const id = parseInt(dataId);

      handler(id);
    });
  }

  bindEditTask(handler) {
    this.tasksContainer.addEventListener("click", (event) => {
      const dataId = event.target.dataset.editId;

      if (!dataId) {
        return;
      }

      const id = parseInt(dataId);

      handler(id);
    });
  }

  bindRenderForm(handler) {
    this.addButton.addEventListener("click", handler);
  }
}
