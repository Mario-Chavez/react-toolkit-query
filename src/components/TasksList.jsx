import React from "react";
import {
    useGetTasksQuery,
    useDeleteTaskMutation,
    useUpdateTaskMutation,
} from "../api/apiSlice";
const TasksList = () => {
    const { data: tasks, isError, isLoading } = useGetTasksQuery();
    const [upDate] = useUpdateTaskMutation();
    const [deleteDate] = useDeleteTaskMutation();
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
                        <button
                            onClick={() => deleteDate(task.id)}
                            className="btn btn-primary mx-2"
                        >
                            delet
                        </button>
                        <input
                            type="checkbox"
                            id={task.id}
                            checked={task.completed} //check si esta la tarea realizada o no (parte visual)
                            onChange={(e) => {
                                // devolvemos un obj con las tareas , y le agregamos el valor de checked
                                upDate({
                                    ...task,
                                    completed: e.target.checked,
                                });
                            }}
                        />
                        <label htmlFor={task.id}> completed</label>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TasksList;
