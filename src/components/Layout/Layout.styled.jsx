import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  background: gainsboro;
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 40px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 30px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 20px;

  &.active {
    color: #0c38e8;
    font-weight: bold;
  }
`;
