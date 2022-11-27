import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 25px;
  margin-left: 50px;
`;

export const Searchbar = styled.input`
  width: 500px;
  padding: 8px;
  border: 1px solid coral;
  border-radius: 4px 0 0 4px;
`;

export const Btn = styled.button`
  padding: 8px 10px;
  margin-bottom: 10px;
  border: 1px solid coral;
  box-shadow: 0px 1px 5px #ccc;
  border-radius: 0 4px 4px 0;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`;
