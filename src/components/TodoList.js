import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

export const TodoList = () => {
  const [todos, setTodos] = useState([
    'Todo',
    'Todo 2',
    'Todo 3',
    'Todo 4',
    'Todo 5',
  ]);

  const handleDeleteTodo = todo => {
    setTodos(prevState => prevState.filter(value => value !== todo));
  };

  return (
    <StyledList>
      <AnimatePresence>
        {todos.map(todo => {
          return (
            <StyledListItem
              key={todo}
              initial={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '-100%' }}
              transition={{
                duration: 0.3,
              }}
            >
              {todo}
              <StyledDeleteButton onClick={() => handleDeleteTodo(todo)} />
            </StyledListItem>
          );
        })}
      </AnimatePresence>
    </StyledList>
  );
};

const StyledList = styled(motion.ul)`
  padding: 10px 0;
  margin: 0;
  list-style-type: none;
  width: max-content;
`;

const StyledListItem = styled(motion.li)`
  color: ${({ theme: { color } }) => color.primary};
  font-size: 15px;
  font-weight: bold;
  padding: 10px 10px;
  min-width: 200px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: -0.2px;
  &:hover {
    background-color: ${({ theme: { color } }) => color.white};
  }
`;

const StyledDeleteButton = styled(motion.button)`
  background: none;
  border: none;
  outline: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: relative;
  padding: 0;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${StyledListItem}:hover & {
    opacity: 1;
  }

  &::after,
  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 15px;
    height: 1px;
    background-color: ${({ theme: { color } }) => color.primary};
  }
  &::after {
    transform: translate(-50%) rotate(45deg);
  }

  &::before {
    transform: translate(-50%) rotate(-45deg);
  }
`;
