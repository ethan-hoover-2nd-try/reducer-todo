import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, toggleCompleted}) => {

    return (
        <div>
            {tasks.map((task, index) => {
                return (
                    <Task key={index} {...task} toggleCompleted={toggleCompleted}/>
                );
            })}
        </div>
    );
};

export default TaskList;