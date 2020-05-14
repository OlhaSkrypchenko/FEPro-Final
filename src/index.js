import css from "./../static/styles.css";
import TasksView from "./tasksMVC/tasksView";
import TasksModel from "./tasksMVC/tasksModel";
import TasksController from "./tasksMVC/tasksController";

import FormView from "./formMVC/formView";
import FormModel from "./formMVC/formModel";
import FormController from "./formMVC/formController";

import PubSub from "./pubsub";

function app() {
  const pubsub = new PubSub();

  const tasksView = new TasksView();
  const tasksModel = new TasksModel();
  const tasksController = new TasksController(tasksModel, tasksView, pubsub);

  const formView = new FormView();
  const formModel = new FormModel();
  const formController = new FormController(formModel, formView, pubsub);
}

app();
