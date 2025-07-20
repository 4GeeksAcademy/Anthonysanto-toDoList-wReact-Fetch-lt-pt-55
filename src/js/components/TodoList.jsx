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


     <div className='d-flex flex-column justify-content-center align-items-center bg-secondary'>
        <div className="card" style={{width: '18rem'}}>
                <div className="card-header">
                    <ul className="list-group list-group-flush">

                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}  onKeyDown={handleKeyDown} 
                    placeholder="Escribe una tarea" style={{border:'none', outline:'none'}}/>
                        {task.map((elemento, index) => (
                          <li key={index} className="list-group-item" >{elemento}
                          </li>
                    ))}
                    </ul>
                    <p className="d-flex mb-0 text-body-secondary" style={{fontSize:'10px'}}>Tareas pendientes {task.length}</p>
                </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
