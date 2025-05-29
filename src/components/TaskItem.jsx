import React from "react";
import api from "../services/api";

export default function TaskItem({ task }) {
    const toggleCompleted = async () => {
        await api.put(`/${task.id}`, { ...task, completed: !task.completed });
        window.location.reload();
    };

    const deleteTask = async () => {
        await api.delete(`/${task.id}`);
        window.location.reload();
    };

    return (
        <li>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.title} - {task.description}
            </span>
            <button onClick={toggleCompleted}>
                {task.completed ? "Undo" : "Done"}
            </button>
            <button onClick={deleteTask}>Delete</button>
        </li>
    );
}
