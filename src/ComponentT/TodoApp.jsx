import UseTodoStore from "../Store/TodoStore";
import { useState } from "react";


function Todo(){
    const [task,setTask] = useState("");

    const[editIndex,setEditIndex] = useState(null);
    const[editTask,setEditTask] =useState("");

    const tasks = UseTodoStore((state) => state.tasks);
    const addTask = UseTodoStore((state) => state.addTask);
    const deleteTask = UseTodoStore((state) => state.deleteTask);
    // const updateTask = UseTodoStore((state) => state.updateTask);
    // const toggleComplete = UseTodoStore((state) => state.toggleComplete)

    const handleAddTask = () =>{
        if(task.trim() ==="")return
        addTask(task);
        setTask("")
    };

    // const handelEdit =(index) =>{
    //     setEditIndex(index);
    //     setEditTask(tasks[index])
    // }

    return(
        <div className="todo-container">
            <div className="input">
           <input
           className="input-group"
           type="text"
           placeholder="enter a task"
           value={task}
           onChange={(e) => setTask(e.target.value)}
           />
              <button className="add" onClick={handleAddTask}>add task</button>
              </div>

             {tasks.map((task,index) =>(
              <div className="todo-item"  key={index}>
                <span>
                    <ul>
                        <li>{task}</li>
                    </ul>
                </span>
                 {/* <button onClick={() => handelEdit(index)}>edit</button> */}
                <button className="delete" onClick={() => deleteTask(index)}>X</button>
              </div>
             ))} 
        </div>
    )
}

export default Todo;