import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const Header = styled.header`
  padding: 20px 50px;
  box-shadow: 0px 1px 5px #ccc;
  background-color: rgb(245, 245, 245);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 25px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  color: #000;
  &.active {
    color: coral;
  }
`;
