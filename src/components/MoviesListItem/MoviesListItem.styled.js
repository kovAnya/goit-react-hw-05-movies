import styled from 'styled-components';

export const Movie = styled.li`
  padding: 4px;
  font-size: 18px;
  list-style: square;

  & a {
    color: #000;
    &:hover {
      color: coral;
    }
  }
`;
