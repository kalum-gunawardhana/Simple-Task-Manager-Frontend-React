import React, { useState } from "react";
import api from "../services/api";

export default function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.post("/", { title, description });
        setTitle(""); setDescription("");
        window.location.reload(); // simple refresh
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Task title" required />
            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
            <button type="submit">Add Task</button>
        </form>
    );
}
