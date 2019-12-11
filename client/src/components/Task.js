  
import React from 'react';

const Task = ({task, id, completed, dateCompleted, toggleCompleted}) =>{
    return(
        <div className="task-wrapper" onClick={() => toggleCompleted(id)}>
            {completed ? (
            <div className={`task ${completed ? 'completed' : ''}`}>
                <div className='task-name'>{task}</div> 
                <div className="task-status">Task Completed: {dateCompleted}</div>
        </div>) : (<div className={`task ${completed ? 'completed' : ''}`}>
                <div className='task-name'>{task}</div> 
                <div className="task-status">Task Completed: {dateCompleted}</div>
            </div>)}
        </div>
    );
};

export default Task;