import React from 'react'
import styles from "../styles/Home.module.css";




// function Select({ tasks }) {

//     console.log("tasks: " + tasks);

//     return (
//         tasks.map((task) => (
//             <div className={styles.task_container} key={task._id}>
//                 <input
//                     type="checkbox"
//                     className={styles.check_box}
//                     checked={task.completed}
//                     onChange={() => updateTask(task._id)}
//                 />
//                 <p
//                     className={
//                         task.completed
//                             ? styles.task_text + " " + styles.line_through
//                             : styles.task_text
//                     }
//                 >
//                     {task.task}
//                 </p>
//                 <button
//                     onClick={() => editTask(task._id)}
//                     className={styles.edit_task}
//                 >
//                     &#9998;
//                 </button>
//                 <button
//                     onClick={() => deleteTask(task._id)}
//                     className={styles.remove_task}
//                 >
//                     &#10006;
//                 </button>
//             </div>


//         ))
//     )

// }












function Select({ tasks, count }) {

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
    }
}


export default Select;