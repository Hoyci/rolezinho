import styled from 'styled-components';

interface IButtonProps {
  ghost?: boolean;
  outlined?: boolean;
}

export const Button = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  background-color: ${({ ghost }) =>
    ghost ? 'transparent' : ({ theme }) => theme.colors.primary.main};
  border: ${({ outlined }) =>
    outlined ? `1px solid ${({ theme }) => theme.colors.gray.main}` : 'none'};
  color: ${({ ghost }) =>
    ghost ? ({ theme }) => theme.colors.gray.main : '#fff'};
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 4px;
  transition: all 0.3 ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ ghost }) =>
      ghost
        ? ({ theme }) => theme.colors.gray.main
        : ({ theme }) => theme.colors.primary.darker};
    color: ${({ ghost }) =>
      ghost ? '#fff' : ({ theme }) => theme.colors.gray.main};
  }

  img {
    width: 1.4rem;
    height: 1.4rem;
    margin-right: 1rem;
  }
`;
