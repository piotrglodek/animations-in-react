import { Button, TodoList, Nav, Accordion } from './components';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Framer motion</h1>
      <p>Button</p>
      <Button label='Click me' />
      <p>Todolist with delete item animation</p>
      <TodoList />
      <p>Navigation</p>
      <Nav />
      <p>Accordion</p>
      <Accordion
        head='Accordion Title click to see more'
        content='Accordion content'
      />
    </motion.div>
  );
}

export default App;
