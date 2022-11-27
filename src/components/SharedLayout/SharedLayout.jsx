import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import * as SC from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <SC.Container>
      <SC.Header>
        <SC.Nav>
          <SC.StyledLink to="/">Home</SC.StyledLink>
          <SC.StyledLink to="/movies">Movies</SC.StyledLink>
        </SC.Nav>
      </SC.Header>
      <Suspense fallback={<div>Loading in progress...</div>}>
        <Outlet />
      </Suspense>
    </SC.Container>
  );
};
