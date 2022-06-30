import React from 'react'
import styles from "../styles/Home.module.css";
import { useState } from "react";
import axios from "axios";

const url = "http://localhost:3000/api/task";


function Select({ tasks, count, setTasks, all }) {


    const [task, setTask] = useState({ task: "" });

    const handleChange = ({ currentTarget: input }) => {
        input.value === ""
            ? setTask({ task: "" })
            : setTask((prev) => ({ ...prev, task: input.value }));
    };

    const editTask = (id) => {
        const currentTask = tasks.filter((task) => task._id === id);
        setTask(currentTask[0]);
    };

    const updateTask = async (id) => {
        try {
            const originalTasks = [...tasks];
            const index = originalTasks.findIndex((t) => t._id === id);
            const { data } = await axios.put(url + "/" + id, {
                completed: !originalTasks[index].completed,
            });
            originalTasks[index] = data.data;
            setTasks(originalTasks);
            console.log(data.message);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteTask = async (id) => {
        try {
            const { data } = await axios.delete(url + "/" + id);
            setTasks((prev) => prev.filter((task) => task._id !== id));
            console.log(data.message);
            console.log(count);
        } catch (error) {
            console.log(error);
        }
    };


    console.log("Count: " + count);
    if (count === 1) {
        return (
            tasks.map((task) => (
                <div className={styles.task_container} key={task._id}>
                    <input
                        type="checkbox"
                        className={styles.check_box}
                        checked={task.completed}
                        onChange={() => updateTask(task._id)}
                    />
                    <p
                        className={
                            task.completed
                                ? styles.task_text + " " + styles.line_through
                                : styles.task_text
                        }
                    >
                        {task.task}
                    </p>
                    <button
                        onClick={() => editTask(task._id)}
                        className={styles.edit_task}
                    >
                        &#9998;
                    </button>
                    <button
                        onClick={() => deleteTask(task._id)}
                        className={styles.remove_task}
                    >
                        &#10006;
                    </button>
                </div>
            ))
        )
    } else if (count === 2) {
        return (
            tasks.map((task) => (
                !task.completed ? <>
                    <div className={styles.task_container} key={task._id}>
                        <input
                            type="checkbox"
                            className={styles.check_box}
                            checked={task.completed}
                            onChange={() => updateTask(task._id)}
                        />
                        <p
                            className={
                                task.completed
                                    ? styles.task_text + " " + styles.line_through
                                    : styles.task_text
                            }
                        >
                            {task.task}
                        </p>
                        <button
                            onClick={() => editTask(task._id)}
                            className={styles.edit_task}
                        >
                            &#9998;
                        </button>
                        <button
                            onClick={() => deleteTask(task._id)}
                            className={styles.remove_task}
                        >
                            &#10006;
                        </button>
                    </div></>
                    : <></>

            ))
        )
    } else if (count === 3) {
        return (
            tasks.map((task) => (
                task.completed ? <>
                    <div className={styles.task_container} key={task._id}>
                        <input
                            type="checkbox"
                            className={styles.check_box}
                            checked={task.completed}
                            onChange={() => updateTask(task._id)}
                        />
                        <p
                            className={
                                task.completed
                                    ? styles.task_text + " " + styles.line_through
                                    : styles.task_text
                            }
                        >
                            {task.task}
                        </p>
                        <button
                            onClick={() => editTask(task._id)}
                            className={styles.edit_task}
                        >
                            &#9998;
                        </button>
                        <button
                            onClick={() => deleteTask(task._id)}
                            className={styles.remove_task}
                        >
                            &#10006;
                        </button>
                    </div></>
                    : <></>

            ))
        )
    } else if (count === 4) {
        all()
        tasks.map((task) => (
            deleteTask(task._id)
        ))
        return (
            <h2 className={styles.no_tasks}>No tasks</h2>

        )
    }
}


export default Select;