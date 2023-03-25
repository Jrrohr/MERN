import React from 'react';

const Display = (props) => {

    const { tasks, setTasks } = props;

    const completeTask = (index) => {
        const oneTask = {
            ...tasks[index]
        };
        if (!oneTask.completed) {
            alert("Yay! You did it!");
        }
        oneTask.completed = !oneTask.completed;

        setTasks([
            ...tasks.slice(0, index),
            oneTask
        ].concat(tasks.slice(index + 1)));
    }

    const deleteTask = (oneTask) => {
        setTasks(tasks.filter(item => item !== oneTask));
    }

    const btnStyle = {
        backgroundColor: 'black',
        color: 'white'
    }

    return (
        <div>
            {
                tasks.map((task, index) => (
                    <p style={{ textDecoration: task.completed && 'line-through' }}>{task.actualTask}
                    <input type="checkbox" onClick={() => completeTask(index)} checked={task.completed} />
                    <button style={btnStyle} onClick={() => deleteTask(task)}>Delete</button></p>
                ))
            }
        </div>
    )

}

export default Display;