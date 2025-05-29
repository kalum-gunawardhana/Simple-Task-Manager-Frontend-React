import React, { useEffect, useState } from "react";
import api from "../services/api";
import TaskItem from "./TaskItem";

export default function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        api.get("/").then(res => setTasks(res.data));
    }, []);

    return (
        <ul>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
}
