export const initialState ={
    tasks: [{
        task: 'Hello Task',
        completed: false,
        date: '',
        id: 8972398127,
    },

    {
        task: 'Hello Task 2',
        completed: false,
        date: '',
        id: 897454127,
    },
],
};

export const reducer = (state, action) =>{
    
    console.log(`Action: ${action.type}`);
    console.log(`Payload: ${action.payload}`);
    
    switch(action.type){
        case 'ADD_TASK':
            
            const newTask = {    
                task: action.payload,
                completed: false,
                dateCompleted: '',
                id: Date.now(),
            };
            let newState = {...state, tasks: [...state.tasks, newTask]};
            console.log(newState);
            return newState;

        case 'TOGGLE_TASK':
            return {...state, tasks: state.tasks.map(task => (task.id === action.payload.id) ? {...task, completed: !task.completed, dateCompleted: action.payload.date} : task)};
        

        case 'REMOVE_COMPLETED':
            return {...state, tasks: state.tasks.filter(task => !task.completed)};

        default:
            return state;
    }
};