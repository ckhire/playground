const list = document.querySelector<HTMLUListElement>("#list");
const input = document.querySelector<HTMLInputElement>("#new-task-title");
const form = document.querySelector("new-task-form") as HTMLFormElement | null;

form?.addEventListener("submit", (e) => {
    console.log('hrrlo')
  e.preventDefault();

  const newTask: Task = {
    title: input.value,
    completed: false,
    createdAt: new Date()
  };
  addListItem(newTask);
});

interface Task {
  title: string,
  completed: boolean,
  createdAt: Date,
};

const addListItem = (task: Task) => {
const item = document.createElement('li');
const label = document.createElement('label');
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
label.append(checkbox,task.title);
item.append(label);
list?.append(item);
};
