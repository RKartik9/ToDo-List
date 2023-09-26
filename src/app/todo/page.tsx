"use client";
import React, { useState, useEffect } from "react";
import { FaEdit, FaCheck, FaTrash } from "react-icons/fa";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function TodoPage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState("");

  useEffect(() => {
    const savedTasks = loadTasksFromLocalStorage();
    setTasks(savedTasks);
  }, []);

  // Function to save tasks to local storage
  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const loadTasksFromLocalStorage = () => {
    const tasksString = localStorage.getItem("tasks");
    return tasksString ? JSON.parse(tasksString) : [];
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      const newTaskObj = {
        text: newTask,
        completed: false,
        userId: "user1", // Replace with the user's actual ID
      };
      setTasks([...tasks, newTaskObj]);
      saveTasksToLocalStorage([...tasks, newTaskObj]);
      setNewTask("");
    }
  };

  const handleEdit = (task) => {
    setEditing(true);
    setEditedTask(task);
    setEditedTaskText(task.text);
  };

  const handleSave = () => {
    const updatedTasks = tasks.map((task) =>
      task === editedTask ? { ...task, text: editedTaskText } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
    setEditing(false);
    setEditedTask(null);
  };

  const handleToggleComplete = (task) => {
    const updatedTasks = tasks.map((t) =>
      t === task ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const handleDelete = (task) => {
    const updatedTasks = tasks.filter((t) => t !== task);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  return (
    <>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4">Todo List</h1>
        <form onSubmit={handleSubmit} className="mb-4 flex items-center">
          <input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={handleInputChange}
            className="border rounded p-2 mr-2 flex-grow"
          />
          <button
            type="submit"
            className="bg-cyan-500 text-white rounded p-2 hover:bg-cyan-600"
          >
            Add
          </button>
        </form>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center mb-2 border p-2 rounded ${
                task.completed ? "line-through" : ""
              }`}
            >
              {editing && editedTask === task ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    value={editedTaskText}
                    onChange={(e) => setEditedTaskText(e.target.value)}
                    className="border rounded p-2 mr-2 flex-grow"
                  />
                  <button
                    onClick={handleSave}
                    className="bg-cyan-500 text-white rounded p-2 hover:bg-cyan-600"
                  >
                    <FaCheck />
                  </button>
                </div>
              ) : (
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleComplete(task)}
                    className="mr-2"
                  />
                  <span className="flex-grow">{task.text}</span>
                  <button
                    onClick={() => handleEdit(task)}
                    className="bg-cyan-500 text-white rounded p-2 hover:bg-cyan-600 ml-2"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(task)}
                    className="bg-cyan-500 text-white rounded p-2 hover:bg-cyan-600 ml-2"
                  >
                    <FaTrash />
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex justify-center">
        <Link
          className="bg-cyan-500 text-white rounded-full py-2 px-6 text-lg font-semibold hover:bg-cyan-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 mb-4"
          href="/"
        >
          Home Page
        </Link>
      </div>
    </>
  );
}
