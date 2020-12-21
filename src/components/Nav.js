import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { useState } from 'react';

export const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const handleToggle = () => setOpen(prev => !prev);

  return (
    <>
      <Button onClick={handleToggle} label='Toggle sidebar' />
      <StyledNav
        variants={navVariants}
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
      >
        <StyledCloseBtn onClick={handleToggle} />
        <StyledList>
          <StyledListItem>Home</StyledListItem>
          <StyledListItem>About</StyledListItem>
          <StyledListItem>More</StyledListItem>
        </StyledList>
      </StyledNav>
    </>
  );
};

const navVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: '-100%',
  },
};

const StyledNav = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 250px;
  height: 100vh;
  background-color: ${({ theme: { color } }) => color.white};
`;

const StyledCloseBtn = styled.button`
  display: block;
  margin-left: auto;
  background: none;
  border: none;
  outline: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: relative;
  padding: 0;

  &::after,
  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 15px;
    height: 2px;
    background-color: ${({ theme: { color } }) => color.primary};
  }
  &::after {
    transform: translate(-50%) rotate(45deg);
  }

  &::before {
    transform: translate(-50%) rotate(-45deg);
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
`;
const StyledListItem = styled.li`
  color: #444;
  padding: 9px 18px;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    margin-right: 10px;
    border-radius: 50%;
    display: block;
    background-color: ${({ theme: { color } }) => color.primary};
  }
`;
