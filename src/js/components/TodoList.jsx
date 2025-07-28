import React, { useState } from 'react';
import '/src/styles/index.css';

const ToDoList = () => {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function detectKey(event) {
    if (event.key === 'Enter' || event.key === 'Tab') {

      if (inputValue.trim() !== '') {
            if(task.length == 0){
                setTask([ inputValue.trim(),...task]);}
            else{
                setTask([...task,inputValue.trim()])
            }
            setInputValue('');
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
                  <div className="card-header bg-white">
                      <ul className="list-group list-group-flush">
                        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}  onKeyDown={detectKey} 
                        placeholder="Escribe una tarea" style={{border:'none', outline:'none'}}/>
                            {task.map((elemento, index) => (
                              <li key={index} className="list-group-item text-secondary d-flex justify-content-between align-items-center">{elemento}
                                <span className='delete' onClick={()=>deleteTask(index)}  >X</span>
                              </li>
                        ))}
                      </ul>

                  </div>
                      <footer className="footer-container">
                        <div className="footer">
                                  {task.length} tareas pendientes
                        </div>
                        <div className="sombra"></div>
                        <div className="sombra"></div>
                      </footer>

          </div>
        </div>
    </>
  );
};

export default ToDoList;
