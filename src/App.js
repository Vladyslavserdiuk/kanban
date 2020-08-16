import React, {useState} from 'react';
import FormCreateTask from "./FormCreateTask";
import Bord from "./Bord";

import {v4 as uuidv4} from 'uuid';


function App() {

    const initialTask = [
        {
            id: uuidv4(),
            title: 'First Task',
            priority: 2,
            status: 'todo'
        },
        {
            id: uuidv4(),
            title: 'Second Task',
            priority: 3,
            status: 'review'
        }
    ];

    const [tasks, setTasks] = useState()

    return (
        <div>
            <FormCreateTask/>
            <Bord/>

        </div>
    );
}

export default App;
