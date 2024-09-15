import "./App.css";
import DynamicForm from "./components/dayFour/DynamicForm";
//import TaskList from "./components/dayThree/TaskList";
//import Greeting from "./components/dayOne/Greeting";
//import Count from "./components/dayTwo/Count";

function App() {
  //const [name, setName] = useState("Junior");

  return (
    <div className="App">
      {/* <Greeting name={name} /> */}
      {/* <Count number={0} /> */}
      {/* <TaskList /> */}
      <DynamicForm />
    </div>
  );
}

export default App;
