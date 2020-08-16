import React, {useState} from 'react';
import FormCreateTask from "./FormCreateTask";
import Bord from "./Bord";


function App() {

    const initialTask = [
        {
            id: 1,
            title: 'First Task',
            priority: 2,
            status: 'todo'
        },
        {
            id: 2,
            title: 'Second Task',
            priority: 3,
            status: 'review'
        },


    ]

    const [tasks, setTasks] = useState()

    return (
        <div>
            <FormCreateTask/>
            <Bord/>

        </div>
    );
}

export default App;
