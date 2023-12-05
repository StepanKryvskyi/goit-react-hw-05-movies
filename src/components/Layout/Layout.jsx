import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'Styles';

import { StyledHeader, StyledList, StyledNavLink } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <StyledList>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </li>
          </StyledList>
        </nav>
      </StyledHeader>
      <main>
        <Outlet />
      </main>
      <GlobalStyle />
    </>
  );
};
