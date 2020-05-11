import TasksView from "./tasksMVC/tasksView";
import TasksModel from "./tasksMVC/tasksModel";
import TasksController from "./tasksMVC/tasksController";

const tasksView = new TasksView();
const tasksModel = new TasksModel();
const tasksController = new TasksController(tasksModel, tasksView);
