import React from 'react'
import TodoList from './Todo/TodoList'
import AddTodo from './Todo/AddTodo'
import Context from './context'

function App() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: 'Buy bread'},
        {id: 2, completed: false, title: 'Buy butter'},
        {id: 3, completed: false, title: 'Buy milk'},
    ])
      
    function toogleTodo (id) {
        setTodos (
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed  
                    todo.className = 'done' 
                }
                return todo
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos (todos.concat([{
            title,
            id: Date.now(),
            completed: false
        }]))
    }



    return (
        <Context.Provider value={{removeTodo: removeTodo}}>
            <div className="wrapper">
                <h1>React Tutorial</h1> 
                <AddTodo onCreate={addTodo}/>

                {todos.length ? (<TodoList todos={todos} onToogle={toogleTodo}/>) : (<p>No todos</p>)}

            </div>
        </Context.Provider>
    )
}

export default App