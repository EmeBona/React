import './App.css'
import TodoList from './components/TodoList'

function App() {
  

  return (
    <>
    <TodoList initialTodos={[
      {todo: "Go to the gym"},
      {todo: "Go groceries shopping"},
      {todo: "Make dinner"}
    ]}/>
    </>
  )
}

export default App
