import React, { useState } from 'react';
import '/src/styles/index.css';

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

  const deleteTask = (index) => {
  setTask(task.filter((_, i) => i !== index));  
  };

  return (
    <>
    <h1 className='d-flex flex-column justify-content-center align-items-center fw-light' style={{color:'gray'}}>Todos</h1>


      <div className='d-flex flex-column justify-content-center align-items-center'>
          <div className="card" style={{width: '40rem'}}>
                  <div className="card-header">
                      <ul className="list-group list-group-flush">

                        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}  onKeyDown={handleKeyDown} 
                        placeholder="Escribe una tarea" style={{border:'none', outline:'none'}}/>
                            {task.map((elemento, index) => (
                              <li key={index} className="list-group-item text-secondary d-flex justify-content-between align-items-center">{elemento}
                                <span className='delete' onClick={()=>deleteTask(index)}  >X</span>
                              </li>
                        ))}
                      </ul>
                      <footer className="footer">tareas pendientes {task.length}</footer>
                  </div>
                  <div className="fondo-inferior"></div>
                  <div className="fondo-inferior2"></div>
          </div>
        </div>
    </>
  );
};

export default ToDoList;
