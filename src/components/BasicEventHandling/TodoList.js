import React, { useState } from 'react'

const TodoList = () => {
    const [todoText, setTodoText] = useState('')
    const [todoList, setTodoList] = useState([]);

    const handleTodo = () =>{
        setTodoList([...todoList, todoText])
        setTodoText('')
    }

  return (
    <div>
        <input type='text' value={todoText} onChange={(e) => setTodoText(e.target.value)} />
        <button onClick={handleTodo}>add to do</button>
        {
            todoList.map((todo) => <p>{todo}</p>)
        }
    </div>
  )
}

export default TodoList