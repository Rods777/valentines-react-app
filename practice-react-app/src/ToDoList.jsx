import React, { useState } from 'react'
import { IoMdTrash } from "react-icons/io";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { MdEditSquare } from "react-icons/md";


function ToDoList(){

    // Stores all task
    const [tasks, setTasks] = useState([]);

    // Current editing task
    const [newTask, setNewTask] = useState("");

    /* To Do List Functions */

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        // Add new task in tasks array
        if(newTask.trim() !== ""){
            setTasks(tasks => {
                const updatedTasks = [...tasks, newTask];
                console.log(updatedTasks);
                return updatedTasks
            });
            setNewTask("");
            {document.getElementsByClassName('add-new-task').value = ""}; // empty input field
            return
        }
        // Display error if the input field is empty
        alert("Please enter a task!")
    }

    function editTask(event, index){
        // Update/edit a specified task in tasks
        const updatedTasks = [...tasks];
        updatedTasks[index] = event.target.value;
        setTasks(updatedTasks);
    }

    function makeTaskEditable(index){
        // Toggles the input field to be editable
        let input_field = document.getElementById(`task-${index}`);
        if (input_field.readOnly){
            input_field.readOnly = false;
            input_field.style.border = '1px solid rgb(224, 224, 224)';
            input_field.style.background = '#979DAC';
            input_field.style.color = 'black';
        } else{
            input_field.readOnly = true;
            input_field.style.border = 'none';
            input_field.style.background = 'none';
            input_field.style.color = 'white';
        }
    }

    function deleteTask(index){
        if(confirm("Are you sure you want to delete this task?")){
            // Updates the task without the deleted index
            const updatedTasks = tasks.filter((_, i) => i != index);
            setTasks(updatedTasks);
        }
    }

    function taskIsDone(index){
        let check_box = document.getElementById(`checkBox-${index}`);
        let task_name = document.getElementById(`task-${index}`);
        if (check_box.checked == true){
            task_name.style.textDecoration = 'line-through';    
        } else{
            task_name.style.textDecoration = 'none';
        }
    }

    function moveTaskUp(index){
        if(index > 0){
            // Moves the task upward
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]]
            setTasks(updatedTask);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            // Moves the task downward
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index+1]] = [updatedTask[index+1], updatedTask[index]]
            setTasks(updatedTask);
        }
    }

    return(
        <div className='to-do-list'>
            <h1>To Do List ni Bok</h1>

            <div>
                <input
                    type='text'
                    className='add-new-task'
                    placeholder='What do you want to do?...'
                    value={newTask} 
                    onChange={handleInputChange}/>
                <button 
                    className='add-button' 
                    onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {/* Iterates and display all the stored tasks */}
                {tasks.map((task, index) => 
                    <li key={index}>
                        <input type='checkbox' id={`checkBox-${index}`} onClick={() => taskIsDone(index)}></input>
                        <input 
                            type='text' 
                            className='task-name'
                            id={`task-${index}`}
                            value={task}
                            onChange={(event) => {
                                editTask(event, index);
                            }}
                            readOnly 
                            ></input>
                        <button 
                            className='edit-button' 
                            onClick={() => makeTaskEditable(index)}>
                            <MdEditSquare /> {/* Edit Icon*/}
                        </button>
                        <button 
                            className='delete-button' 
                            onClick={() => deleteTask(index)}> 
                            <IoMdTrash /> {/* Delete Icon*/}
                        </button>
                        <button 
                            className='move-button' 
                            onClick={() => moveTaskUp(index)}> 
                            <TiArrowSortedUp /> {/* Arrow Up Icon*/}
                        </button>
                        <button 
                            className='move-button' 
                            onClick={() => moveTaskDown(index)}> 
                            <TiArrowSortedDown /> {/* Arrow Down Icon*/}
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList