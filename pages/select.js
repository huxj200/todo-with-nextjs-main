import { useState } from "react";
import styles from "../styles/Home.module.css";

function Select() {
    //count 标志位，1：全部显示；2：显示已完成；3：显示未完成
    const [count, setCount] = useState(1);

    const all = () => setCount(count => count = 1);
    const done = () => setCount(count => count = 2);
    const doing = () => setCount(count => count = 3);



    const onSubmit = async (event) => {
        if (count === 1) {

        } else if (count === 2) {

        } else if (count === 3) {

        }
    };

    return (
        <>
            <form onSubmit={onSubmit}>
            </form>
            <div className={styles.container} >
                <button
                    onClick={() => all()}

                    className={styles.remove_task}
                >
                    {"done"}
                </button>
            </div>
        </>
    );
}


if (count === 1) {
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
} else if (count === 2) {
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
} else if (count === 3) {
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
}


export default Select;