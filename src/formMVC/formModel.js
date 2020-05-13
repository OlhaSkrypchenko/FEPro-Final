export default class FormModel {
  constructor() {
    if (!localStorage.getItem("tasks")) {
      localStorage.setItem("tasks", JSON.stringify([]));
    }

    this.services = [
      {
        type: "electrician",
        tasks: [
          "inspect electrical systems",
          "connect wires",
          "install electrical wiring",
          "repair electrical wiring",
          "install ground leads",
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
          "plant and nurture new trees",
          "clear rubbish",
          "cut the grass",
          "emptying bins",
          "manage leaf raking",
          "service garden equipment ",
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
          "prepare cooking ingredients",
          "prepare meat",
          "prepare dinner",
          "prepare lanch",
          "prepare salads",
        ],
      },
    ];
  }

  createTaskDate() {
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
  }

  getTasks(serviceType) {
    const service = this.services.find((el) => el.type === serviceType);
    return service.tasks;
  }

  _onDataChange(data) {
    localStorage.setItem("tasks", JSON.stringify(data));
    // this.onTasksListChanged(this._data);
  }

  getTask(id) {
    return this._data.find((el) => el.id === id);
  }

  get _data() {
    return JSON.parse(localStorage.getItem("tasks"));
  }

  addTask({ location, service, taskType, description = "", fullText }) {
    const tasks = this._data;
    const task = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      date: this.createTaskDate(),
      location,
      service,
      taskType,
      description,
      fullText,
    };

    localStorage.setItem("tasks", JSON.stringify([...this._data, task]));
  }

  editTask({ id, location, service, taskType, description = "", fullText }) {
    const data = this._data.map((task) =>
      task.id === id
        ? {
            id,
            date: this.createTaskDate(),
            location,
            service,
            taskType,
            description,
            fullText,
          }
        : task
    );
    this._onDataChange(data);
  }
}
