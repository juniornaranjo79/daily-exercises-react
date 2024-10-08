import "./App.css";
import Kanban from "./components/daySix/components/Kanban/Kanban";
import TaskForm from "./components/daySix/components/TaskForm/TaskForm";
//import { UserProvider } from "./components/dayFive/Hooks/UserContext/UserContext";
//import DynamicForm from "./components/dayFour/DynamicForm";
//import TaskList from "./components/dayThree/TaskList";
//import Greeting from "./components/dayOne/Greeting";
//import Count from "./components/dayTwo/Count";
//import UserForm from "./components/dayFive/UserForm";
//import UserList from "./components/dayFive/UserList";
import { KanbanProvider } from "./components/daySix/Hooks/KanbanContext";

function App() {
  //const [name, setName] = useState("Junior");

  return (
    <KanbanProvider>
      <div className="App">
        {/* <Greeting name={name} /> */}
        {/* <Count number={0} /> */}
        {/* <TaskList /> */}
        {/* <DynamicForm /> */}
        {/* <h1>User Management</h1>
        <UserForm />
        <UserList /> */}
        <TaskForm />
        <Kanban />
      </div>
    </KanbanProvider>
  );
}

export default App;
