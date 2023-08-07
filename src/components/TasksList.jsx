import React from "react";
import { useGetTasksQuery } from "../api/apiSlice";
const TasksList = () => {
    const { data: tasks, isError, isLoading } = useGetTasksQuery();
    // console.log(tasks);
    if (isLoading) return <div>loading...</div>;
    else if (isError) return <div>Hay error</div>;

    return (
        <>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <h3>{task.name}</h3>
                        <h5>{task.description}</h5>
                        <button className="btn btn-primary mx-2">delet</button>
                        <input type="checkbox" id={task.id} />
                        <label htmlFor={task.id}> completed</label>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TasksList;
