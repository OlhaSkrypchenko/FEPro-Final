import {
  getElement,
  createBasicElement,
  appendChildren,
  appendChild,
} from "../reusable/reusable";

export default class FormView {
  constructor() {
    this.app = getElement(".app");

    this.formContainer = createBasicElement({
      element: "div",
      className: "l-form",
    });

    appendChild(this.app, this.formContainer);

    // this.servicesField = createBasicElement({
    //   element: "div",
    // });

    this.serviceTasksField = createBasicElement({
      element: "div",
    });

    this.fullTextArr = [];
  }

  _createTitle(titleText) {
    const taskFieldTitle = createBasicElement({
      element: "h3",
      className: "c-title",
      children: titleText,
    });

    return taskFieldTitle;
  }

  _createTaskField(titleText) {
    const title = this._createTitle(titleText);

    this.taskFieldText = createBasicElement({
      element: "div",
      className: "c-taskText",
    });

    this.taskFieldAddress = createBasicElement({
      element: "div",
      className: "c-address",
    });

    this.createTaskButton = createBasicElement({
      element: "input",
      className: "c-button__create",
      attributes: {
        value: "CREATE TASK",
        type: "submit",
      },
    });

    const taskField = createBasicElement({
      element: "div",
      children: [
        title,
        this.taskFieldText,
        this.taskFieldAddress,
        this.createTaskButton,
      ],
    });

    return taskField;
  }

  _createLocationField(titleText) {
    const title = this._createTitle(titleText);

    this.locationInput = createBasicElement({
      element: "input",
      className: "c-input__location",
      attributes: { required: "required" },
    });

    const locationField = createBasicElement({
      element: "div",
      children: [title, this.locationInput],
    });

    return locationField;
  }

  _createServiceField(titleText, services) {
    const servicesField = createBasicElement({
      element: "div",
    });

    const title = this._createTitle(titleText);

    this.servicesContainer = createBasicElement({
      element: "div",
      className: "l-service",
    });

    services.forEach((el) => {
      const radio = createBasicElement({
        element: "input",
        attributes: {
          type: "radio",
          value: el.type,
          name: "service",
          id: el.type,
          required: "required",
        },
      });

      const label = createBasicElement({
        element: "label",
        attributes: {
          for: `${el.type}`,
        },
        children: el.type,
      });

      const div = createBasicElement({
        element: "div",
        className: `c-service__${el.type}`,
        children: [radio, label],
      });

      appendChild(this.servicesContainer, div);
    });

    appendChildren(servicesField, [title, this.servicesContainer]);
    this.servicesField = servicesField;

    return servicesField;
  }

  _createDescriptionField(titleText) {
    const title = this._createTitle(titleText);

    this.descriptionInput = createBasicElement({
      element: "textarea",
      className: "c-textarea__description",
    });

    const descriptionField = createBasicElement({
      element: "div",
      children: [title, this.descriptionInput],
    });

    return descriptionField;
  }

  fillAddress() {
    this.locationInput.addEventListener("input", (event) => {
      this.location = event.target.value;
      this.taskFieldAddress.innerHTML = `My address is ${this.location}`;
    });
  }

  fillTextTaskFieldText() {
    this.taskFieldText.innerHTML = "";
    this.taskFieldText.innerHTML = this.fullTextArr.reduce(
      (accum, text) => accum + text
    );
  }

  fillFirstPartTaskFieldText() {
    this.servicesContainer.addEventListener("click", (event) => {
      if (typeof event.target.value === "undefined") {
        return;
      }

      this.service = event.target.value;
      this.fullTextArr[0] = `I need a(an) ${this.service}`;
      this.fillTextTaskFieldText();
    });
  }

  fillSecondPartTaskFieldText() {
    this.serviceTaskContainer.addEventListener("click", (event) => {
      if (typeof event.target.value === "undefined") {
        return;
      }

      this.taskType = event.target.value;
      this.fullTextArr.splice(1, 1);
      this.fullTextArr[1] = ` to ${this.taskType}`;
      this.fillTextTaskFieldText();
    });
  }

  fillThirdPartTaskFieldText() {
    this.descriptionInput.addEventListener("input", (event) => {
      if (event.target.value === "") {
        this.fullTextArr.splice(2, 1);
        this.fillTextTaskFieldText();
        return;
      } else {
        this.description = event.target.value;

        this.fullTextArr[2] = ` , ${this.description}`;

        this.fillTextTaskFieldText();
      }
    });
  }

  clearFormContainer() {
    this.formContainer.innerHTML = "";
  }

  closeForm() {
    this.closeButton.addEventListener(
      "click",
      this.clearFormContainer.bind(this)
    );
  }

  renderServiceTaskField(titleText, tasks) {
    this.serviceTasksField.innerHTML = "";

    const title = this._createTitle(titleText);

    this.serviceTaskContainer = createBasicElement({
      element: "div",
      className: "l-tasks",
    });

    tasks.forEach((el) => {
      const radio = createBasicElement({
        element: "input",
        attributes: {
          type: "radio",
          value: el,
          name: "task",
          id: el,
          required: "required",
        },
      });

      const label = createBasicElement({
        element: "label",
        attributes: {
          for: `${el}`,
        },
        children: el,
      });

      const div = createBasicElement({
        element: "div",
        children: [radio, label],
      });

      this.serviceTaskContainer.appendChild(div);
    });

    appendChildren(this.serviceTasksField, [title, this.serviceTaskContainer]);
    appendChild(this.servicesField, this.serviceTasksField);

    this.fillSecondPartTaskFieldText();
  }

  renderForm(services) {
    this.clearFormContainer();

    const taskField = this._createTaskField("NEW TASK");
    const locationField = this._createLocationField("LOCATION");
    const servicesField = this._createServiceField("SERVICE TYPE", services);
    const descriptionField = this._createDescriptionField("TASK DESCRIPTION");

    this.closeButton = createBasicElement({
      element: "button",
      className: "c-button__close",
      attributes: {
        type: "button",
      },
      children: "X",
    });

    this.form = createBasicElement({
      element: "form",
      className: "c-form",
      children: [
        taskField,
        locationField,
        servicesField,
        descriptionField,
        this.closeButton,
      ],
    });

    appendChild(this.formContainer, this.form);

    this.fillAddress();
    this.fillFirstPartTaskFieldText();
    this.fillThirdPartTaskFieldText();
    this.closeForm();
  }

  bindRenderServiceTaskField(handler) {
    this.servicesContainer.addEventListener("click", (event) => {
      if (typeof event.target.value === "undefined") {
        return;
      }

      const value = event.target.value;

      this.renderServiceTaskField(`${value} tasks`, handler(value));
    });
  }

  get _taskValues() {
    return {
      location: this.location,
      service: this.service,
      taskType: this.taskType,
      description: this.description,
      fullText: this.fullTextArr.reduce((accum, el) => accum + el),
    };
  }

  bindAddTask(handlerAdd, handlerRender) {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (this._taskValues) {
        handlerAdd(this._taskValues);
        handlerRender();
      }

      this.clearFormContainer();
    });
  }

  /*   bindRenderTasks(handler) {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      handler();
    });
  } */
}
