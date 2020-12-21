import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = ({ label, ...rest }) => (
  <StyledBaseButton whileTap={{ scale: 0.95 }} {...rest}>
    {label}
  </StyledBaseButton>
);

const StyledBaseButton = styled(motion.button)`
  background-color: ${({ theme: { color } }) => color.primary};
  border: none;
  outline: none;
  transition: background 0.2s linear;
  padding: 10px 24px;
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme: { color } }) => color.darkPrimary};
  }
`;

Button.propTypes = {
  label: PropTypes.string.isRequired,
};
