import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TasksList from "./components/tasksList";
import TaskForm from "./components/TaskForm";
function App() {
    return (
        <>
            <TaskForm />
            <TasksList />
        </>
    );
}

export default App;
