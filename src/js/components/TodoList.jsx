import React, { useState,useEffect } from 'react';
import '/src/styles/index.css';

const ToDoList = () => {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState('');

 useEffect(() => {
    getTasks();
    }, []);

  
  const getTasks = () => {
      fetch('https://playground.4geeks.com/todo/users/Anthonyg')
      .then(response => response.json())
      .then(data => setTask(data.todos));
  };


    function AddTasks(label){
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            "label": label,
            "is_done": false
            } )
        };
      fetch('https://playground.4geeks.com/todo/todos/Anthonyg', requestOptions)
          .then((response) => response.json())
          .then((data) => {
            setTask(prevTasks => [...prevTasks, data]);
          })

}


function detectKey(event) {
  if (event.key === 'Enter' || event.key === 'Tab') {
    if (inputValue.trim() !== '') {
      AddTasks(inputValue.trim());
      setInputValue('');
    }
  }
}

  function borrarTarea(id){
    const requestOptions = {
      method: "DELETE",
      redirect: "follow"
    };

      fetch("https://playground.4geeks.com/todo/todos/"+id, requestOptions)
      .then((response) => response.text())
      .then((result) => getTasks())
      .catch((error) => console.error(error));
      //getTasks();
  }
  
 

  return (
    <>
    <h1 className='d-flex flex-column justify-content-center align-items-center fw-light' style={{color:'gray'}}>List to do</h1>
      <div className='d-flex flex-column justify-content-center align-items-center'>
          <div className="card" style={{width: '40rem'}}>
                  <div className="card-header bg-white">
                      <ul className="list-group list-group-flush">
                        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}  onKeyDown={detectKey} 
                        placeholder="Escribe una tarea" style={{border:'none', outline:'none'}}/>
                            {task.map((elemento, index) => (
                              <li key={index} className="list-group-item text-secondary d-flex justify-content-between align-items-center">{elemento.label}
                                <span className='delete' onClick={()=>borrarTarea(elemento.id)}  >X</span>
                              </li>
                        ))}
                      </ul>

                  </div>
                      <footer className="footer-container">
                        <div className="footer">
                                  {task.length} item left
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
