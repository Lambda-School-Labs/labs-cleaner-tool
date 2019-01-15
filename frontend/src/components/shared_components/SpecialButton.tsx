import React from 'react';
import styled from '@emotion/styled';

// functionality is different
// text is different
// data-testid

const StyledButton = styled('button')`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: #5d9abc;
  border: none;
`;

interface ButtonProps {
  onClick?: () => void;
  text?: string;
  datatestid?: string;
}

const SpecialButton = ({ onClick, text, datatestid }: ButtonProps) => {
  return (
    <>
      <StyledButton onClick={onClick} type='button' data-testid={datatestid}>
        {text}
      </StyledButton>
    </>
  );
};

export default SpecialButton;
