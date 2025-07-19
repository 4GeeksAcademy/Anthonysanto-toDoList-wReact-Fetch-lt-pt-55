import React, { useState } from 'react';

const ToDoList = () => {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === 'Tab') {

      if (inputValue.trim() !== '') {
            if(task.length == 0){
                setTask([ inputValue.trim(),...task]);}
            else{
                setTask([...task,inputValue.trim()])
            }
            setInputValue('');//limpia el valor
      }
    }
  }

  return (
    <>
      <h1>Lista de tareas</h1>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe una tarea"
      />{task.length}

     <div className='d-flex flex-column justify-content-center align-items-center bg-secondary'>
        <div className="card" style={{width: '18rem'}}>
                <div className="card-header">
                    <ul className="list-group list-group-flush">
                        {task.map((elemento, index) => (
                        <li key={index} className="list-group-item" >{elemento}</li>
                    ))}
                    </ul>
                </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
