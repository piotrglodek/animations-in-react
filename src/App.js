import { Button, TodoList } from './components';
function App() {
  return (
    <>
      <h1>Framer motion</h1>
      <p>Button</p>
      <Button label='Click me' />
      <p>Todolist with delete item animation</p>
      <TodoList />
    </>
  );
}

export default App;
