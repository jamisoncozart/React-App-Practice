import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: ${props => props.alt ? 'black' : 'white'};
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;