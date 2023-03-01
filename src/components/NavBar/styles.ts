import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.gray.main};
  box-shadow: 4px 6px 13px rgba(215, 215, 215, 0.25);
  padding: 1.6rem 5%;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 128rem;
`;

export const NavTitle = styled.div`
  display: flex;
  align-items: baseline;

  h1 {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-weight: 600;
    color: ${({ theme }) => theme.colors.blue};
  }

  h4 {
    font-size: clamp(0.6rem, 2.5vw, 1.2rem);
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const NavMenu = styled.ul`
  display: inline-flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavMenuItem = styled.li`
  list-style: none;
`;
