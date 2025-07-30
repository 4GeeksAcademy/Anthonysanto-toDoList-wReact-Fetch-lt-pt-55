import react from 'react';

const Test = () => {

    function getTasks(){
        
        console.log('test')
        fetch('https://playground.4geeks.com/todo/users/Anthonyg')
        .then((response) => response.json())
        .then((data)=> console.log(data.todos))
    }

    
    function AddTasks(){
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            "label": "crear",
            "is_done": false
            } )
        };
        fetch('https://playground.4geeks.com/todo/todos/Anthonyg', requestOptions)
        .then((response) => response.json())
        .then((data)=> console.log(data))
    }
    
        function deleteTasks(id){
        
        console.log('deletetask')
        const requestOptions = {
        method: "DELETE",
        redirect: "follow"
        };


        fetch("https://playground.4geeks.com/todo/todos/44", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

    }
    return  (
        <>
        <button onClick={getTasks}>leer</button>
        <button onClick={AddTasks}>crear</button>
        <button onClick={deleteTasks}>Eliminar</button>
    </>
)
}

export default Test