"use strict";

//reusable functions

/* function appendChild(element, children = "") {
  if (children === null) {
    return;
  }

  if (typeof children === "string" || typeof children === "number") {
    return (element.innerText += children);
  }

  return element.append(children);
}

function appendChildren(element, children = "") {
  if (Array.isArray(children)) {
    children.forEach((el) => appendChild(element, el));
  } else {
    appendChild(element, children);
  }
}

function createBasicElement({
  element,
  className = [],
  attributes = {},
  children = "",
}) {
  const el = document.createElement(element);

  if (typeof className === "string") {
    el.classList.add(className);
  } else {
    el.classList.add(...className);
  }

  for (let key in attributes) {
    el.setAttribute(key, attributes[key]);
  }

  appendChildren(el, children);

  return el;
}

function getElement(selector) {
  return document.querySelector(selector);
}
 */
//create Elem

// add button
// function createAddButton() {
//   const button = createBasicElement({
//     element: "button",
//     className: "c-button__add",
//     children: "+ NEW TASK",
//   });

//   container.appendChild(button);

//   return button;
// }
// // data

// const app = getElement(".app");
// const container = getElement(".l-container");
// const addButton = createAddButton();
// const tasksContainer = createBasicElement({
//   element: "div",
//   className: "l-tasks",
// });
// container.appendChild(tasksContainer);

// //EVENT

// addButton.addEventListener("click", renderForm);

/* let tasks = [
    {
      id: 0,
      location: "sd",
      service: "plumber",
      taskType: "dfdf",
      description: "dfdfvfdv",
      fullText: "ldldld",
    },
    {
      id: 1,
      location: "sd",
      service: "plumber",
      taskType: "dfdf",
      description: "dfdfvfdv",
      fullText: "ldldld",
    },
    {
      id: 2,
      location: "sd",
      service: "plumber",
      taskType: "dfdf",
      description: "dfdfvfdv",
      fullText: "ldldld",
    },
];
 */
const services = [
  {
    type: "electrician",
    tasks: [
      "Inspect electrical systems",
      "Connect wires",
      "install electrical wiring",
      "repair electrical wiring",
      "Install ground leads",
      "connect power cables",
    ],
  },
  {
    type: "plumber",
    tasks: [
      "unblock a toilet",
      "unblock a sink",
      "fix a water leak",
      "install a sink",
      "install a shower",
      "install a toilet",
    ],
  },
  {
    type: "gardener",
    tasks: [
      "Plant and nurture new trees",
      "clear rubbish",
      "cut the grass",
      "emptying bins",
      "manage leaf raking",
      "Service garden equipment ",
    ],
  },
  {
    type: "housekeeper",
    tasks: [
      "mop floors",
      "polish floors",
      "shampoo carpets",
      "clean wash basins",
      "tidy up rooms",
      "wash laundry",
    ],
  },
  {
    type: "cook",
    tasks: [
      "stock all ingredients",
      "Prepare cooking ingredients",
      "Prepare meat",
      "prepare dinner",
      "prepare lanch",
      "Prepare salads",
    ],
  },
];

// render form

//reusable element
function createTitle(titleText) {
  const taskFieldTitle = createBasicElement({
    element: "h3",
    className: "c-title",
    children: titleText,
  });

  return taskFieldTitle;
}

//taskField

function createTaskField(titleText) {
  const title = createTitle(titleText);

  const taskFieldText = createBasicElement({
    element: "div",
    className: "c-taskText",
  });

  const taskFieldAddress = createBasicElement({
    element: "div",
    className: "c-address",
  });

  const createTaskButton = createBasicElement({
    element: "button",
    className: "c-button__create",
    children: "CREATE TASK",
    value: "submit",
  });

  const taskField = createBasicElement({
    element: "div",
    children: [title, taskFieldText, taskFieldAddress, createTaskButton],
  });
  return taskField;
}

//locationField

function createLocationField(titleText, fillLocation) {
  const title = createTitle(titleText);
  const locationInput = createBasicElement({
    element: "input",
    className: "c-input__location",
    attributes: { required: "required" },
  });

  const locationField = createBasicElement({
    element: "div",
    children: [title, locationInput],
  });

  //EVENT

  locationInput.addEventListener("change", fillLocation);

  return locationField;
}

//services type field

function createServiceField(
  titleText,
  services,
  fillFirstPart,
  fillSecondPart
) {
  const title = createTitle(titleText);

  const servicesContainer = createBasicElement({
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

    servicesContainer.appendChild(div);
  });

  servicesContainer.addEventListener("click", fillFirstPart);

  const serviceTasksField = createBasicElement({
    element: "div",
  });

  const servicesField = createBasicElement({
    element: "div",
    children: [title, servicesContainer, serviceTasksField],
  });

  //EVENT

  servicesContainer.addEventListener("click", (e) => {
    if (typeof event.target.value === "undefined") {
      return;
    }

    const value = e.target.value;
    const tasks = services.find((el) => el.type === value);

    serviceTasksField.innerHTML = "";

    appendChildren(
      serviceTasksField,
      createServiceTaskField(`${value} tasks`, tasks.tasks, fillSecondPart)
    );
  });

  return servicesField;
}

//services TASKS field

function createServiceTaskField(titleText, tasks, fillSecondPart) {
  const title = createTitle(titleText);

  const serviceTaskContainer = createBasicElement({
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

    serviceTaskContainer.appendChild(div);
  });

  serviceTaskContainer.addEventListener("click", fillSecondPart);

  return [title, serviceTaskContainer];
}

// description

function createDescriptionField(titleText, fillThirdPart) {
  const title = createTitle(titleText);
  const locationInput = createBasicElement({
    element: "input",
    className: "c-input__description",
  });

  locationInput.addEventListener("change", fillThirdPart);

  const descriptionField = createBasicElement({
    element: "div",
    children: [title, locationInput],
  });

  return descriptionField;
}

//FORM

const formContainer = createBasicElement({
  element: "div",
  className: "l-form",
});
app.appendChild(formContainer);

function renderForm() {
  formContainer.innerHTML = "";

  const taskField = createTaskField("NEW TASK");
  const locationField = createLocationField("LOCATION", fillLocation);
  const servicesField = createServiceField(
    "SERVICE TYPE",
    services,
    fillFirstPart,
    fillSecondPart
  );
  const descriptionField = createDescriptionField(
    "TASK DESCRIPTION",
    fillThirdPart
  );

  const closeButton = createBasicElement({
    element: "button",
    className: "c-button__close",
    children: "X",
  });

  const form = createBasicElement({
    element: "form",
    className: "c-form",
    children: [
      taskField,
      locationField,
      servicesField,
      descriptionField,
      closeButton,
    ],
  });

  formContainer.appendChild(form);

  closeButton.addEventListener("click", () => (formContainer.innerHTML = ""));

  let location;
  let service;
  let taskType;
  let description;

  let firstPartOfText;
  let secondPartOfText;
  let thirdPartOfText;
  let fullText;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = createTask({
      location,
      service,
      taskType,
      description,
      fullText,
    });
    createTaskCard(task);
    formContainer.innerHTML = "";
  });

  const taskText = getElement(".c-taskText");

  function fillFirstPart() {
    if (typeof event.target.value === "undefined") {
      return;
    }

    service = event.target.value;
    firstPartOfText = `I need a(an) ${service}`;
    taskText.innerHTML = "";
    taskText.innerHTML = firstPartOfText;
  }

  function fillSecondPart() {
    if (typeof event.target.value === "undefined") {
      return;
    }

    taskType = event.target.value;
    secondPartOfText = ` to ${taskType}`;

    taskText.innerHTML = "";
    taskText.innerHTML = firstPartOfText + secondPartOfText;
    fullText = firstPartOfText + secondPartOfText;
  }

  function fillThirdPart() {
    if (event.target.value === "") {
      thirdPartOfText = "";
    } else {
      description = event.target.value;
      thirdPartOfText = ` , ${description}`;
    }

    taskText.innerHTML = "";
    taskText.innerHTML = firstPartOfText + secondPartOfText + thirdPartOfText;
  }

  const address = getElement(".c-address");
  function fillLocation() {
    location = event.target.value;
    address.innerHTML = `My address is ${location}`;
  }
}

// Creating Task

/* function createTask({
  location,
  service,
  taskType,
  description = "",
  fullText,
}) {
  const task = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    date: createTaskDate(),
    location,
    service,
    taskType,
    description,
    fullText,
  };

  tasks.push(task);

  return task;
} */

//Date

/* function createTaskDate() {
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
} */

//Create Task Card

/* function createTaskCard(task) {
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
  });

  const deleteButton = createBasicElement({
    element: "button",
    className: "c-button__delete",
    children: "DELETE",
    attributes: {
      "data-id": task.id,
    },
  });
  deleteButton.addEventListener("click", deleteTask);

  const buttonContainer = createBasicElement({
    element: "div",
    className: "l-button-container",
    children: [editButton, deleteButton],
  });

  const taskCard = createBasicElement({
    element: "div",
    className: "c-task",
    attributes: {
      id: task.id,
    },
    children: [date, text, buttonContainer],
  });

  tasksContainer.appendChild(taskCard);
}

function renderTasks(tasks) {
  if (tasks.length === 0) {
    tasksContainer.innerHTML = "";
    return;
  }

  tasksContainer.innerHTML = "";
  tasks.forEach((task) => createTaskCard(task));
}

renderTasks(tasks);

function deleteTask() {
  const dataId = +event.target.dataset.id;

  // tasks = tasks.filter((el) => el.id !== dataId);

  renderTasks(tasks);
} */
