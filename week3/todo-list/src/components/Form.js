import React, { useState } from 'react';

const Form = (props) => {

    const { tasks, setTasks } = props;
    const [ task, setTask ] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        setTasks( [ ...tasks,
        {
            actualTask: task,
            completed: false,
        } ]);
        setTask("");
    }

    return (
        <form onSubmit={ addTask }>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)}></input>
        <input type="submit" value="Add" />
        </form>
    );
}

export default Form;