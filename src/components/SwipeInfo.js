import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const SwipeInfo = () => {
  const [isOpen, setOpen] = useState(false);

  const handlePan = (e, info) => {
    if (info.offset.x >= 50) {
      console.log('swipe right');
      setOpen(false);
    }
    if (info.offset.x <= -50) {
      console.log('swipe left');
      setOpen(true);
    }
  };

  return (
    <StyledWrapper onPanEnd={handlePan}>
      <p>swipe area</p>
      <StyledSwipeContent
        variants={swipeVariants}
        animate={isOpen ? 'open' : 'hidden'}
        initial='hidden'
        transition={{
          duration: 0.4,
        }}
      >
        <p>Content title</p>
        <p>swipe to right to hide</p>
      </StyledSwipeContent>
    </StyledWrapper>
  );
};

const swipeVariants = {
  open: {
    x: 0,
    opacity: 1,
  },
  hidden: { x: '100%', opacity: 0 },
};

const StyledWrapper = styled(motion.div)`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 50px 0;
  display: grid;
  place-items: center;
  & p {
    user-select: none;
    pointer-events: none;
  }
`;

const StyledSwipeContent = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  padding: 10px;
  background-color: #fff;
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.15) -1.95px 0 2.6px;
`;
