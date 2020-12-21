import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const Accordion = ({ head, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <StyledWrapper layout onClick={toggleOpen}>
      <StyledHead>{head}</StyledHead>
      <AnimatePresence>
        {isOpen && (
          <StyledContent
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {content}
          </StyledContent>
        )}
      </AnimatePresence>
    </StyledWrapper>
  );
};

const StyledWrapper = styled(motion.div)``;
const StyledHead = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme: { color } }) => color.primary};
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;
const StyledContent = styled(motion.div)`
  color: #111;
  padding: 16px 10px;
  font-weight: 400;
`;

Accordion.propTypes = {
  head: PropTypes.node,
  content: PropTypes.node,
};
