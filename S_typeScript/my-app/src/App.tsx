import React, { FC, useState, ChangeEvent } from "react"; // FC- functional component

const App: FC = () => {
  interface Task {
    taskName: string;
    deadline: number;
  }
  const [task, settask] = useState<string>("");
  const [deadline, setdeadline] = useState<number>(0);
  const [todo, settodo] = useState<Task[]>([]);
  console.log(task);
  console.log(deadline);
  console.log(todo);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    // console.log(e.target.name)
    if (e.target.name === "task") {
      settask(e.target.value);
    } else {
      setdeadline(Number(e.target.value));
    }
  };

  const addtask = (): void => {
    const newtask = {
      taskName: task,
      deadline: deadline,
    };
    settodo([...todo, newtask]);
    console.log(todo);
  };

  const deleteTask = (taskNameToDelete: string): void => {
    settodo(
      todo.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <form>
          <input
            type="text"
            name="task"
            placeholder="enter task here.."
            onChange={handleChange}
          />{" "}
          <br /> <br />
          <input
            type="text"
            name="deadline"
            placeholder="deadline (in days)..."
            onChange={handleChange}
          />
          <br />
          <br />
          <button type="button" onClick={addtask}>
            Add task
          </button>
        </form>
      </div>

      <div className="todoList">
        <ul>
          {todo.map((ele: Task, key: number) => {
            return (
              <>
                <div
                  key={key}
                  style={{ backgroundColor: "lightblue", width: "100px" }}
                >
                  <li>
                    {ele.taskName} deadline {ele.deadline}
                  </li>
                  <button onClick={() => deleteTask(ele.taskName)}>
                    Delete
                  </button>
                </div>
                <br />
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
