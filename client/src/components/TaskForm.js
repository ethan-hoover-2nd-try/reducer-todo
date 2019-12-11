import React, { useState } from 'react';

const TaskForm = ({ addTask, removeCompleted }) => {

    const [taskField, setTaskField] = useState('');

    // On update of the task field update state
    const handleChange = e => {
        setTaskField(e.target.value);
    };

    const handleSubmit = e => {
        // Prevent default actions of the browser.
        e.preventDefault();

        // Call function in parent component to add task
        addTask(taskField);

        // Clear the task field
        setTaskField('');
    };

    const handleRemoveCompleted = () => {
        removeCompleted();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='task'>
                    {/* When wanting to use state to reset field you must have a value binded to the state */}
                    <input name='task' id='task' placeholder='write a task' value={taskField} onChange={handleChange} />
                </label>
                <button type='submit'>Add Task</button>
            </form>

            <button onClick={handleRemoveCompleted}>Remove Completed Tasks</button>
        </div>
    );
};

export default TaskForm;