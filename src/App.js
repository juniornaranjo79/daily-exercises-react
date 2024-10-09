import "./App.css";
//import { UserProvider } from "./components/dayFive/Hooks/UserContext/UserContext";
//import DynamicForm from "./components/dayFour/DynamicForm";
//import TaskList from "./components/dayThree/TaskList";
//import Greeting from "./components/dayOne/Greeting";
//import Count from "./components/dayTwo/Count";
//import UserForm from "./components/dayFive/UserForm";
//import UserList from "./components/dayFive/UserList";
import { KanbanProvider } from "./components/daySix/Hooks/KanbanContext";
import TheKanban from "./components/daySix/TheKanban";

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
        <TheKanban />
      </div>
    </KanbanProvider>
  );
}

export default App;
