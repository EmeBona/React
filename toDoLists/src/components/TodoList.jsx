import { useState } from "react";

function TodoList({ initialTodos }) {
    const [todos, setTodos] = useState(initialTodos); 
    const [inputValue, setInputValue] = useState(''); 
  
    
    function handleInputChange(e) {
      setInputValue(e.target.value);
    }
  
    function addTodo(todo) {
        if (todo.trim()) { 
          setTodos([...todos, {todo}]);
        }
    }
    
    function handleAddTodo() {
        addTodo(inputValue);
        setInputValue(''); 
    }

    function handleReset() {
        setTodos([]); 
    }

    function handleRemoveTodo(index) {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }
  
    return (
    <div>
        <ul>
          {todos.map((item, index) => (
            <li key={index}>{item.todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={handleReset}>Reset</button>
    </div>
    );
}

export default TodoList